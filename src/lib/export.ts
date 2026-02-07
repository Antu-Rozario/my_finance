import { format } from 'date-fns'
import { formatInTz } from '@/lib/dateUtils'

/**
 * Converts an array of objects to CSV format
 */
function arrayToCSV<T extends Record<string, unknown>>(
  data: T[],
  headers: { key: keyof T; label: string }[],
  tz?: string
): string {
  // Create CSV header row
  const headerRow = headers.map(h => escapeCSVValue(h.label)).join(',')

  // Create data rows
  const dataRows = data.map(row => {
    return headers
      .map(h => {
        const value = row[h.key]
        return escapeCSVValue(formatValue(value, tz))
      })
      .join(',')
  })

  return [headerRow, ...dataRows].join('\n')
}

/**
 * Escapes special characters in CSV values
 */
function escapeCSVValue(value: string): string {
  // If value contains comma, quote, or newline, wrap in quotes and escape quotes
  if (value.includes(',') || value.includes('"') || value.includes('\n')) {
    return `"${value.replace(/"/g, '""')}"`
  }
  return value
}

/**
 * Formats a value for CSV export
 */
function formatValue(value: unknown, tz?: string): string {
  if (value === null || value === undefined) {
    return ''
  }

  if (value instanceof Date) {
    return tz ? formatInTz(value, tz, 'yyyy-MM-dd') : format(value, 'yyyy-MM-dd HH:mm:ss')
  }

  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No'
  }

  if (typeof value === 'number') {
    return value.toString()
  }

  return String(value)
}

/**
 * Triggers a browser download for the given CSV content
 */
function downloadCSV(csvContent: string, filename: string): void {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')

  const url = URL.createObjectURL(blob)
  link.setAttribute('href', url)
  link.setAttribute('download', filename)
  link.style.visibility = 'hidden'

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  // Clean up the URL
  URL.revokeObjectURL(url)
}

// Transaction types for export
interface TransactionForExport extends Record<string, unknown> {
  date: Date
  account: string
  type: string
  category?: string
  amount: number
  payee?: string
  payer?: string
  paymentMethod?: string
  reference?: string
  note?: string
  transferTo?: string
}

/**
 * Exports transactions to CSV
 */
export function exportTransactionsToCSV(
  transactions: TransactionForExport[],
  tz?: string,
  filename: string = `transactions-${format(new Date(), 'yyyy-MM-dd')}.csv`
): void {
  const headers = [
    { key: 'date' as const, label: 'Date' },
    { key: 'account' as const, label: 'Account' },
    { key: 'type' as const, label: 'Type' },
    { key: 'category' as const, label: 'Category' },
    { key: 'amount' as const, label: 'Amount' },
    { key: 'payee' as const, label: 'Payee' },
    { key: 'payer' as const, label: 'Payer' },
    { key: 'paymentMethod' as const, label: 'Payment Method' },
    { key: 'reference' as const, label: 'Reference' },
    { key: 'note' as const, label: 'Note' },
    { key: 'transferTo' as const, label: 'Transfer To' },
  ]

  const csvContent = arrayToCSV(transactions, headers, tz)
  downloadCSV(csvContent, filename)
}

// Report types for export
interface IncomeExpenseReportRow extends Record<string, unknown> {
  month: string
  income: number
  expenses: number
  net: number
}

interface CategoryReportRow extends Record<string, unknown> {
  category: string
  amount: number
  percentage: number
  transactionCount: number
}

interface AccountStatementRow extends Record<string, unknown> {
  date: Date
  type: string
  category?: string
  description: string
  debit: number
  credit: number
  balance: number
}

interface CashFlowReportRow extends Record<string, unknown> {
  month: string
  opening: number
  income: number
  expenses: number
  closing: number
}

/**
 * Exports income/expense report to CSV
 */
