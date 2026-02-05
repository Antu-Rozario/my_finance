'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { RecurringTransactionFormData, recurringTransactionSchema } from '@/lib/validators'
import { TransactionType, RecurringStatus, RecurringFrequency } from '@/generated/prisma/client'
import { getNextOccurrence } from '@/lib/utils'
import { requireAuth } from '@/lib/auth'

export async function getRecurringTransactions() {
    const user = await requireAuth()

    return prisma.recurringTransaction.findMany({
        where: { userId: user.id },
        orderBy: { nextDate: 'asc' },
        include: {
            account: true,
            category: true,
            payer: true,
            payee: true,
            paymentMethod: true,
        },
    })
}

export async function getRecurringTransaction(id: number) {
    const user = await requireAuth()

    return prisma.recurringTransaction.findFirst({
        where: { id, userId: user.id },
        include: {
            account: true,
            category: true,
            payer: true,
            payee: true,
            paymentMethod: true,
        },
    })
}

export async function createRecurringTransaction(data: RecurringTransactionFormData) {
    const user = await requireAuth()
    const validated = recurringTransactionSchema.parse(data)

    const nextDate = getNextOccurrence(validated.startDate, validated.frequency as RecurringFrequency)

    const recurring = await prisma.recurringTransaction.create({
        data: {
            userId: user.id,
            accountId: validated.accountId,
            type: validated.type as TransactionType,
            categoryId: validated.categoryId,
            amount: validated.amount,
            payerId: validated.payerId || null,
            payeeId: validated.payeeId || null,
            paymentMethodId: validated.paymentMethodId || null,
            reference: validated.reference || null,
            description: validated.description || null,
            startDate: validated.startDate,
            nextDate,
            frequency: validated.frequency as RecurringFrequency,
            status: validated.status as RecurringStatus,
        },
    })

    revalidatePath('/recurring')
    return { success: true, recurring }
}

export async function updateRecurringTransaction(id: number, data: RecurringTransactionFormData) {
    const user = await requireAuth()
    const validated = recurringTransactionSchema.parse(data)

    // Verify ownership
    const existing = await prisma.recurringTransaction.findFirst({
        where: { id, userId: user.id },
    })

    if (!existing) {
        return { success: false, error: 'Recurring transaction not found' }
    }

    const recurring = await prisma.recurringTransaction.update({
        where: { id },
        data: {
            accountId: validated.accountId,
            type: validated.type as TransactionType,
            categoryId: validated.categoryId,
            amount: validated.amount,
            payerId: validated.payerId || null,
            payeeId: validated.payeeId || null,
            paymentMethodId: validated.paymentMethodId || null,
            reference: validated.reference || null,
            description: validated.description || null,
            startDate: validated.startDate,
            frequency: validated.frequency as RecurringFrequency,
            status: validated.status as RecurringStatus,
        },
    })

    revalidatePath('/recurring')
    return { success: true, recurring }
}

export async function deleteRecurringTransaction(id: number) {
    const user = await requireAuth()

    // Verify ownership
    const recurring = await prisma.recurringTransaction.findFirst({
        where: { id, userId: user.id },
    })

    if (!recurring) {
        return { success: false, error: 'Recurring transaction not found' }
    }

    await prisma.recurringTransaction.delete({
        where: { id },
    })

    revalidatePath('/recurring')
    return { success: true }
}

export async function updateRecurringStatus(id: number, status: RecurringStatus) {
    const user = await requireAuth()

    // Verify ownership
    const recurring = await prisma.recurringTransaction.findFirst({
        where: { id, userId: user.id },
    })

    if (!recurring) {
        return { success: false, error: 'Recurring transaction not found' }
    }

    await prisma.recurringTransaction.update({
        where: { id },
        data: { status },
    })

    revalidatePath('/recurring')
    return { success: true }
}

export async function generateTransactionFromRecurring(id: number) {
    const user = await requireAuth()

    const recurring = await prisma.recurringTransaction.findFirst({
        where: { id, userId: user.id },
    })

    if (!recurring) {
        return { success: false, error: 'Recurring transaction not found' }
    }

    const isIncome = recurring.type === TransactionType.INCOME

    // Create the actual transaction
    const transaction = await prisma.transaction.create({
        data: {
            userId: user.id,
            accountId: recurring.accountId,
            date: recurring.nextDate || new Date(),
            type: recurring.type,
            categoryId: recurring.categoryId,
            amount: recurring.amount,
            payerId: isIncome ? recurring.payerId : null,
            payeeId: !isIncome ? recurring.payeeId : null,
            paymentMethodId: recurring.paymentMethodId,
            reference: recurring.reference,
            note: recurring.description,
            debit: isIncome ? 0 : recurring.amount,
            credit: isIncome ? recurring.amount : 0,
            balance: 0, // Will need to be recalculated
        },
    })

    // Update next occurrence date
    const newNextDate = getNextOccurrence(
        recurring.nextDate || new Date(),
        recurring.frequency
    )

    await prisma.recurringTransaction.update({
        where: { id },
        data: {
            nextDate: newNextDate,
            status: RecurringStatus.PENDING,
        },
    })

    revalidatePath('/recurring')
    revalidatePath('/transactions')
    revalidatePath('/accounts')
    revalidatePath('/')
    return { success: true, transaction }
}
