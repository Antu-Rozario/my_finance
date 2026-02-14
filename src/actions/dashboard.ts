'use server'

import prisma from '@/lib/prisma'
import { TransactionType } from '@/generated/prisma/client'
import { requireAuth } from '@/lib/auth'
import { formatInTz, toMidnightUTC, toEndOfDayUTC, getMonthKeyInTz, getYearInTz, getMonthInTz } from '@/lib/dateUtils'

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
    endDate?: Date,
    tz?: string
): Promise<DashboardSummary> {
    const user = await requireAuth()

    // Default to current month in user's timezone
    let monthStart = startDate
    let monthEnd = endDate
    if (!monthStart || !monthEnd) {
        const now = new Date()
        if (tz) {
            const year = getYearInTz(now, tz)
            const month = getMonthInTz(now, tz)
            const monthStr = `${year}-${String(month + 1).padStart(2, '0')}`
            monthStart = toMidnightUTC(`${monthStr}-01`, tz)
            // End of month: midnight of first day of next month minus 1ms
            const nextMonth = month === 11 ? 0 : month + 1
            const nextYear = month === 11 ? year + 1 : year
            monthEnd = new Date(toMidnightUTC(`${nextYear}-${String(nextMonth + 1).padStart(2, '0')}-01`, tz).getTime() - 1)
        } else {
            const { startOfMonth, endOfMonth } = await import('date-fns')
            monthStart = startOfMonth(now)
            monthEnd = endOfMonth(now)
        }
    }

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

    // Calculate total account balance by summing all credits - debits
    let totalAccountBalance = 0
    for (const account of accounts) {
        const result = await prisma.transaction.aggregate({
            where: { accountId: account.id, userId: user.id },
            _sum: { credit: true, debit: true },
        })
        totalAccountBalance += (result._sum.credit || 0) - (result._sum.debit || 0)
    }

    return {
        totalIncome,
        totalExpenses,
        netBalance: totalIncome - totalExpenses,
        totalAccountBalance,
    }
}

export async function getMonthlyData(tz: string): Promise<MonthlyData[]> {
    const user = await requireAuth()
    const now = new Date()

    // Calculate date range for all 12 months in user's timezone
    const currentYear = getYearInTz(now, tz)
    const currentMonth = getMonthInTz(now, tz)

    // Go back 11 months
    let startYear = currentMonth < 11 ? currentYear - 1 : currentYear
    let startMonth = (currentMonth - 11 + 12) % 12

    const startDateStr = `${startYear}-${String(startMonth + 1).padStart(2, '0')}-01`
    const startDate = toMidnightUTC(startDateStr, tz)

    // End of current month
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1
    const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear
    const endDate = new Date(toMidnightUTC(`${nextYear}-${String(nextMonth + 1).padStart(2, '0')}-01`, tz).getTime() - 1)

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
    const monthOrder: string[] = []
    for (let i = 11; i >= 0; i--) {
        let m = currentMonth - i
        let y = currentYear
        if (m < 0) { m += 12; y -= 1 }
        const monthKey = `${y}-${String(m + 1).padStart(2, '0')}`
        monthlyMap.set(monthKey, { income: 0, expenses: 0 })
        monthOrder.push(monthKey)
    }

    // Group transactions by month in memory
    for (const transaction of transactions) {
        const monthKey = getMonthKeyInTz(transaction.date, tz)
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
    return monthOrder.map(monthKey => {
        const data = monthlyMap.get(monthKey)!
        const label = formatInTz(toMidnightUTC(monthKey + '-01', tz), tz, 'MMM')
        return {
            month: label,
            income: data.income,
            expenses: data.expenses,
        }
    })
}

export async function getCategoryBreakdown(
    startDate?: Date,
    endDate?: Date
): Promise<CategoryBreakdown[]> {
    const user = await requireAuth()

    // If no dates provided, queries will use all-time data
    const dateFilter = startDate && endDate ? { gte: startDate, lte: endDate } : undefined

    const expenses = await prisma.transaction.groupBy({
        by: ['categoryId'],
        where: {
            userId: user.id,
            type: TransactionType.EXPENSE,
            ...(dateFilter ? { date: dateFilter } : {}),
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

    // Calculate balance for each account by summing credits - debits
    const accountBalances = await Promise.all(
        accounts.map(async (account) => {
            const result = await prisma.transaction.aggregate({
                where: { accountId: account.id, userId: user.id },
                _sum: { credit: true, debit: true },
            })

            return {
                id: account.id,
                name: account.name,
                balance: (result._sum.credit || 0) - (result._sum.debit || 0),
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