export function exportIncomeExpenseReport(
  data: IncomeExpenseReportRow[],
  filename: string = `income-expense-${format(new Date(), 'yyyy-MM-dd')}.csv`
): void {
  const headers = [
    { key: 'month' as const, label: 'Month' },
    { key: 'income' as const, label: 'Income' },
    { key: 'expenses' as const, label: 'Expenses' },
    { key: 'net' as const, label: 'Net' },
  ]

  const csvContent = arrayToCSV(data, headers)
  downloadCSV(csvContent, filename)
}

/**
 * Exports category breakdown report to CSV
 */
export function exportCategoryReport(
  data: CategoryReportRow[],
  type: 'income' | 'expense',
  filename?: string
): void {
  const defaultFilename = `category-${type}-${format(new Date(), 'yyyy-MM-dd')}.csv`

  const headers = [
    { key: 'category' as const, label: 'Category' },
    { key: 'amount' as const, label: 'Amount' },
    { key: 'percentage' as const, label: 'Percentage (%)' },
    { key: 'transactionCount' as const, label: 'Transaction Count' },
  ]

  const csvContent = arrayToCSV(data, headers)
  downloadCSV(csvContent, filename || defaultFilename)
}

/**
 * Exports account statement to CSV
 */
export function exportAccountStatement(
  data: AccountStatementRow[],
  accountName: string,
  tz?: string,
  filename?: string
): void {
  const defaultFilename = `${accountName.toLowerCase().replace(/\s+/g, '-')}-statement-${format(new Date(), 'yyyy-MM-dd')}.csv`

  const headers = [
    { key: 'date' as const, label: 'Date' },
    { key: 'type' as const, label: 'Type' },
    { key: 'category' as const, label: 'Category' },
    { key: 'description' as const, label: 'Description' },
    { key: 'debit' as const, label: 'Debit' },
    { key: 'credit' as const, label: 'Credit' },
    { key: 'balance' as const, label: 'Balance' },
  ]

  const csvContent = arrayToCSV(data, headers, tz)
  downloadCSV(csvContent, filename || defaultFilename)
}

/**
 * Exports cash flow report to CSV
 */
export function exportCashFlowReport(
  data: CashFlowReportRow[],
  filename: string = `cash-flow-${format(new Date(), 'yyyy-MM-dd')}.csv`
): void {
  const headers = [
    { key: 'month' as const, label: 'Month' },
    { key: 'opening' as const, label: 'Opening Balance' },
    { key: 'income' as const, label: 'Income' },
    { key: 'expenses' as const, label: 'Expenses' },
    { key: 'closing' as const, label: 'Closing Balance' },
  ]

  const csvContent = arrayToCSV(data, headers)
  downloadCSV(csvContent, filename)
}

// Tax Summary types
interface TaxSummaryRow extends Record<string, unknown> {
  category: string
  type: string
  amount: number
  transactionCount: number
}

/**
 * Exports tax summary report to CSV
 */
export function exportTaxSummaryToCSV(
  data: { categories: { name: string; type: string; amount: number; transactionCount: number }[]; totalIncome: number; totalExpenses: number; netTaxable: number },
  filename: string = `tax-summary-${format(new Date(), 'yyyy-MM-dd')}.csv`
): void {
  const rows: TaxSummaryRow[] = data.categories.map(c => ({
    category: c.name,
    type: c.type,
    amount: c.amount,
    transactionCount: c.transactionCount,
  }))

  const headers = [
    { key: 'category' as const, label: 'Category' },
    { key: 'type' as const, label: 'Type' },
    { key: 'amount' as const, label: 'Amount' },
    { key: 'transactionCount' as const, label: 'Transactions' },
  ]

  let csv = arrayToCSV(rows, headers)
  csv += `\n\nTotal Income,,${data.totalIncome},`
  csv += `\nTotal Expenses,,${data.totalExpenses},`
  csv += `\nNet Taxable,,${data.netTaxable},`

  downloadCSV(csv, filename)
}

/**
 * Generic export function for custom reports
 */
export function exportReportToCSV<T extends Record<string, unknown>>(
  data: T[],
  headers: { key: keyof T; label: string }[],
  filename: string
): void {
  const csvContent = arrayToCSV(data, headers)
  downloadCSV(csvContent, filename)
}
