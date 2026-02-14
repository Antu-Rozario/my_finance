'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { AccountFormData, accountSchema } from '@/lib/validators'
import { TransactionType, PayeePayerType } from '@/generated/prisma/client'
import { requireAuth } from '@/lib/auth'
import { toMidnightUTC, formatInTz } from '@/lib/dateUtils'
import { getSettings } from '@/actions/settings'

export async function getAccounts() {
    const user = await requireAuth()

    const accounts = await prisma.financeAccount.findMany({
        where: { userId: user.id },
        orderBy: { name: 'asc' },
    })

    // Calculate current balance for each account by summing credits - debits
    const accountsWithBalances = await Promise.all(
        accounts.map(async (account) => {
            const [result, transactionCount] = await Promise.all([
                prisma.transaction.aggregate({
                    where: { accountId: account.id, userId: user.id },
                    _sum: { credit: true, debit: true },
                }),
                prisma.transaction.count({
                    where: { accountId: account.id, userId: user.id },
                }),
            ])

            return {
                ...account,
                currentBalance: (result._sum.credit || 0) - (result._sum.debit || 0),
                transactionCount,
            }
        })
    )

    return accountsWithBalances
}

export async function getAccount(id: number) {
    const user = await requireAuth()

    return prisma.financeAccount.findFirst({
        where: { id, userId: user.id },
    })
}

export async function getAccountWithTransactions(id: number, startDate?: Date, endDate?: Date) {
    const user = await requireAuth()

    const account = await prisma.financeAccount.findFirst({
        where: { id, userId: user.id },
    })

    if (!account) return null

    const whereClause: Record<string, unknown> = { accountId: id, userId: user.id }

    if (startDate || endDate) {
        whereClause.date = {}
        if (startDate) (whereClause.date as Record<string, Date>).gte = startDate
        if (endDate) (whereClause.date as Record<string, Date>).lte = endDate
    }

    const transactions = await prisma.transaction.findMany({
        where: whereClause,
        orderBy: { date: 'asc' },
        include: {
            category: true,
            payer: true,
            payee: true,
            paymentMethod: true,
            transferToAccount: true,
        },
    })

    // Recalculate running balance from transactions (opening balance is stored as a transaction)
    let runningBalance = 0
    const transactionsWithBalance = transactions.map(t => {
        runningBalance += t.credit - t.debit
        return { ...t, balance: runningBalance }
    })

    return {
        account,
        transactions: transactionsWithBalance,
        currentBalance: runningBalance,
    }
}

export async function createAccount(data: AccountFormData) {
    const user = await requireAuth()
    const validated = accountSchema.parse(data)

    const account = await prisma.financeAccount.create({
        data: {
            userId: user.id,
            name: validated.name,
            openingBalance: validated.openingBalance,
            note: validated.note || null,
        },
    })

    // If opening balance > 0, create an opening balance transaction
    if (validated.openingBalance > 0) {
        const settings = await getSettings()
        const todayStr = formatInTz(new Date(), settings.timezone, 'yyyy-MM-dd')
        const todayMidnight = toMidnightUTC(todayStr, settings.timezone)
        // Get or create System payer for this user
        let systemPayer = await prisma.payeePayer.findFirst({
            where: {
                userId: user.id,
                name: 'System',
                type: PayeePayerType.PAYER
            },
        })

        if (!systemPayer) {
            systemPayer = await prisma.payeePayer.create({
                data: {
                    userId: user.id,
                    name: 'System',
                    type: PayeePayerType.PAYER
                },
            })
        }

        await prisma.transaction.create({
            data: {
                userId: user.id,
                accountId: account.id,
                date: todayMidnight,
                type: TransactionType.INCOME,
                amount: validated.openingBalance,
                payerId: systemPayer.id,
                note: 'Opening Balance',
                debit: 0,
                credit: validated.openingBalance,
                balance: validated.openingBalance,
            },
        })
    }

    revalidatePath('/accounts')
    revalidatePath('/')
    return { success: true, account }
}

export async function updateAccount(id: number, data: AccountFormData) {
    const user = await requireAuth()
    const validated = accountSchema.parse(data)

    // Verify ownership
    const existingAccount = await prisma.financeAccount.findFirst({
        where: { id, userId: user.id },
    })

    if (!existingAccount) {
        return { success: false, error: 'Account not found' }
    }

    const account = await prisma.financeAccount.update({
        where: { id },
        data: {
            name: validated.name,
            note: validated.note || null,
            // Note: opening balance is read-only after creation
        },
    })

    revalidatePath('/accounts')
    revalidatePath(`/accounts/${id}`)
    return { success: true, account }
}

export async function deleteAccount(id: number) {
    const user = await requireAuth()

    // Verify ownership
    const existingAccount = await prisma.financeAccount.findFirst({
        where: { id, userId: user.id },
    })

    if (!existingAccount) {
        return { success: false, error: 'Account not found' }
    }

    // Check if account has transactions
    const transactionCount = await prisma.transaction.count({
        where: { accountId: id, userId: user.id },
    })

    if (transactionCount > 0) {
        return {
            success: false,
            error: `Cannot delete account with ${transactionCount} transaction(s). Please delete all transactions first.`
        }
    }

    await prisma.financeAccount.delete({
        where: { id },
    })

    revalidatePath('/accounts')
    revalidatePath('/')
    return { success: true }
}
