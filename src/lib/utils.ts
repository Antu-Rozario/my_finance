import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { format, parseISO } from "date-fns"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a number as currency with the given symbol
 */
export function formatCurrency(amount: number, currencySymbol: string = '$'): string {
  const formatted = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Math.abs(amount))

  const sign = amount < 0 ? '-' : ''
  return `${sign}${currencySymbol}${formatted}`
}

/**
 * Format a date for display
 */
export function formatDate(date: Date | string, formatStr: string = 'MMM dd, yyyy'): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  return format(dateObj, formatStr)
}

/**
 * Format a date for input fields (YYYY-MM-DD)
 */
export function formatDateForInput(date: Date | string): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  return format(dateObj, 'yyyy-MM-dd')
}

/**
 * Get transaction type color classes
 */
export function getTransactionTypeColor(type: 'INCOME' | 'EXPENSE' | 'TRANSFER'): string {
  switch (type) {
    case 'INCOME':
      return 'text-green-600 dark:text-green-400'
    case 'EXPENSE':
      return 'text-red-600 dark:text-red-400'
    case 'TRANSFER':
      return 'text-blue-600 dark:text-blue-400'
    default:
      return ''
  }
}

/**
 * Get transaction type badge variant
 */
export function getTransactionTypeBadge(type: 'INCOME' | 'EXPENSE' | 'TRANSFER'): string {
  switch (type) {
    case 'INCOME':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    case 'EXPENSE':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    case 'TRANSFER':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
    default:
      return ''
  }
}

/**
 * Calculate the next occurrence date for a recurring transaction
 */
export function getNextOccurrence(
  currentDate: Date,
  frequency: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY'
): Date {
  const next = new Date(currentDate)

  switch (frequency) {
    case 'DAILY':
      next.setDate(next.getDate() + 1)
      break
    case 'WEEKLY':
      next.setDate(next.getDate() + 7)
      break
    case 'MONTHLY':
      next.setMonth(next.getMonth() + 1)
      break
    case 'YEARLY':
      next.setFullYear(next.getFullYear() + 1)
      break
  }

  return next
}
