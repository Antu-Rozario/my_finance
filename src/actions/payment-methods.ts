'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { PaymentMethodFormData, paymentMethodSchema } from '@/lib/validators'
import { requireAuth } from '@/lib/auth'

export async function getPaymentMethods() {
    const user = await requireAuth()

    return prisma.paymentMethod.findMany({
        where: { userId: user.id },
        orderBy: { name: 'asc' },
        include: {
            _count: {
                select: { transactions: true },
            },
        },
    })
}

export async function getPaymentMethod(id: number) {
    const user = await requireAuth()

    return prisma.paymentMethod.findFirst({
        where: { id, userId: user.id },
    })
}

export async function createPaymentMethod(data: PaymentMethodFormData) {
    const user = await requireAuth()
    const validated = paymentMethodSchema.parse(data)

    const existing = await prisma.paymentMethod.findFirst({
        where: {
            userId: user.id,
            name: validated.name,
        },
    })

    if (existing) {
        return { success: false, error: 'A payment method with this name already exists' }
    }

    const paymentMethod = await prisma.paymentMethod.create({
        data: {
            userId: user.id,
            name: validated.name,
        },
    })

    revalidatePath('/payment-methods')
    return { success: true, paymentMethod }
}

export async function updatePaymentMethod(id: number, data: PaymentMethodFormData) {
    const user = await requireAuth()
    const validated = paymentMethodSchema.parse(data)

    // Verify ownership
    const paymentMethod = await prisma.paymentMethod.findFirst({
        where: { id, userId: user.id },
    })

    if (!paymentMethod) {
        return { success: false, error: 'Payment method not found' }
    }

    const existing = await prisma.paymentMethod.findFirst({
        where: {
            userId: user.id,
            name: validated.name,
            NOT: { id },
        },
    })

    if (existing) {
        return { success: false, error: 'A payment method with this name already exists' }
    }

    const updated = await prisma.paymentMethod.update({
        where: { id },
        data: { name: validated.name },
    })

    revalidatePath('/payment-methods')
    return { success: true, paymentMethod: updated }
}

export async function deletePaymentMethod(id: number) {
    const user = await requireAuth()

    // Verify ownership
    const paymentMethod = await prisma.paymentMethod.findFirst({
        where: { id, userId: user.id },
    })

    if (!paymentMethod) {
        return { success: false, error: 'Payment method not found' }
    }

    const transactionCount = await prisma.transaction.count({
        where: { paymentMethodId: id },
    })

    if (transactionCount > 0) {
        return {
            success: false,
            error: `Cannot delete payment method with ${transactionCount} transaction(s)`
        }
    }

    await prisma.paymentMethod.delete({
        where: { id },
    })

    revalidatePath('/payment-methods')
    return { success: true }
}
