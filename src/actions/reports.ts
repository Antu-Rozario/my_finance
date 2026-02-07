'use server'

import prisma from '@/lib/prisma'
import { TransactionType } from '@/generated/prisma/client'
import { endOfMonth, format } from 'date-fns'
import { requireAuth } from '@/lib/auth'

export type IncomeExpenseData = {
    month: string
    income: number
    expenses: number
    net: number
}

export type CategoryReportData = {
    name: string
    amount: number
    percentage: number
    transactionCount: number
}

export type CashFlowData = {
    month: string
    openingBalance: number
    totalIncome: number
    totalExpenses: number
    netChange: number
    closingBalance: number
}

export async function getIncomeExpenseReport(startDate: Date, endDate: Date) {
    const user = await requireAuth()
    const transactions = await prisma.transaction.findMany({
        where: {
            userId: user.id,
            date: { gte: startDate, lte: endDate },
            type: { in: [TransactionType.INCOME, TransactionType.EXPENSE] },
        },
        orderBy: { date: 'asc' },
    })

    // Group by month
    const monthlyData = new Map<string, { income: number; expenses: number }>()

    for (const t of transactions) {
        const monthKey = format(t.date, 'yyyy-MM')
        const existing = monthlyData.get(monthKey) || { income: 0, expenses: 0 }

        if (t.type === TransactionType.INCOME) {
            existing.income += t.amount
        } else {
            existing.expenses += t.amount
        }

        monthlyData.set(monthKey, existing)
    }

    const result: IncomeExpenseData[] = []
    const sortedKeys = Array.from(monthlyData.keys()).sort()

    let totalIncome = 0
    let totalExpenses = 0

    for (const key of sortedKeys) {
        const data = monthlyData.get(key)!
        totalIncome += data.income
        totalExpenses += data.expenses
        result.push({
            month: format(new Date(key + '-01T12:00:00'), 'MMM yyyy'),
            income: data.income,
            expenses: data.expenses,
            net: data.income - data.expenses,
        })
    }

    return {
        data: result,
        totals: {
            totalIncome,
            totalExpenses,
            net: totalIncome - totalExpenses,
        },
    }
}

export async function getCategoryReport(startDate: Date, endDate: Date, type: 'INCOME' | 'EXPENSE') {
    const user = await requireAuth()
    const transactions = await prisma.transaction.findMany({
        where: {
            userId: user.id,
            date: { gte: startDate, lte: endDate },
            type: type as TransactionType,
            categoryId: { not: null },
        },
        include: {
            category: true,
        },
    })

    // Group by category
    const categoryData = new Map<string, { amount: number; count: number }>()
    let total = 0

    for (const t of transactions) {
        const categoryName = t.category?.name || 'Unknown'
        const existing = categoryData.get(categoryName) || { amount: 0, count: 0 }
        existing.amount += t.amount
        existing.count += 1
        total += t.amount
        categoryData.set(categoryName, existing)
    }

    const result: CategoryReportData[] = []
    for (const [name, data] of categoryData.entries()) {
        result.push({
            name,
            amount: data.amount,
            percentage: total > 0 ? (data.amount / total) * 100 : 0,
            transactionCount: data.count,
        })
    }

    return result.sort((a, b) => b.amount - a.amount)
}

export async function getAccountStatement(accountId: number, startDate: Date, endDate: Date) {
    const user = await requireAuth()

    const account = await prisma.financeAccount.findFirst({
        where: {
            id: accountId,
            userId: user.id,
        },
    })

    if (!account) return null

    // Get opening balance - sum of all transactions before start date
    const priorTransactions = await prisma.transaction.aggregate({
        where: {
            accountId,
            userId: user.id,
            date: { lt: startDate },
        },
        _sum: { credit: true, debit: true },
    })

    const openingBalance = (priorTransactions._sum.credit || 0) - (priorTransactions._sum.debit || 0)

    // Get transactions in range
    const transactions = await prisma.transaction.findMany({
        where: {
            accountId,
            userId: user.id,
            date: { gte: startDate, lte: endDate },
        },
        orderBy: { date: 'asc' },
        include: {
            category: true,
            payer: true,
            payee: true,
            paymentMethod: true,
            transferToAccount: true,
        },
    })

    // Calculate running balance
    let runningBalance = openingBalance
    const transactionsWithBalance = transactions.map(t => {
        runningBalance += t.credit - t.debit
        return { ...t, runningBalance }
    })

    return {
        account,
        openingBalance,
        transactions: transactionsWithBalance,
        closingBalance: runningBalance,
    }
}

