'use server'

import prisma from '@/lib/prisma'
import { TransactionType } from '@/generated/prisma/client'
import { startOfMonth, endOfMonth, subMonths, format } from 'date-fns'
import { requireAuth } from '@/lib/auth'

export type DashboardSummary = {
    totalIncome: number
    totalExpenses: number
    netBalance: number
    totalAccountBalance: number
}

export type MonthlyData = {
    month: string
    income: number
    expenses: number
}

export type CategoryBreakdown = {
    name: string
    value: number
    percentage: number
    color: string
}

export type AccountBalance = {
    id: number
    name: string
    balance: number
}

const CHART_COLORS = [
    '#4285F4', // Blue 500
    '#DB4437', // Red 500
    '#F4B400', // Yellow 500
    '#0F9D58', // Green 500
    '#AB47BC', // Purple 500
    '#00ACC1', // Cyan 500
    '#FF7043', // Deep Orange 500
    '#9E9D24', // Lime 800
    '#5C6BC0', // Indigo 500
    '#F06292', // Pink 300
    '#4DB6AC', // Teal 300
    '#C0CA33', // Lime 500
    '#795548', // Brown 500
    '#78909C', // Blue Grey 500
    '#37474F', // Blue Grey 800
]

export async function getDashboardSummary(
    startDate?: Date,
    endDate?: Date
): Promise<DashboardSummary> {
    const user = await requireAuth()
    const now = new Date()
    const monthStart = startDate || startOfMonth(now)
    const monthEnd = endDate || endOfMonth(now)

    const [incomeResult, expenseResult, accounts] = await Promise.all([
        // Total income in range
        prisma.transaction.aggregate({
            where: {
                userId: user.id,
                type: TransactionType.INCOME,
                date: { gte: monthStart, lte: monthEnd },
            },
            _sum: { amount: true },
        }),
        // Total expenses in range
        prisma.transaction.aggregate({
            where: {
                userId: user.id,
                type: TransactionType.EXPENSE,
                date: { gte: monthStart, lte: monthEnd },
            },
            _sum: { amount: true },
        }),
        // All accounts
        prisma.financeAccount.findMany({
            where: {
                userId: user.id,
            },
        }),
    ])

    const totalIncome = incomeResult._sum.amount || 0
    const totalExpenses = expenseResult._sum.amount || 0

    // Calculate total account balance by getting latest transaction for each account
    let totalAccountBalance = 0
    for (const account of accounts) {
        const latestTransaction = await prisma.transaction.findFirst({
            where: { accountId: account.id, userId: user.id },
            orderBy: [{ date: 'desc' }, { createdAt: 'desc' }],
            select: { balance: true },
        })
        totalAccountBalance += latestTransaction?.balance ?? account.openingBalance
    }

    return {
        totalIncome,
        totalExpenses,
        netBalance: totalIncome - totalExpenses,
        totalAccountBalance,
    }
}

export async function getMonthlyData(): Promise<MonthlyData[]> {
    const user = await requireAuth()
    const now = new Date()

    // Calculate date range for all 12 months
    const startDate = startOfMonth(subMonths(now, 11))
    const endDate = endOfMonth(now)

    // Fetch all transactions in the date range (1 query instead of 24)
    const transactions = await prisma.transaction.findMany({
        where: {
            userId: user.id,
            date: { gte: startDate, lte: endDate },
            type: { in: [TransactionType.INCOME, TransactionType.EXPENSE] },
        },
        select: {
            type: true,
            amount: true,
            date: true,
        },
    })

    // Initialize all 12 months with zero values
    const monthlyMap = new Map<string, { income: number; expenses: number }>()
    for (let i = 11; i >= 0; i--) {
        const monthDate = subMonths(now, i)
        const monthKey = format(monthDate, 'MMM')
        monthlyMap.set(monthKey, { income: 0, expenses: 0 })
    }

    // Group transactions by month in memory
    for (const transaction of transactions) {
        const monthKey = format(transaction.date, 'MMM')
        const monthData = monthlyMap.get(monthKey)

        if (monthData) {
            if (transaction.type === TransactionType.INCOME) {
                monthData.income += transaction.amount
            } else if (transaction.type === TransactionType.EXPENSE) {
                monthData.expenses += transaction.amount
            }
        }
    }

    // Convert map to array in correct order
    const months: MonthlyData[] = []
    for (let i = 11; i >= 0; i--) {
        const monthDate = subMonths(now, i)
        const monthKey = format(monthDate, 'MMM')
        const data = monthlyMap.get(monthKey)!

        months.push({
            month: monthKey,
            income: data.income,
            expenses: data.expenses,
        })
    }

    return months
}

export async function getCategoryBreakdown(
    startDate?: Date,
    endDate?: Date
): Promise<CategoryBreakdown[]> {
    const user = await requireAuth()
    const now = new Date()
    const monthStart = startDate || startOfMonth(now)
    const monthEnd = endDate || endOfMonth(now)

    const expenses = await prisma.transaction.groupBy({
        by: ['categoryId'],
        where: {
            userId: user.id,
            type: TransactionType.EXPENSE,
            date: { gte: monthStart, lte: monthEnd },
            categoryId: { not: null },
        },
        _sum: { amount: true },
    })

    // Get category names
    const categoryIds = expenses
        .filter(e => e.categoryId !== null)
        .map(e => e.categoryId as number)

    const categories = await prisma.category.findMany({
        where: {
            id: { in: categoryIds },
            userId: user.id,
        },
    })

    const categoryMap = new Map(categories.map(c => [c.id, c.name]))

    const total = expenses.reduce((sum, e) => sum + (e._sum.amount || 0), 0)

    return expenses
        .filter(e => e.categoryId !== null)
        .map((e, index) => ({
            name: categoryMap.get(e.categoryId as number) || 'Unknown',
            value: e._sum.amount || 0,
            percentage: total > 0 ? ((e._sum.amount || 0) / total) * 100 : 0,
            color: CHART_COLORS[index % CHART_COLORS.length],
        }))
        .sort((a, b) => b.value - a.value)
}

export async function getAccountBalances(): Promise<AccountBalance[]> {
    const user = await requireAuth()
    const accounts = await prisma.financeAccount.findMany({
        where: {
            userId: user.id,
        },
        orderBy: { name: 'asc' },
    })

    // Get latest transaction balance for each account
    const accountBalances = await Promise.all(
        accounts.map(async (account) => {
            const latestTransaction = await prisma.transaction.findFirst({
                where: { accountId: account.id, userId: user.id },
                orderBy: [{ date: 'desc' }, { createdAt: 'desc' }],
                select: { balance: true },
            })

            return {
                id: account.id,
                name: account.name,
                balance: latestTransaction?.balance ?? account.openingBalance,
            }
        })
    )

    return accountBalances
}

export async function getRecentTransactions(
    limit: number = 10,
    startDate?: Date,
    endDate?: Date
) {
    const user = await requireAuth()
    return prisma.transaction.findMany({
        where: {
            userId: user.id,
            ...(startDate || endDate ? {
                date: {
                    ...(startDate ? { gte: startDate } : {}),
                    ...(endDate ? { lte: endDate } : {}),
                }
            } : {})
        },
        take: limit,
        orderBy: { date: 'desc' },
        include: {
            account: true,
            category: true,
            payer: true,
            payee: true,
        },
    })
}
