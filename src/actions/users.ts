'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { hash } from 'bcryptjs'
import { requireAdmin, requireAuth } from '@/lib/auth'
import { UserRole } from '@/generated/prisma/client'

export async function getUsers() {
    await requireAdmin()

    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
            _count: {
                select: {
                    financeAccounts: true,
                    transactions: true,
                    categories: true,
                },
            },
        },
        orderBy: { createdAt: 'desc' },
    })

    return users
}

export async function createUser(data: {
    email: string
    name: string
    password: string
    role: UserRole
}) {
    await requireAdmin()

    // Check if email already exists
    const existing = await prisma.user.findUnique({
        where: { email: data.email },
    })

    if (existing) {
        return { success: false, error: 'A user with this email already exists' }
    }

    // Hash password
    const hashedPassword = await hash(data.password, 10)

    const user = await prisma.user.create({
        data: {
            email: data.email,
            name: data.name,
            password: hashedPassword,
            role: data.role,
        },
        select: {
            id: true,
            email: true,
            name: true,
            role: true,
        },
    })

    revalidatePath('/admin/users')
    return { success: true, user }
}

export async function updateUser(
    id: string,
    data: {
        email?: string
        name?: string
        role?: UserRole
    }
) {
    const admin = await requireAdmin()

    // Prevent admin from modifying their own role
    if (id === admin.id && data.role && data.role !== admin.role) {
        return { success: false, error: 'You cannot change your own role' }
    }

    // Check if email is taken by another user
    if (data.email) {
        const existing = await prisma.user.findFirst({
            where: {
                email: data.email,
                NOT: { id },
            },
        })

        if (existing) {
            return { success: false, error: 'This email is already in use' }
        }
    }

    const user = await prisma.user.update({
        where: { id },
        data: {
            ...(data.email && { email: data.email }),
            ...(data.name && { name: data.name }),
            ...(data.role && { role: data.role }),
        },
        select: {
            id: true,
            email: true,
            name: true,
            role: true,
        },
    })

    revalidatePath('/admin/users')
    return { success: true, user }
}

export async function deleteUser(id: string) {
    const admin = await requireAdmin()

    // Prevent admin from deleting themselves
    if (id === admin.id) {
        return { success: false, error: 'You cannot delete your own account' }
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
        where: { id },
    })

    if (!user) {
        return { success: false, error: 'User not found' }
    }

    // Delete user (cascade will handle related data)
    await prisma.user.delete({
        where: { id },
    })

    revalidatePath('/admin/users')
    return { success: true }
}

export async function resetUserPassword(id: string, newPassword: string) {
    await requireAdmin()

    if (newPassword.length < 6) {
        return { success: false, error: 'Password must be at least 6 characters' }
    }

    const hashedPassword = await hash(newPassword, 10)

    await prisma.user.update({
        where: { id },
        data: { password: hashedPassword },
    })

    revalidatePath('/admin/users')
    return { success: true }
}

export async function getCurrentUser() {
    const user = await requireAuth()

    return prisma.user.findUnique({
        where: { id: user.id },
        select: {
            id: true,
            email: true,
            name: true,
            role: true,
            image: true,
            createdAt: true,
        },
    })
}
