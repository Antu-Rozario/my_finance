'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { CategoryFormData, categorySchema } from '@/lib/validators'
import { CategoryType } from '@/generated/prisma/client'
import { requireAuth } from '@/lib/auth'

export async function getCategories(type?: CategoryType) {
    const user = await requireAuth()

    return prisma.category.findMany({
        where: {
            userId: user.id,
            ...(type ? { type } : {}),
        },
        orderBy: { name: 'asc' },
        include: {
            _count: {
                select: { transactions: true },
            },
        },
    })
}

export async function getCategory(id: number) {
    const user = await requireAuth()

    return prisma.category.findFirst({
        where: { id, userId: user.id },
    })
}

export async function createCategory(data: CategoryFormData) {
    const user = await requireAuth()
    const validated = categorySchema.parse(data)

    const existing = await prisma.category.findFirst({
        where: {
            userId: user.id,
            name: validated.name,
            type: validated.type as CategoryType
        },
    })

    if (existing) {
        return { success: false, error: 'A category with this name and type already exists' }
    }

    const category = await prisma.category.create({
        data: {
            userId: user.id,
            name: validated.name,
            type: validated.type as CategoryType,
        },
    })

    revalidatePath('/categories')
    return { success: true, category }
}

export async function updateCategory(id: number, data: CategoryFormData) {
    const user = await requireAuth()
    const validated = categorySchema.parse(data)

    // Verify ownership
    const existingCategory = await prisma.category.findFirst({
        where: { id, userId: user.id },
    })

    if (!existingCategory) {
        return { success: false, error: 'Category not found' }
    }

    // Check for duplicates
    const duplicate = await prisma.category.findFirst({
        where: {
            userId: user.id,
            name: validated.name,
            type: validated.type as CategoryType,
            NOT: { id },
        },
    })

    if (duplicate) {
        return { success: false, error: 'A category with this name and type already exists' }
    }

    const category = await prisma.category.update({
        where: { id },
        data: {
            name: validated.name,
            type: validated.type as CategoryType,
        },
    })

    revalidatePath('/categories')
    return { success: true, category }
}

export async function deleteCategory(id: number) {
    const user = await requireAuth()

    // Verify ownership
    const existingCategory = await prisma.category.findFirst({
        where: { id, userId: user.id },
    })

    if (!existingCategory) {
        return { success: false, error: 'Category not found' }
    }

    const transactionCount = await prisma.transaction.count({
        where: { categoryId: id, userId: user.id },
    })

    if (transactionCount > 0) {
        return {
            success: false,
            error: `Cannot delete category with ${transactionCount} transaction(s)`
        }
    }

    await prisma.category.delete({
        where: { id },
    })

    revalidatePath('/categories')
    return { success: true }
}
