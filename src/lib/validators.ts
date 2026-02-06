import { z } from 'zod'

// Account validation
export const accountSchema = z.object({
    name: z.string().min(1, 'Name is required').max(60, 'Name must be 60 characters or less'),
    openingBalance: z.coerce.number().min(0, 'Opening balance cannot be negative').default(0),
    note: z.string().optional(),
})

export type AccountFormData = z.infer<typeof accountSchema>

// Category validation
export const categorySchema = z.object({
    name: z.string().min(1, 'Name is required').max(60, 'Name must be 60 characters or less'),
    type: z.enum(['INCOME', 'EXPENSE']),
})

export type CategoryFormData = z.infer<typeof categorySchema>

// PayeePayer validation
export const payeePayerSchema = z.object({
    name: z.string().min(1, 'Name is required').max(60, 'Name must be 60 characters or less'),
    type: z.enum(['PAYEE', 'PAYER']),
})

export type PayeePayerFormData = z.infer<typeof payeePayerSchema>

// Payment Method validation
export const paymentMethodSchema = z.object({
    name: z.string().min(1, 'Name is required').max(30, 'Name must be 30 characters or less'),
})

export type PaymentMethodFormData = z.infer<typeof paymentMethodSchema>

// Transaction validation
export const transactionSchema = z.object({
    accountId: z.coerce.number().min(1, 'Account is required'),
    date: z.coerce.date(),
    type: z.enum(['INCOME', 'EXPENSE', 'TRANSFER']),
    categoryId: z.coerce.number().optional().nullable(),
    amount: z.coerce.number().positive('Amount must be positive'),
    payerId: z.coerce.number().optional().nullable(),
    payeeId: z.coerce.number().optional().nullable(),
    paymentMethodId: z.coerce.number().optional().nullable(),
    reference: z.string().max(100).optional().nullable(),
    note: z.string().optional().nullable(),
    // For transfers
    transferToAccountId: z.coerce.number().optional().nullable(),
})

export type TransactionFormData = z.infer<typeof transactionSchema>

// Recurring Transaction validation
export const recurringTransactionSchema = z.object({
    accountId: z.coerce.number().min(1, 'Account is required'),
    type: z.enum(['INCOME', 'EXPENSE']),
    categoryId: z.coerce.number().min(1, 'Category is required'),
    amount: z.coerce.number().positive('Amount must be positive'),
    payerId: z.coerce.number().optional().nullable(),
    payeeId: z.coerce.number().optional().nullable(),
    paymentMethodId: z.coerce.number().optional().nullable(),
    reference: z.string().max(100).optional().nullable(),
    description: z.string().optional().nullable(),
    startDate: z.coerce.date(),
    frequency: z.enum(['DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY']),
    status: z.enum(['PAID', 'UNPAID', 'PENDING', 'RECEIVE']).default('PENDING'),
})

export type RecurringTransactionFormData = z.infer<typeof recurringTransactionSchema>

// Settings validation
export const settingsSchema = z.object({
    company_name: z.string().min(1, 'Company name is required'),
    currency_code: z.string().min(1, 'Currency code is required'),
    email_address: z.string().email().optional().or(z.literal('')),
    address: z.string().optional(),
    phone: z.string().optional(),
    website: z.string().transform(v => {
        const trimmed = v.trim()
        if (trimmed && !/^https?:\/\//i.test(trimmed)) return `https://${trimmed}`
        return trimmed
    }).pipe(z.union([z.literal(''), z.string().url('Please enter a valid website URL')])).optional(),
    timezone: z.string().min(1, 'Timezone is required'),
})

export type SettingsFormData = z.infer<typeof settingsSchema>