// Payee/Payer Analysis
export type PayeePayerAnalysisData = {
    topPayees: { name: string; totalAmount: number; transactionCount: number }[]
    topPayers: { name: string; totalAmount: number; transactionCount: number }[]
}

export async function getPayeePayerAnalysis(startDate: Date, endDate: Date): Promise<PayeePayerAnalysisData> {
    const user = await requireAuth()

    const [expenseTransactions, incomeTransactions] = await Promise.all([
        prisma.transaction.findMany({
            where: {
                userId: user.id,
                date: { gte: startDate, lte: endDate },
                type: TransactionType.EXPENSE,
                payeeId: { not: null },
            },
            include: { payee: true },
        }),
        prisma.transaction.findMany({
            where: {
                userId: user.id,
                date: { gte: startDate, lte: endDate },
                type: TransactionType.INCOME,
                payerId: { not: null },
            },
            include: { payer: true },
        }),
    ])

    const payeeMap = new Map<string, { totalAmount: number; transactionCount: number }>()
    for (const t of expenseTransactions) {
        const name = t.payee?.name || 'Unknown'
        const existing = payeeMap.get(name) || { totalAmount: 0, transactionCount: 0 }
        existing.totalAmount += t.amount
        existing.transactionCount += 1
        payeeMap.set(name, existing)
    }

    const payerMap = new Map<string, { totalAmount: number; transactionCount: number }>()
    for (const t of incomeTransactions) {
        const name = t.payer?.name || 'Unknown'
        const existing = payerMap.get(name) || { totalAmount: 0, transactionCount: 0 }
        existing.totalAmount += t.amount
        existing.transactionCount += 1
        payerMap.set(name, existing)
    }

    return {
        topPayees: Array.from(payeeMap.entries())
            .map(([name, data]) => ({ name, ...data }))
            .sort((a, b) => b.totalAmount - a.totalAmount)
            .slice(0, 10),
        topPayers: Array.from(payerMap.entries())
            .map(([name, data]) => ({ name, ...data }))
            .sort((a, b) => b.totalAmount - a.totalAmount)
            .slice(0, 10),
    }
}

// Category Trends
export type CategoryTrendData = {
    month: string
    [categoryName: string]: number | string
}

export type CategoryTrendResult = {
    data: CategoryTrendData[]
    categories: string[]
}

export async function getCategoryTrends(startDate: Date, endDate: Date, type: 'INCOME' | 'EXPENSE'): Promise<CategoryTrendResult> {
    const user = await requireAuth()

    const transactions = await prisma.transaction.findMany({
        where: {
            userId: user.id,
            date: { gte: startDate, lte: endDate },
            type: type as TransactionType,
            categoryId: { not: null },
        },
        include: { category: true },
        orderBy: { date: 'asc' },
    })

    const categoryNames = new Set<string>()
    const monthCategoryMap = new Map<string, Map<string, number>>()

    for (const t of transactions) {
        const monthKey = format(t.date, 'yyyy-MM')
        const catName = t.category?.name || 'Unknown'
        categoryNames.add(catName)

        if (!monthCategoryMap.has(monthKey)) monthCategoryMap.set(monthKey, new Map())
        const catMap = monthCategoryMap.get(monthKey)!
        catMap.set(catName, (catMap.get(catName) || 0) + t.amount)
    }

    const categories = Array.from(categoryNames).sort()
    const sortedMonths = Array.from(monthCategoryMap.keys()).sort()

    const data: CategoryTrendData[] = sortedMonths.map(monthKey => {
        const row: CategoryTrendData = { month: format(new Date(monthKey + '-01T12:00:00'), 'MMM yyyy') }
        const catMap = monthCategoryMap.get(monthKey)!
        for (const cat of categories) {
            row[cat] = catMap.get(cat) || 0
        }
        return row
    })

    return { data, categories }
}

