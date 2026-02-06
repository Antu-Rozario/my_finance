'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { TransactionFormData, transactionSchema } from '@/lib/validators'
import { TransactionType, Prisma, Transaction } from '@/generated/prisma/client'
import { requireAuth } from '@/lib/auth'

// Transaction with included relations type
export type TransactionWithRelations = Transaction & {
    account: { name: string }
    category: { name: string } | null
    payer: { name: string } | null
    payee: { name: string } | null
    paymentMethod: { name: string } | null
    transferToAccount: { name: string } | null
}

export type TransactionFilters = {
    accountId?: number
    type?: TransactionType
    categoryId?: number
    startDate?: Date
    endDate?: Date
    search?: string
    page?: number
    limit?: number
}

// Cursor-based pagination types
export type CursorPaginationParams = {
    cursor?: string | null  // Encoded cursor (id:date)
    limit?: number
    direction?: 'next' | 'prev'
} & Omit<TransactionFilters, 'page'>

export type CursorPaginationResult<T> = {
    data: T[]
    nextCursor: string | null
    prevCursor: string | null
    hasMore: boolean
    total?: number
}

export async function getTransactions(filters: TransactionFilters = {}) {
    const user = await requireAuth()
    const { accountId, type, categoryId, startDate, endDate, search, page = 1, limit = 20 } = filters

    const where: Prisma.TransactionWhereInput = {
        userId: user.id,
    }

    if (accountId) where.accountId = accountId
    if (type) where.type = type
    if (categoryId) where.categoryId = categoryId

    if (startDate || endDate) {
        where.date = {}
        if (startDate) where.date.gte = startDate
        if (endDate) where.date.lte = endDate
    }

    if (search) {
        where.OR = [
            { note: { contains: search, mode: 'insensitive' } },
            { reference: { contains: search, mode: 'insensitive' } },
        ]
    }

    const [transactions, total] = await Promise.all([
        prisma.transaction.findMany({
            where,
            orderBy: { date: 'desc' },
            skip: (page - 1) * limit,
            take: limit,
            include: {
                account: true,
                category: true,
                payer: true,
                payee: true,
                paymentMethod: true,
                transferToAccount: true,
            },
        }),
        prisma.transaction.count({ where }),
    ])

    return {
        transactions,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
    }
}

/**
 * Cursor-based pagination for transactions
 * More efficient for large datasets as it uses index seek instead of offset
 * 
 * Cursor format: base64 encoded "id:date" string
 */
export async function getTransactionsCursor(
    params: CursorPaginationParams
): Promise<CursorPaginationResult<TransactionWithRelations>> {
    const user = await requireAuth()
    const {
        cursor,
        limit = 20,
        direction = 'next',
        accountId,
        type,
        categoryId,
        startDate,
        endDate,
        search,
    } = params

    // Build where clause
    const where: Prisma.TransactionWhereInput = {
        userId: user.id,
    }

    if (accountId) where.accountId = accountId
    if (type) where.type = type
    if (categoryId) where.categoryId = categoryId

    if (startDate || endDate) {
        where.date = {}
        if (startDate) where.date.gte = startDate
        if (endDate) where.date.lte = endDate
    }

    if (search) {
        where.OR = [
            { note: { contains: search, mode: 'insensitive' } },
            { reference: { contains: search, mode: 'insensitive' } },
        ]
    }

    // Parse cursor if provided
    let cursorData: { id: number; date: Date } | null = null
    if (cursor) {
        try {
            const decoded = Buffer.from(cursor, 'base64').toString('utf-8')
            const [idStr, dateStr] = decoded.split(':')
            cursorData = {
                id: parseInt(idStr, 10),
                date: new Date(dateStr),
            }
        } catch {
            // Invalid cursor, ignore it
        }
    }

    // Build cursor condition for efficient pagination
    // We use (date, id) as the cursor since we order by date desc, then id desc
    if (cursorData) {
        if (direction === 'next') {
            // For next page: get records with date < cursor.date OR (date = cursor.date AND id < cursor.id)
            where.AND = [
                ...(where.AND ? (Array.isArray(where.AND) ? where.AND : [where.AND]) : []),
                {
                    OR: [
                        { date: { lt: cursorData.date } },
                        {
                            date: { equals: cursorData.date },
                            id: { lt: cursorData.id },
                        },
                    ],
                },
            ]
        } else {
            // For prev page: get records with date > cursor.date OR (date = cursor.date AND id > cursor.id)
            where.AND = [
                ...(where.AND ? (Array.isArray(where.AND) ? where.AND : [where.AND]) : []),
                {
                    OR: [
                        { date: { gt: cursorData.date } },
                        {
                            date: { equals: cursorData.date },
                            id: { gt: cursorData.id },
                        },
                    ],
                },
            ]
        }
    }

    // Fetch one extra record to determine if there's more data
    const take = limit + 1

    const transactions = await prisma.transaction.findMany({
        where,
        orderBy: direction === 'next' 
            ? [{ date: 'desc' }, { id: 'desc' }] 
            : [{ date: 'asc' }, { id: 'asc' }],
        take: direction === 'next' ? take : -take, // Negative take for prev direction
        include: {
            account: true,
            category: true,
            payer: true,
            payee: true,
            paymentMethod: true,
            transferToAccount: true,
        },
    })

    // If fetching previous page, reverse to maintain consistent order
    const orderedTransactions = direction === 'prev' 
        ? transactions.reverse() 
        : transactions

    // Check if we have more data
    const hasMore = orderedTransactions.length > limit
    const data = hasMore ? orderedTransactions.slice(0, limit) : orderedTransactions

    // Generate cursors
    const encodeCursor = (id: number, date: Date): string => {
        return Buffer.from(`${id}:${date.toISOString()}`).toString('base64')
    }

    const nextCursor = hasMore && data.length > 0
        ? encodeCursor(data[data.length - 1].id, data[data.length - 1].date)
        : null

    const prevCursor = data.length > 0
        ? encodeCursor(data[0].id, data[0].date)
        : null

    // Get total count (optional, can be expensive on large datasets)
    const total = await prisma.transaction.count({ where: { userId: user.id } })

    return {
        data,
        nextCursor,
        prevCursor,
        hasMore,
        total,
    }
}

