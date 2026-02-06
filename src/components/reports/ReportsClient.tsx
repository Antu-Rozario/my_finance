"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DateRangePicker, type DateRange } from "@/components/ui/date-range-picker"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { formatCurrency, formatDate, getTransactionTypeBadge } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from "recharts"
import { Loader2, Printer } from "lucide-react"
import {
    getIncomeExpenseReport,
    getCategoryReport,
    getAccountStatement,
    getCashFlowReport,
    type IncomeExpenseData,
    type CategoryReportData,
    type CashFlowData
} from "@/actions/reports"

interface Account {
    id: number
    name: string
}

interface ReportsClientProps {
    accounts: Account[]
    currencySymbol: string
}

const COLORS = ['#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e', '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9']

export function ReportsClient({ accounts, currencySymbol }: ReportsClientProps) {
    const [activeTab, setActiveTab] = useState('income-expense')
    const [isLoading, setIsLoading] = useState(false)

    // Date range state
    const [dateRange, setDateRange] = useState<DateRange>(() => {
        const from = new Date()
        from.setMonth(from.getMonth() - 11)
        from.setDate(1)
        return { from, to: new Date() }
    })

    // Report data
    const [incomeExpenseData, setIncomeExpenseData] = useState<{ data: IncomeExpenseData[]; totals: { totalIncome: number; totalExpenses: number; net: number } } | null>(null)
    const [categoryData, setCategoryData] = useState<CategoryReportData[]>([])
    const [categoryType, setCategoryType] = useState<'INCOME' | 'EXPENSE'>('EXPENSE')
    const [selectedAccountId, setSelectedAccountId] = useState<string>('')
    const [accountStatement, setAccountStatement] = useState<Awaited<ReturnType<typeof getAccountStatement>> | null>(null)
    const [cashFlowData, setCashFlowData] = useState<CashFlowData[]>([])

    async function generateIncomeExpenseReport() {
        if (!dateRange?.from || !dateRange?.to) return
        setIsLoading(true)
        try {
            const data = await getIncomeExpenseReport(dateRange.from, dateRange.to)
            setIncomeExpenseData(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function generateCategoryReport() {
        if (!dateRange?.from || !dateRange?.to) return
        setIsLoading(true)
        try {
            const data = await getCategoryReport(dateRange.from, dateRange.to, categoryType)
            setCategoryData(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function generateAccountStatement() {
        if (!selectedAccountId || !dateRange?.from || !dateRange?.to) return
        setIsLoading(true)
        try {
            const data = await getAccountStatement(parseInt(selectedAccountId), dateRange.from, dateRange.to)
            setAccountStatement(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function generateCashFlowReport() {
        if (!dateRange?.from || !dateRange?.to) return
        setIsLoading(true)
        try {
            const data = await getCashFlowReport(dateRange.from, dateRange.to)
            setCashFlowData(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleGenerate = () => {
        if (activeTab === 'income-expense') generateIncomeExpenseReport()
        else if (activeTab === 'category') generateCategoryReport()
        else if (activeTab === 'account-statement') generateAccountStatement()
        else if (activeTab === 'cash-flow') generateCashFlowReport()
    }

    return (
        <Card className="overflow-hidden py-3 gap-1.5 sm:py-6 sm:gap-6">
            <CardHeader className="px-3 sm:px-6 hidden sm:grid">
                <CardTitle>Financial Reports</CardTitle>
            </CardHeader>
            <CardContent className="px-3 sm:px-6 space-y-2.5 sm:space-y-0">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto mb-2.5 sm:mb-6">
                        <TabsTrigger value="income-expense" className="text-[11px] sm:text-sm py-1.5 px-1 sm:px-3">Income vs Expense</TabsTrigger>
                        <TabsTrigger value="category" className="text-[11px] sm:text-sm py-1.5 px-1 sm:px-3">Category</TabsTrigger>
                        <TabsTrigger value="account-statement" className="text-[11px] sm:text-sm py-1.5 px-1 sm:px-3">Acc. Statement</TabsTrigger>
                        <TabsTrigger value="cash-flow" className="text-[11px] sm:text-sm py-1.5 px-1 sm:px-3">Cash Flow</TabsTrigger>
                    </TabsList>

                    {/* Controls row: date range + tab-specific options + generate */}
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-2.5 sm:mb-6 flex-wrap">
                        <DateRangePicker
                            value={dateRange}
                            onChange={(range) => setDateRange(range ?? { from: undefined, to: undefined })}
                            className="h-7 sm:h-8 text-[11px] sm:text-sm"
                        />

                        {activeTab === 'category' && (
                            <Select value={categoryType} onValueChange={(v) => setCategoryType(v as 'INCOME' | 'EXPENSE')}>
                                <SelectTrigger className="w-24 sm:w-36 h-7 sm:h-8 text-[11px] sm:text-sm">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="EXPENSE">Expenses</SelectItem>
                                    <SelectItem value="INCOME">Income</SelectItem>
                                </SelectContent>
                            </Select>
                        )}

                        {activeTab === 'account-statement' && (
                            <Select value={selectedAccountId} onValueChange={setSelectedAccountId}>
                                <SelectTrigger className="w-32 sm:w-48 h-7 sm:h-8 text-[11px] sm:text-sm">
                                    <SelectValue placeholder="Account" />
                                </SelectTrigger>
                                <SelectContent>
                                    {accounts.map(account => (
                                        <SelectItem key={account.id} value={account.id.toString()}>
                                            {account.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        )}

                        <Button
                            onClick={handleGenerate}
                            disabled={isLoading || (activeTab === 'account-statement' && !selectedAccountId)}
                            size="sm"
                            className="h-7 sm:h-8 text-[11px] sm:text-sm px-2.5 sm:px-3 shrink-0"
                        >
                            {isLoading && <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />}
                            Generate
                        </Button>

                        {activeTab === 'account-statement' && accountStatement && (
                            <Button variant="outline" size="sm" className="h-7 sm:h-8 px-2 shrink-0" onClick={() => window.print()}>
                                <Printer className="h-3.5 w-3.5" />
                            </Button>
                        )}
                    </div>

                    {/* Income vs Expense Report */}
                    <TabsContent value="income-expense">
                        <div className="space-y-3 sm:space-y-6">

                            {incomeExpenseData && (
                                <>
                                    <div className="h-[220px] sm:h-[400px]">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart data={incomeExpenseData.data}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                                                <YAxis tickFormatter={(v) => formatCurrency(v, currencySymbol)} tick={{ fontSize: 10 }} />
                                                <Tooltip formatter={(v: number | undefined) => v !== undefined ? formatCurrency(v, currencySymbol) : ''} />
                                                <Legend wrapperStyle={{ fontSize: 12 }} />
                                                <Bar dataKey="income" name="Income" fill="#22c55e" />
                                                <Bar dataKey="expenses" name="Expenses" fill="#ef4444" />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>

                                    <div className="overflow-x-auto -mx-3 sm:mx-0">
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="text-xs sm:text-sm">Month</TableHead>
                                                    <TableHead className="text-right text-xs sm:text-sm">Income</TableHead>
                                                    <TableHead className="text-right text-xs sm:text-sm">Expenses</TableHead>
                                                    <TableHead className="text-right text-xs sm:text-sm">Net</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {incomeExpenseData.data.map((row) => (
                                                    <TableRow key={row.month}>
                                                        <TableCell className="text-xs sm:text-sm">{row.month}</TableCell>
                                                        <TableCell className="text-right text-green-600 text-xs sm:text-sm">{formatCurrency(row.income, currencySymbol)}</TableCell>
                                                        <TableCell className="text-right text-red-600 text-xs sm:text-sm">{formatCurrency(row.expenses, currencySymbol)}</TableCell>
                                                        <TableCell className={`text-right font-medium text-xs sm:text-sm ${row.net >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                            {formatCurrency(row.net, currencySymbol)}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                                <TableRow className="font-bold bg-muted/50">
                                                    <TableCell className="text-xs sm:text-sm">Total</TableCell>
                                                    <TableCell className="text-right text-green-600 text-xs sm:text-sm">{formatCurrency(incomeExpenseData.totals.totalIncome, currencySymbol)}</TableCell>
                                                    <TableCell className="text-right text-red-600 text-xs sm:text-sm">{formatCurrency(incomeExpenseData.totals.totalExpenses, currencySymbol)}</TableCell>
                                                    <TableCell className={`text-right text-xs sm:text-sm ${incomeExpenseData.totals.net >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                        {formatCurrency(incomeExpenseData.totals.net, currencySymbol)}
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                </>
                            )}
                        </div>
                    </TabsContent>

                    {/* Category Report */}
                    <TabsContent value="category">
                        <div className="space-y-3 sm:space-y-6">
                            {categoryData.length > 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                                    <div className="h-[220px] sm:h-[400px]">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie
                                                    data={categoryData}
                                                    cx="50%"
                                                    cy="50%"
                                                    outerRadius="75%"
                                                    dataKey="amount"
                                                    nameKey="name"
                                                    label={(props) => {
                                                        const entry = categoryData[props.index]
                                                        return `${entry.name} (${entry.percentage.toFixed(1)}%)`
                                                    }}
                                                >
                                                    {categoryData.map((_, index) => (
                                                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                                    ))}
                                                </Pie>
                                                <Tooltip formatter={(v: number | undefined) => v !== undefined ? formatCurrency(v, currencySymbol) : ''} />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <div className="overflow-x-auto -mx-3 sm:mx-0">
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="text-xs sm:text-sm">Category</TableHead>
                                                    <TableHead className="text-right text-xs sm:text-sm">Amount</TableHead>
                                                    <TableHead className="text-right text-xs sm:text-sm">%</TableHead>
                                                    <TableHead className="text-center text-xs sm:text-sm">Count</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {categoryData.map((cat, index) => (
                                                    <TableRow key={cat.name}>
                                                        <TableCell className="text-xs sm:text-sm">
                                                            <div className="flex items-center gap-1.5">
                                                                <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                                                <span className="truncate">{cat.name}</span>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="text-right text-xs sm:text-sm">{formatCurrency(cat.amount, currencySymbol)}</TableCell>
                                                        <TableCell className="text-right text-xs sm:text-sm">{cat.percentage.toFixed(1)}%</TableCell>
                                                        <TableCell className="text-center text-xs sm:text-sm">{cat.transactionCount}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                            )}
                        </div>
                    </TabsContent>

                    {/* Account Statement */}
                    <TabsContent value="account-statement">
                        <div className="space-y-3 sm:space-y-6">
                            {accountStatement && (
                                <div className="space-y-3 print:shadow-none">
                                    <div className="grid grid-cols-3 gap-1.5 sm:gap-4">
                                        <div className="rounded-lg border bg-card p-2 sm:p-4">
                                            <p className="text-[10px] sm:text-xs text-muted-foreground">Opening</p>
                                            <p className="text-xs sm:text-xl font-bold mt-0.5">{formatCurrency(accountStatement.openingBalance, currencySymbol)}</p>
                                        </div>
                                        <div className="rounded-lg border bg-card p-2 sm:p-4">
                                            <p className="text-[10px] sm:text-xs text-muted-foreground">Transactions</p>
                                            <p className="text-xs sm:text-xl font-bold mt-0.5">{accountStatement.transactions.length}</p>
                                        </div>
                                        <div className="rounded-lg border bg-card p-2 sm:p-4">
                                            <p className="text-[10px] sm:text-xs text-muted-foreground">Closing</p>
                                            <p className={`text-xs sm:text-xl font-bold mt-0.5 ${accountStatement.closingBalance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                {formatCurrency(accountStatement.closingBalance, currencySymbol)}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="overflow-x-auto -mx-3 sm:mx-0">
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="text-xs sm:text-sm">Date</TableHead>
                                                    <TableHead className="hidden sm:table-cell">Type</TableHead>
                                                    <TableHead className="hidden md:table-cell">Description</TableHead>
                                                    <TableHead className="text-right text-xs sm:text-sm">Debit</TableHead>
                                                    <TableHead className="text-right text-xs sm:text-sm">Credit</TableHead>
                                                    <TableHead className="text-right text-xs sm:text-sm">Balance</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow className="bg-muted/50">
                                                    <TableCell colSpan={1} className="font-medium text-xs sm:text-sm">Opening</TableCell>
                                                    <TableCell className="hidden sm:table-cell" />
                                                    <TableCell className="hidden md:table-cell" />
                                                    <TableCell />
                                                    <TableCell />
                                                    <TableCell className="text-right font-medium text-xs sm:text-sm">{formatCurrency(accountStatement.openingBalance, currencySymbol)}</TableCell>
                                                </TableRow>
                                                {accountStatement.transactions.map((t) => (
                                                    <TableRow key={t.id}>
                                                        <TableCell className="text-xs sm:text-sm">{formatDate(t.date)}</TableCell>
                                                        <TableCell className="hidden sm:table-cell">
                                                            <Badge className={getTransactionTypeBadge(t.type)} variant="secondary">
                                                                {t.type}
                                                            </Badge>
                                                        </TableCell>
                                                        <TableCell className="hidden md:table-cell">{t.note || t.category?.name || '-'}</TableCell>
                                                        <TableCell className="text-right text-red-600 text-xs sm:text-sm">
                                                            {t.debit > 0 ? formatCurrency(t.debit, currencySymbol) : '-'}
                                                        </TableCell>
                                                        <TableCell className="text-right text-green-600 text-xs sm:text-sm">
                                                            {t.credit > 0 ? formatCurrency(t.credit, currencySymbol) : '-'}
                                                        </TableCell>
                                                        <TableCell className="text-right font-medium text-xs sm:text-sm">{formatCurrency(t.runningBalance, currencySymbol)}</TableCell>
                                                    </TableRow>
                                                ))}
                                                <TableRow className="bg-muted/50 font-bold">
                                                    <TableCell className="text-xs sm:text-sm">Closing</TableCell>
                                                    <TableCell className="hidden sm:table-cell" />
                                                    <TableCell className="hidden md:table-cell" />
                                                    <TableCell />
                                                    <TableCell />
                                                    <TableCell className={`text-right text-xs sm:text-sm ${accountStatement.closingBalance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                        {formatCurrency(accountStatement.closingBalance, currencySymbol)}
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                            )}
                        </div>
                    </TabsContent>

                    {/* Cash Flow Report */}
                    <TabsContent value="cash-flow">
                        <div className="space-y-3 sm:space-y-6">
                            {cashFlowData.length > 0 && (
                                <div className="overflow-x-auto -mx-3 sm:mx-0">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="text-xs sm:text-sm">Month</TableHead>
                                                <TableHead className="text-right hidden sm:table-cell">Opening</TableHead>
                                                <TableHead className="text-right text-xs sm:text-sm">Income</TableHead>
                                                <TableHead className="text-right text-xs sm:text-sm">Expenses</TableHead>
                                                <TableHead className="text-right hidden sm:table-cell">Net</TableHead>
                                                <TableHead className="text-right text-xs sm:text-sm">Closing</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {cashFlowData.map((row) => (
                                                <TableRow key={row.month}>
                                                    <TableCell className="font-medium text-xs sm:text-sm">{row.month}</TableCell>
                                                    <TableCell className="text-right hidden sm:table-cell">{formatCurrency(row.openingBalance, currencySymbol)}</TableCell>
                                                    <TableCell className="text-right text-green-600 text-xs sm:text-sm">{formatCurrency(row.totalIncome, currencySymbol)}</TableCell>
                                                    <TableCell className="text-right text-red-600 text-xs sm:text-sm">{formatCurrency(row.totalExpenses, currencySymbol)}</TableCell>
                                                    <TableCell className={`text-right font-medium hidden sm:table-cell ${row.netChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                        {formatCurrency(row.netChange, currencySymbol)}
                                                    </TableCell>
                                                    <TableCell className={`text-right font-medium text-xs sm:text-sm ${row.closingBalance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                        {formatCurrency(row.closingBalance, currencySymbol)}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            )}
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    )
}