// Payment Method Breakdown
export type PaymentMethodBreakdownData = {
    name: string
    amount: number
    percentage: number
    transactionCount: number
}

export async function getPaymentMethodBreakdown(startDate: Date, endDate: Date): Promise<PaymentMethodBreakdownData[]> {
    const user = await requireAuth()

    const transactions = await prisma.transaction.findMany({
        where: {
            userId: user.id,
            date: { gte: startDate, lte: endDate },
            type: { in: [TransactionType.INCOME, TransactionType.EXPENSE] },
            paymentMethodId: { not: null },
        },
        include: { paymentMethod: true },
    })

    const methodMap = new Map<string, { amount: number; count: number }>()
    let total = 0

    for (const t of transactions) {
        const name = t.paymentMethod?.name || 'Unknown'
        const existing = methodMap.get(name) || { amount: 0, count: 0 }
        existing.amount += t.amount
        existing.count += 1
        total += t.amount
        methodMap.set(name, existing)
    }

    return Array.from(methodMap.entries())
        .map(([name, data]) => ({
            name,
            amount: data.amount,
            percentage: total > 0 ? (data.amount / total) * 100 : 0,
            transactionCount: data.count,
        }))
        .sort((a, b) => b.amount - a.amount)
}

// Year-over-Year Comparison
export type YearOverYearData = {
    month: string
    period1Income: number
    period1Expenses: number
    period2Income: number
    period2Expenses: number
}

export type YearOverYearResult = {
    data: YearOverYearData[]
    period1Label: string
    period2Label: string
    totals: {
        period1Income: number
        period1Expenses: number
        period2Income: number
        period2Expenses: number
    }
}

export async function getYearOverYearComparison(
    period1Start: Date, period1End: Date,
    period2Start: Date, period2End: Date
): Promise<YearOverYearResult> {
    const user = await requireAuth()

    const [p1Transactions, p2Transactions] = await Promise.all([
        prisma.transaction.findMany({
            where: { userId: user.id, date: { gte: period1Start, lte: period1End }, type: { in: [TransactionType.INCOME, TransactionType.EXPENSE] } },
        }),
        prisma.transaction.findMany({
            where: { userId: user.id, date: { gte: period2Start, lte: period2End }, type: { in: [TransactionType.INCOME, TransactionType.EXPENSE] } },
        }),
    ])

    function groupByMonth(transactions: typeof p1Transactions) {
        const map = new Map<number, { income: number; expenses: number }>()
        for (const t of transactions) {
            const m = t.date.getMonth()
            const existing = map.get(m) || { income: 0, expenses: 0 }
            if (t.type === TransactionType.INCOME) existing.income += t.amount
            else existing.expenses += t.amount
            map.set(m, existing)
        }
        return map
    }

    const p1Map = groupByMonth(p1Transactions)
    const p2Map = groupByMonth(p2Transactions)
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const data: YearOverYearData[] = monthNames.map((name, i) => ({
        month: name,
        period1Income: p1Map.get(i)?.income || 0,
        period1Expenses: p1Map.get(i)?.expenses || 0,
        period2Income: p2Map.get(i)?.income || 0,
        period2Expenses: p2Map.get(i)?.expenses || 0,
    }))

    return {
        data,
        period1Label: format(period1Start, 'yyyy'),
        period2Label: format(period2Start, 'yyyy'),
        totals: {
            period1Income: p1Transactions.filter(t => t.type === TransactionType.INCOME).reduce((s, t) => s + t.amount, 0),
            period1Expenses: p1Transactions.filter(t => t.type === TransactionType.EXPENSE).reduce((s, t) => s + t.amount, 0),
            period2Income: p2Transactions.filter(t => t.type === TransactionType.INCOME).reduce((s, t) => s + t.amount, 0),
            period2Expenses: p2Transactions.filter(t => t.type === TransactionType.EXPENSE).reduce((s, t) => s + t.amount, 0),
        },
    }
}