export async function getTransaction(id: number) {
    const user = await requireAuth()
    return prisma.transaction.findFirst({
        where: {
            id,
            userId: user.id,
        },
        include: {
            account: true,
            category: true,
            payer: true,
            payee: true,
            paymentMethod: true,
            transferToAccount: true,
            linkedTransaction: true,
        },
    })
}

async function recalculateAccountBalances(userId: string, accountId: number, fromDate?: Date) {
    // Get the account's opening balance
    const account = await prisma.financeAccount.findFirst({
        where: { id: accountId, userId },
        select: { openingBalance: true },
    })

    if (!account) {
        throw new Error('Account not found')
    }

    // Get all transactions for this account ordered by date
    const whereClause: Prisma.TransactionWhereInput = {
        accountId,
        userId,
    }
    if (fromDate) {
        whereClause.date = { gte: fromDate }
    }

    const transactions = await prisma.transaction.findMany({
        where: whereClause,
        orderBy: [{ date: 'asc' }, { createdAt: 'asc' }],
        select: { id: true, credit: true, debit: true, balance: true },
    })

    // Calculate all balances in-memory, starting from opening balance
    let runningBalance = account.openingBalance
    const updates: { id: number; balance: number }[] = []

    for (const transaction of transactions) {
        runningBalance += transaction.credit - transaction.debit

        // Only add to updates if balance changed
        if (transaction.balance !== runningBalance) {
            updates.push({ id: transaction.id, balance: runningBalance })
        }
    }

    // Batch update all transactions in a single database transaction
    if (updates.length > 0) {
        await prisma.$transaction(
            updates.map(update =>
                prisma.transaction.update({
                    where: { id: update.id },
                    data: { balance: update.balance },
                })
            )
        )
    }
}

export async function createTransaction(data: TransactionFormData) {
    const user = await requireAuth()
    const validated = transactionSchema.parse(data)

    // Verify account ownership
    const account = await prisma.financeAccount.findFirst({
        where: {
            id: validated.accountId,
            userId: user.id,
        },
    })

    if (!account) {
        return { success: false, error: 'Account not found or access denied' }
    }

    if (validated.type === 'TRANSFER') {
        // Handle transfer - create two linked transactions
        if (!validated.transferToAccountId) {
            return { success: false, error: 'Destination account is required for transfers' }
        }

        // Verify destination account ownership
        const destinationAccount = await prisma.financeAccount.findFirst({
            where: {
                id: validated.transferToAccountId,
                userId: user.id,
            },
        })

        if (!destinationAccount) {
            return { success: false, error: 'Destination account not found or access denied' }
        }

        // Create the debit (outgoing) transaction
        const debitTransaction = await prisma.transaction.create({
            data: {
                userId: user.id,
                accountId: validated.accountId,
                date: validated.date,
                type: TransactionType.TRANSFER,
                amount: validated.amount,
                transferToAccountId: validated.transferToAccountId,
                note: validated.note || null,
                reference: validated.reference || null,
                debit: validated.amount,
                credit: 0,
                balance: 0, // Will be recalculated
            },
        })

        // Create the credit (incoming) transaction
        const creditTransaction = await prisma.transaction.create({
            data: {
                userId: user.id,
                accountId: validated.transferToAccountId,
                date: validated.date,
                type: TransactionType.TRANSFER,
                amount: validated.amount,
                linkedTransactionId: debitTransaction.id,
                note: validated.note || null,
                reference: validated.reference || null,
                debit: 0,
                credit: validated.amount,
                balance: 0, // Will be recalculated
            },
        })

        // Link the debit transaction to the credit transaction
        await prisma.transaction.update({
            where: { id: debitTransaction.id },
            data: { linkedTransactionId: creditTransaction.id },
        })

        // Recalculate balances for both accounts
        await recalculateAccountBalances(user.id, validated.accountId)
        await recalculateAccountBalances(user.id, validated.transferToAccountId)

        revalidatePath('/transactions')
        revalidatePath('/accounts')
        revalidatePath('/')
        return { success: true, transaction: debitTransaction }
    }

    // Handle income or expense
    const isIncome = validated.type === 'INCOME'

    const transaction = await prisma.transaction.create({
        data: {
            userId: user.id,
            accountId: validated.accountId,
            date: validated.date,
            type: validated.type as TransactionType,
            categoryId: validated.categoryId || null,
            amount: validated.amount,
            payerId: isIncome ? (validated.payerId || null) : null,
            payeeId: !isIncome ? (validated.payeeId || null) : null,
            paymentMethodId: validated.paymentMethodId || null,
            reference: validated.reference || null,
            note: validated.note || null,
            debit: isIncome ? 0 : validated.amount,
            credit: isIncome ? validated.amount : 0,
            balance: 0, // Will be recalculated
        },
    })

    await recalculateAccountBalances(user.id, validated.accountId)

    revalidatePath('/transactions')
    revalidatePath('/accounts')
    revalidatePath('/')
    return { success: true, transaction }
}

