'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { PayeePayerFormData, payeePayerSchema } from '@/lib/validators'
import { PayeePayerType } from '@/generated/prisma/client'
import { requireAuth } from '@/lib/auth'

export async function getPayeesPayers(type?: PayeePayerType) {
    const user = await requireAuth()

    return prisma.payeePayer.findMany({
        where: {
            userId: user.id,
            ...(type ? { type } : {}),
        },
        orderBy: { name: 'asc' },
        include: {
            _count: {
                select: {
                    payerTransactions: true,
                    payeeTransactions: true,
                },
            },
        },
    })
}

export async function getPayeePayer(id: number) {
    const user = await requireAuth()

    return prisma.payeePayer.findFirst({
        where: { id, userId: user.id },
    })
}

export async function createPayeePayer(data: PayeePayerFormData) {
    const user = await requireAuth()
    const validated = payeePayerSchema.parse(data)

    const existing = await prisma.payeePayer.findFirst({
        where: {
            userId: user.id,
            name: validated.name,
            type: validated.type as PayeePayerType,
        },
    })

    if (existing) {
        return { success: false, error: 'A record with this name and type already exists' }
    }

    const payeePayer = await prisma.payeePayer.create({
        data: {
            userId: user.id,
            name: validated.name,
            type: validated.type as PayeePayerType,
        },
    })

    revalidatePath('/payees-payers')
    return { success: true, payeePayer }
}

export async function updatePayeePayer(id: number, data: PayeePayerFormData) {
    const user = await requireAuth()
    const validated = payeePayerSchema.parse(data)

    // Verify ownership
    const payeePayer = await prisma.payeePayer.findFirst({
        where: { id, userId: user.id },
    })

    if (!payeePayer) {
        return { success: false, error: 'Record not found' }
    }

    const existing = await prisma.payeePayer.findFirst({
        where: {
            userId: user.id,
            name: validated.name,
            type: validated.type as PayeePayerType,
            NOT: { id },
        },
    })

    if (existing) {
        return { success: false, error: 'A record with this name and type already exists' }
    }

    const updated = await prisma.payeePayer.update({
        where: { id },
        data: {
            name: validated.name,
            type: validated.type as PayeePayerType,
        },
    })

    revalidatePath('/payees-payers')
    return { success: true, payeePayer: updated }
}

export async function deletePayeePayer(id: number) {
    const user = await requireAuth()

    // Verify ownership
    const payeePayer = await prisma.payeePayer.findFirst({
        where: { id, userId: user.id },
    })

    if (!payeePayer) {
        return { success: false, error: 'Record not found' }
    }

    const [payerCount, payeeCount] = await Promise.all([
        prisma.transaction.count({ where: { payerId: id } }),
        prisma.transaction.count({ where: { payeeId: id } }),
    ])

    const totalCount = payerCount + payeeCount

    if (totalCount > 0) {
        return {
            success: false,
            error: `Cannot delete with ${totalCount} transaction(s) referencing this record`
        }
    }

    await prisma.payeePayer.delete({
        where: { id },
    })

    revalidatePath('/payees-payers')
    return { success: true }
}