// Daily Spending Pattern
export type DailySpendingPatternData = {
    day: string
    averageSpending: number
    totalSpending: number
    transactionCount: number
}

export async function getDailySpendingPattern(startDate: Date, endDate: Date): Promise<DailySpendingPatternData[]> {
    const user = await requireAuth()

    const transactions = await prisma.transaction.findMany({
        where: { userId: user.id, date: { gte: startDate, lte: endDate }, type: TransactionType.EXPENSE },
    })

    const dayMap = new Map<number, { total: number; count: number; weeks: Set<string> }>()
    for (let i = 0; i < 7; i++) dayMap.set(i, { total: 0, count: 0, weeks: new Set() })

    for (const t of transactions) {
        const dayOfWeek = t.date.getDay()
        const weekKey = format(t.date, 'yyyy-ww')
        const existing = dayMap.get(dayOfWeek)!
        existing.total += t.amount
        existing.count += 1
        existing.weeks.add(weekKey)
    }

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return dayNames.map((day, i) => {
        const data = dayMap.get(i)!
        const weekCount = data.weeks.size || 1
        return { day, averageSpending: data.total / weekCount, totalSpending: data.total, transactionCount: data.count }
    })
}

// Savings Rate
export type SavingsRateData = {
    month: string
    income: number
    expenses: number
    savings: number
    savingsRate: number
}

export async function getSavingsRate(startDate: Date, endDate: Date): Promise<SavingsRateData[]> {
    const user = await requireAuth()

    const transactions = await prisma.transaction.findMany({
        where: { userId: user.id, date: { gte: startDate, lte: endDate }, type: { in: [TransactionType.INCOME, TransactionType.EXPENSE] } },
        orderBy: { date: 'asc' },
    })

    const monthlyData = new Map<string, { income: number; expenses: number }>()
    for (const t of transactions) {
        const monthKey = format(t.date, 'yyyy-MM')
        const existing = monthlyData.get(monthKey) || { income: 0, expenses: 0 }
        if (t.type === TransactionType.INCOME) existing.income += t.amount
        else existing.expenses += t.amount
        monthlyData.set(monthKey, existing)
    }

    return Array.from(monthlyData.keys()).sort().map(key => {
        const data = monthlyData.get(key)!
        const savings = data.income - data.expenses
        return {
            month: format(new Date(key + '-01T12:00:00'), 'MMM yyyy'),
            income: data.income,
            expenses: data.expenses,
            savings,
            savingsRate: data.income > 0 ? (savings / data.income) * 100 : 0,
        }
    })
}

// Net Worth Over Time
export type NetWorthData = {
    month: string
    netWorth: number
}

export async function getNetWorthOverTime(startDate: Date, endDate: Date): Promise<NetWorthData[]> {
    const user = await requireAuth()

    const accounts = await prisma.financeAccount.findMany({ where: { userId: user.id } })

    const allTransactions = await prisma.transaction.findMany({
        where: { userId: user.id, date: { lte: endDate } },
        orderBy: { date: 'asc' },
        select: { accountId: true, date: true, credit: true, debit: true },
    })

    // Group transactions by account for efficient processing
    const txByAccount = new Map<number, typeof allTransactions>()
    for (const t of allTransactions) {
        if (!txByAccount.has(t.accountId)) txByAccount.set(t.accountId, [])
        txByAccount.get(t.accountId)!.push(t)
    }

    // Generate month-end dates
    const months: Date[] = []
    let current = new Date(startDate.getFullYear(), startDate.getMonth(), 1)
    while (current <= endDate) {
        months.push(endOfMonth(current))
        current = new Date(current.getFullYear(), current.getMonth() + 1, 1)
    }

    return months.map(monthEnd => {
        let netWorth = 0
        for (const account of accounts) {
            let balance = 0
            const accountTxs = txByAccount.get(account.id) || []
            for (const t of accountTxs) {
                if (t.date <= monthEnd) balance += t.credit - t.debit
            }
            netWorth += balance
        }
        return { month: format(monthEnd, 'MMM yyyy'), netWorth }
    })
}