export async function updateTransaction(id: number, data: TransactionFormData) {
    const user = await requireAuth()
    const validated = transactionSchema.parse(data)

    const existingTransaction = await prisma.transaction.findFirst({
        where: {
            id,
            userId: user.id,
        },
        include: { linkedTransaction: true },
    })

    if (!existingTransaction) {
        return { success: false, error: 'Transaction not found or access denied' }
    }

    // Verify new account ownership
    const newAccount = await prisma.financeAccount.findFirst({
        where: {
            id: validated.accountId,
            userId: user.id,
        },
    })

    if (!newAccount) {
        return { success: false, error: 'Account not found or access denied' }
    }

    // If it was a transfer, handle differently
    if (existingTransaction.type === 'TRANSFER' && existingTransaction.linkedTransactionId) {
        // Delete both linked transactions and create new ones
        await deleteTransaction(id)
        return createTransaction(data)
    }

    const isIncome = validated.type === 'INCOME'
    const oldAccountId = existingTransaction.accountId

    await prisma.transaction.update({
        where: { id },
        data: {
            accountId: validated.accountId,
            date: validated.date,
            type: validated.type as TransactionType,
            categoryId: validated.categoryId || null,
            amount: validated.amount,
            payerId: isIncome ? (validated.payerId || null) : null,
            payeeId: !isIncome ? (validated.payeeId || null) : null,
            paymentMethodId: validated.paymentMethodId || null,
            reference: validated.reference || null,
            note: validated.note || null,
            debit: isIncome ? 0 : validated.amount,
            credit: isIncome ? validated.amount : 0,
        },
    })

    // Recalculate balances
    await recalculateAccountBalances(user.id, validated.accountId)
    if (oldAccountId !== validated.accountId) {
        await recalculateAccountBalances(user.id, oldAccountId)
    }

    revalidatePath('/transactions')
    revalidatePath('/accounts')
    revalidatePath('/')
    return { success: true, error: undefined }
}

export async function deleteTransaction(id: number) {
    const user = await requireAuth()

    const transaction = await prisma.transaction.findFirst({
        where: {
            id,
            userId: user.id,
        },
        include: { linkedTransaction: true },
    })

    if (!transaction) {
        return { success: false, error: 'Transaction not found or access denied' }
    }

    const accountsToRecalculate = [transaction.accountId]

    // If this is a transfer, delete both sides
    if (transaction.linkedTransactionId) {
        const linkedTransaction = await prisma.transaction.findFirst({
            where: {
                id: transaction.linkedTransactionId,
                userId: user.id,
            },
        })

        if (linkedTransaction) {
            accountsToRecalculate.push(linkedTransaction.accountId)

            // Unlink first to avoid foreign key issues
            await prisma.transaction.update({
                where: { id: transaction.linkedTransactionId },
                data: { linkedTransactionId: null },
            })
            await prisma.transaction.update({
                where: { id },
                data: { linkedTransactionId: null },
            })

            // Delete linked transaction
            await prisma.transaction.delete({
                where: { id: transaction.linkedTransactionId },
            })
        }
    }

    // Delete the main transaction
    await prisma.transaction.delete({
        where: { id },
    })

    // Recalculate balances for affected accounts
    for (const accountId of accountsToRecalculate) {
        await recalculateAccountBalances(user.id, accountId)
    }

    revalidatePath('/transactions')
    revalidatePath('/accounts')
    revalidatePath('/')
    return { success: true }
}

export async function deleteMultipleTransactions(ids: number[]) {
    const user = await requireAuth()
    const accountsToRecalculate = new Set<number>()

    for (const id of ids) {
        const transaction = await prisma.transaction.findFirst({
            where: {
                id,
                userId: user.id,
            },
        })

        if (transaction) {
            accountsToRecalculate.add(transaction.accountId)
            await deleteTransaction(id)
        }
    }

    revalidatePath('/transactions')
    revalidatePath('/accounts')
    revalidatePath('/')
    return { success: true }
}
