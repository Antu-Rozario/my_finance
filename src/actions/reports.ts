'use server'

import prisma from '@/lib/prisma'
import { TransactionType } from '@/generated/prisma/client'
import { startOfMonth, endOfMonth, format } from 'date-fns'
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
            month: format(new Date(key + '-01'), 'MMM yyyy'),
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

export async function getCashFlowReport(startDate: Date, endDate: Date) {
    const user = await requireAuth()

    // Get all accounts
    const accounts = await prisma.financeAccount.findMany({
        where: {
            userId: user.id,
        },
    })

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
            month: format(new Date(key + '-01'), 'MMM yyyy'),
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