// Tax Summary
export type TaxSummaryData = {
    categories: { name: string; type: 'INCOME' | 'EXPENSE'; amount: number; transactionCount: number }[]
    totalIncome: number
    totalExpenses: number
    netTaxable: number
}

export async function getTaxSummary(startDate: Date, endDate: Date): Promise<TaxSummaryData> {
    const user = await requireAuth()

    const transactions = await prisma.transaction.findMany({
        where: {
            userId: user.id,
            date: { gte: startDate, lte: endDate },
            type: { in: [TransactionType.INCOME, TransactionType.EXPENSE] },
            categoryId: { not: null },
        },
        include: { category: true },
    })

    const categoryMap = new Map<string, { name: string; type: 'INCOME' | 'EXPENSE'; amount: number; transactionCount: number }>()
    let totalIncome = 0
    let totalExpenses = 0

    for (const t of transactions) {
        const catName = t.category?.name || 'Unknown'
        const catType = t.type as 'INCOME' | 'EXPENSE'
        const key = `${catType}-${catName}`
        const existing = categoryMap.get(key) || { name: catName, type: catType, amount: 0, transactionCount: 0 }
        existing.amount += t.amount
        existing.transactionCount += 1
        categoryMap.set(key, existing)
        if (t.type === TransactionType.INCOME) totalIncome += t.amount
        else totalExpenses += t.amount
    }

    return {
        categories: Array.from(categoryMap.values()).sort((a, b) => {
            if (a.type !== b.type) return a.type === 'INCOME' ? -1 : 1
            return b.amount - a.amount
        }),
        totalIncome,
        totalExpenses,
        netTaxable: totalIncome - totalExpenses,
    }
}

export async function getCashFlowReport(startDate: Date, endDate: Date) {
    const user = await requireAuth()

    // Calculate total opening balance (before start date)
    const priorTransactions = await prisma.transaction.aggregate({
        where: {
            userId: user.id,
            date: { lt: startDate },
        },
        _sum: { credit: true, debit: true },
    })

    let openingBalance = (priorTransactions._sum.credit || 0) - (priorTransactions._sum.debit || 0)

    // Get all transactions in range grouped by month
    const transactions = await prisma.transaction.findMany({
        where: {
            userId: user.id,
            date: { gte: startDate, lte: endDate },
            type: { in: [TransactionType.INCOME, TransactionType.EXPENSE] },
        },
        orderBy: { date: 'asc' },
    })

    // Group by month
    const monthlyData = new Map<string, { income: number; expenses: number }>()

    for (const t of transactions) {
        const monthKey = format(t.date, 'yyyy-MM')
        const existing = monthlyData.get(monthKey) || { income: 0, expenses: 0 }

        if (t.type === TransactionType.INCOME) {
            existing.income += t.amount
        } else {
            existing.expenses += t.amount
        }

        monthlyData.set(monthKey, existing)
    }

    const result: CashFlowData[] = []
    const sortedKeys = Array.from(monthlyData.keys()).sort()

    let currentBalance = openingBalance
    for (const key of sortedKeys) {
        const data = monthlyData.get(key)!
        const netChange = data.income - data.expenses
        const closingBalance = currentBalance + netChange

        result.push({
            month: format(new Date(key + '-01T12:00:00'), 'MMM yyyy'),
            openingBalance: currentBalance,
            totalIncome: data.income,
            totalExpenses: data.expenses,
            netChange,
            closingBalance,
        })

        currentBalance = closingBalance
    }

    return result
}
