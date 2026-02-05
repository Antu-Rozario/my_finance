import {
    Account,
    Category,
    PayeePayer,
    PaymentMethod,
    Transaction,
    RecurringTransaction,
    CategoryType,
    PayeePayerType,
    TransactionType,
    RecurringStatus,
    RecurringFrequency
} from '@/generated/prisma/client'

// Re-export Prisma types
export type {
    Account,
    Category,
    PayeePayer,
    PaymentMethod,
    Transaction,
    RecurringTransaction
}

export {
    CategoryType,
    PayeePayerType,
    TransactionType,
    RecurringStatus,
    RecurringFrequency
}

// Extended types with relations
export type TransactionWithRelations = Transaction & {
    account: Account
    category: Category | null
    payer: PayeePayer | null
    payee: PayeePayer | null
    paymentMethod: PaymentMethod | null
    transferToAccount: Account | null
    linkedTransaction: Transaction | null
}

export type AccountWithBalance = Account & {
    currentBalance: number
    transactionCount: number
}

export type CategoryWithCount = Category & {
    _count: {
        transactions: number
    }
}

export type PayeePayerWithCount = PayeePayer & {
    _count: {
        payerTransactions: number
        payeeTransactions: number
    }
}

export type PaymentMethodWithCount = PaymentMethod & {
    _count: {
        transactions: number
    }
}

export type RecurringTransactionWithRelations = RecurringTransaction & {
    account: Account
    category: Category
    payer: PayeePayer | null
    payee: PayeePayer | null
    paymentMethod: PaymentMethod | null
}

// Dashboard types
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
}

// Report types
export type AccountStatement = {
    account: Account
    openingBalance: number
    transactions: TransactionWithRelations[]
    closingBalance: number
}

export type CashFlowData = {
    month: string
    openingBalance: number
    totalIncome: number
    totalExpenses: number
    netChange: number
    closingBalance: number
}
