"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DateRangePicker, type DateRange } from "@/components/ui/date-range-picker"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { formatCurrency, formatDate, getTransactionTypeBadge } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
    PieChart, Pie, Cell,
    LineChart, Line,
    AreaChart, Area,
    ComposedChart
} from "recharts"
import { Loader2, Printer, Download } from "lucide-react"
import {
    getIncomeExpenseReport,
    getCategoryReport,
    getAccountStatement,
    getCashFlowReport,
    getPayeePayerAnalysis,
    getCategoryTrends,
    getPaymentMethodBreakdown,
    getYearOverYearComparison,
    getDailySpendingPattern,
    getSavingsRate,
    getNetWorthOverTime,
    getTaxSummary,
    type IncomeExpenseData,
    type CategoryReportData,
    type CashFlowData,
    type PayeePayerAnalysisData,
    type CategoryTrendResult,
    type PaymentMethodBreakdownData,
    type YearOverYearResult,
    type DailySpendingPatternData,
    type SavingsRateData,
    type NetWorthData,
    type TaxSummaryData,
} from "@/actions/reports"
import { exportTaxSummaryToCSV } from "@/lib/export"

interface Account {
    id: number
    name: string
}

interface ReportsClientProps {
    accounts: Account[]
    currencySymbol: string
}

const COLORS = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58', '#AB47BC', '#00ACC1', '#FF7043', '#9E9D24', '#5C6BC0', '#F06292']

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

    // Existing report data
    const [incomeExpenseData, setIncomeExpenseData] = useState<{ data: IncomeExpenseData[]; totals: { totalIncome: number; totalExpenses: number; net: number } } | null>(null)
    const [categoryData, setCategoryData] = useState<CategoryReportData[]>([])
    const [categoryType, setCategoryType] = useState<'INCOME' | 'EXPENSE'>('EXPENSE')
    const [selectedAccountId, setSelectedAccountId] = useState<string>('')
    const [accountStatement, setAccountStatement] = useState<Awaited<ReturnType<typeof getAccountStatement>> | null>(null)
    const [cashFlowData, setCashFlowData] = useState<CashFlowData[]>([])

    // New report data
    const [payeePayerData, setPayeePayerData] = useState<PayeePayerAnalysisData | null>(null)
    const [categoryTrendData, setCategoryTrendData] = useState<CategoryTrendResult | null>(null)
    const [categoryTrendType, setCategoryTrendType] = useState<'INCOME' | 'EXPENSE'>('EXPENSE')
    const [paymentMethodData, setPaymentMethodData] = useState<PaymentMethodBreakdownData[]>([])
    const [yoyData, setYoyData] = useState<YearOverYearResult | null>(null)
    const [yoyYear1, setYoyYear1] = useState<string>(String(new Date().getFullYear() - 1))
    const [yoyYear2, setYoyYear2] = useState<string>(String(new Date().getFullYear()))
    const [dailySpendingData, setDailySpendingData] = useState<DailySpendingPatternData[]>([])
    const [savingsRateData, setSavingsRateData] = useState<SavingsRateData[]>([])
    const [netWorthData, setNetWorthData] = useState<NetWorthData[]>([])
    const [taxSummaryData, setTaxSummaryData] = useState<TaxSummaryData | null>(null)

    // Existing generators
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

    // New generators
    async function generatePayeePayerReport() {
        if (!dateRange?.from || !dateRange?.to) return
        setIsLoading(true)
        try {
            const data = await getPayeePayerAnalysis(dateRange.from, dateRange.to)
            setPayeePayerData(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function generateCategoryTrends() {
        if (!dateRange?.from || !dateRange?.to) return
        setIsLoading(true)
        try {
            const data = await getCategoryTrends(dateRange.from, dateRange.to, categoryTrendType)
            setCategoryTrendData(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function generatePaymentMethodReport() {
        if (!dateRange?.from || !dateRange?.to) return
        setIsLoading(true)
        try {
            const data = await getPaymentMethodBreakdown(dateRange.from, dateRange.to)
            setPaymentMethodData(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function generateYearOverYear() {
        setIsLoading(true)
        try {
            const p1Start = new Date(parseInt(yoyYear1), 0, 1)
            const p1End = new Date(parseInt(yoyYear1), 11, 31, 23, 59, 59)
            const p2Start = new Date(parseInt(yoyYear2), 0, 1)
            const p2End = new Date(parseInt(yoyYear2), 11, 31, 23, 59, 59)
            const data = await getYearOverYearComparison(p1Start, p1End, p2Start, p2End)
            setYoyData(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function generateDailySpending() {
        if (!dateRange?.from || !dateRange?.to) return
        setIsLoading(true)
        try {
            const data = await getDailySpendingPattern(dateRange.from, dateRange.to)
            setDailySpendingData(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function generateSavingsRate() {
        if (!dateRange?.from || !dateRange?.to) return
        setIsLoading(true)
        try {
            const data = await getSavingsRate(dateRange.from, dateRange.to)
            setSavingsRateData(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function generateNetWorth() {
        if (!dateRange?.from || !dateRange?.to) return
        setIsLoading(true)
        try {
            const data = await getNetWorthOverTime(dateRange.from, dateRange.to)
            setNetWorthData(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function generateTaxSummary() {
        if (!dateRange?.from || !dateRange?.to) return
        setIsLoading(true)
        try {
            const data = await getTaxSummary(dateRange.from, dateRange.to)
            setTaxSummaryData(data)
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
        else if (activeTab === 'payee-payer') generatePayeePayerReport()
        else if (activeTab === 'category-trends') generateCategoryTrends()
        else if (activeTab === 'payment-method') generatePaymentMethodReport()
        else if (activeTab === 'year-over-year') generateYearOverYear()
        else if (activeTab === 'daily-spending') generateDailySpending()
        else if (activeTab === 'savings-rate') generateSavingsRate()
        else if (activeTab === 'net-worth') generateNetWorth()
        else if (activeTab === 'tax-summary') generateTaxSummary()
    }

    return (
        <Card className="overflow-hidden py-3 gap-1.5 sm:py-6 sm:gap-6">
            <CardHeader className="px-3 sm:px-6 hidden sm:grid">
                <CardTitle>Financial Reports</CardTitle>
            </CardHeader>
            <CardContent className="px-3 sm:px-6 space-y-2.5 sm:space-y-0">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <ScrollArea className="w-full mb-2.5 sm:mb-6">
                        <TabsList className="inline-flex w-max h-auto">
                            <TabsTrigger value="income-expense" className="text-[11px] sm:text-sm py-1.5 px-2 sm:px-3">Income/Expense</TabsTrigger>
                            <TabsTrigger value="category" className="text-[11px] sm:text-sm py-1.5 px-2 sm:px-3">Category</TabsTrigger>
                            <TabsTrigger value="account-statement" className="text-[11px] sm:text-sm py-1.5 px-2 sm:px-3">Statement</TabsTrigger>
                            <TabsTrigger value="cash-flow" className="text-[11px] sm:text-sm py-1.5 px-2 sm:px-3">Cash Flow</TabsTrigger>
                            <TabsTrigger value="payee-payer" className="text-[11px] sm:text-sm py-1.5 px-2 sm:px-3">Payee/Payer</TabsTrigger>
                            <TabsTrigger value="category-trends" className="text-[11px] sm:text-sm py-1.5 px-2 sm:px-3">Trends</TabsTrigger>
                            <TabsTrigger value="payment-method" className="text-[11px] sm:text-sm py-1.5 px-2 sm:px-3">Payment Method</TabsTrigger>
                            <TabsTrigger value="year-over-year" className="text-[11px] sm:text-sm py-1.5 px-2 sm:px-3">Year/Year</TabsTrigger>
                            <TabsTrigger value="daily-spending" className="text-[11px] sm:text-sm py-1.5 px-2 sm:px-3">Daily Pattern</TabsTrigger>
                            <TabsTrigger value="savings-rate" className="text-[11px] sm:text-sm py-1.5 px-2 sm:px-3">Savings Rate</TabsTrigger>
                            <TabsTrigger value="net-worth" className="text-[11px] sm:text-sm py-1.5 px-2 sm:px-3">Net Worth</TabsTrigger>
                            <TabsTrigger value="tax-summary" className="text-[11px] sm:text-sm py-1.5 px-2 sm:px-3">Tax Summary</TabsTrigger>
                        </TabsList>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>

                    {/* Controls row */}
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-2.5 sm:mb-6 flex-wrap">
                        {activeTab !== 'year-over-year' && (
                            <DateRangePicker
                                value={dateRange}
                                onChange={(range) => setDateRange(range ?? { from: undefined, to: undefined })}
                                className="h-7 sm:h-8 text-[11px] sm:text-sm"
                            />
                        )}

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

                        {activeTab === 'category-trends' && (
                            <Select value={categoryTrendType} onValueChange={(v) => setCategoryTrendType(v as 'INCOME' | 'EXPENSE')}>
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

                        {activeTab === 'year-over-year' && (
                            <>
                                <Select value={yoyYear1} onValueChange={setYoyYear1}>
                                    <SelectTrigger className="w-20 sm:w-28 h-7 sm:h-8 text-[11px] sm:text-sm">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i).map(y => (
                                            <SelectItem key={y} value={String(y)}>{y}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <span className="text-xs text-muted-foreground">vs</span>
                                <Select value={yoyYear2} onValueChange={setYoyYear2}>
                                    <SelectTrigger className="w-20 sm:w-28 h-7 sm:h-8 text-[11px] sm:text-sm">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i).map(y => (
                                            <SelectItem key={y} value={String(y)}>{y}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </>
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

                        {activeTab === 'tax-summary' && taxSummaryData && (
                            <Button variant="outline" size="sm" className="h-7 sm:h-8 px-2 shrink-0" onClick={() => exportTaxSummaryToCSV(taxSummaryData)}>
                                <Download className="h-3.5 w-3.5" />
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

                    {/* Payee/Payer Analysis */}
                    <TabsContent value="payee-payer">
                        {payeePayerData && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                                <div>
                                    <h3 className="text-sm font-medium mb-2">Top Payees (Spending)</h3>
                                    {payeePayerData.topPayees.length > 0 ? (
                                        <div className="h-[220px] sm:h-[400px]">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <BarChart data={payeePayerData.topPayees} layout="vertical">
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis type="number" tickFormatter={(v) => formatCurrency(v, currencySymbol)} tick={{ fontSize: 10 }} />
                                                    <YAxis type="category" dataKey="name" width={100} tick={{ fontSize: 10 }} />
                                                    <Tooltip formatter={(v: number | undefined) => v !== undefined ? formatCurrency(v, currencySymbol) : ''} />
                                                    <Bar dataKey="totalAmount" name="Spending" fill="#ef4444" radius={[0, 4, 4, 0]} />
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    ) : (
                                        <p className="text-sm text-muted-foreground py-8 text-center">No payee data for this period</p>
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium mb-2">Top Payers (Income)</h3>
                                    {payeePayerData.topPayers.length > 0 ? (
                                        <div className="h-[220px] sm:h-[400px]">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <BarChart data={payeePayerData.topPayers} layout="vertical">
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis type="number" tickFormatter={(v) => formatCurrency(v, currencySymbol)} tick={{ fontSize: 10 }} />
                                                    <YAxis type="category" dataKey="name" width={100} tick={{ fontSize: 10 }} />
                                                    <Tooltip formatter={(v: number | undefined) => v !== undefined ? formatCurrency(v, currencySymbol) : ''} />
                                                    <Bar dataKey="totalAmount" name="Income" fill="#22c55e" radius={[0, 4, 4, 0]} />
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    ) : (
                                        <p className="text-sm text-muted-foreground py-8 text-center">No payer data for this period</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </TabsContent>

                    {/* Category Trends */}
                    <TabsContent value="category-trends">
                        {categoryTrendData && categoryTrendData.data.length > 0 && (
                            <div className="h-[220px] sm:h-[400px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={categoryTrendData.data}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                                        <YAxis tickFormatter={(v) => formatCurrency(v, currencySymbol)} tick={{ fontSize: 10 }} />
                                        <Tooltip formatter={(v: number | undefined) => v !== undefined ? formatCurrency(v, currencySymbol) : ''} />
                                        <Legend wrapperStyle={{ fontSize: 12 }} />
                                        {categoryTrendData.categories.map((cat, index) => (
                                            <Line
                                                key={cat}
                                                type="monotone"
                                                dataKey={cat}
                                                stroke={COLORS[index % COLORS.length]}
                                                strokeWidth={2}
                                                dot={{ r: 3 }}
                                            />
                                        ))}
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        )}
                    </TabsContent>

                    {/* Payment Method Breakdown */}
                    <TabsContent value="payment-method">
                        {paymentMethodData.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                                <div className="h-[220px] sm:h-[400px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={paymentMethodData}
                                                cx="50%"
                                                cy="50%"
                                                outerRadius="75%"
                                                dataKey="amount"
                                                nameKey="name"
                                                label={(props) => {
                                                    const entry = paymentMethodData[props.index]
                                                    return `${entry.name} (${entry.percentage.toFixed(1)}%)`
                                                }}
                                            >
                                                {paymentMethodData.map((_, index) => (
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
                                                <TableHead className="text-xs sm:text-sm">Method</TableHead>
                                                <TableHead className="text-right text-xs sm:text-sm">Amount</TableHead>
                                                <TableHead className="text-right text-xs sm:text-sm">%</TableHead>
                                                <TableHead className="text-center text-xs sm:text-sm">Count</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {paymentMethodData.map((method, index) => (
                                                <TableRow key={method.name}>
                                                    <TableCell className="text-xs sm:text-sm">
                                                        <div className="flex items-center gap-1.5">
                                                            <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                                            <span className="truncate">{method.name}</span>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="text-right text-xs sm:text-sm">{formatCurrency(method.amount, currencySymbol)}</TableCell>
                                                    <TableCell className="text-right text-xs sm:text-sm">{method.percentage.toFixed(1)}%</TableCell>
                                                    <TableCell className="text-center text-xs sm:text-sm">{method.transactionCount}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        )}
                    </TabsContent>

                    {/* Year-over-Year Comparison */}
                    <TabsContent value="year-over-year">
                        {yoyData && (
                            <div className="space-y-3 sm:space-y-6">
                                <div className="h-[220px] sm:h-[400px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={yoyData.data}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                                            <YAxis tickFormatter={(v) => formatCurrency(v, currencySymbol)} tick={{ fontSize: 10 }} />
                                            <Tooltip formatter={(v: number | undefined) => v !== undefined ? formatCurrency(v, currencySymbol) : ''} />
                                            <Legend wrapperStyle={{ fontSize: 12 }} />
                                            <Bar dataKey="period1Income" name={`${yoyData.period1Label} Income`} fill="#86efac" />
                                            <Bar dataKey="period1Expenses" name={`${yoyData.period1Label} Expenses`} fill="#fca5a5" />
                                            <Bar dataKey="period2Income" name={`${yoyData.period2Label} Income`} fill="#22c55e" />
                                            <Bar dataKey="period2Expenses" name={`${yoyData.period2Label} Expenses`} fill="#ef4444" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>

                                <div className="overflow-x-auto -mx-3 sm:mx-0">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="text-xs sm:text-sm">Period</TableHead>
                                                <TableHead className="text-right text-xs sm:text-sm">Income</TableHead>
                                                <TableHead className="text-right text-xs sm:text-sm">Expenses</TableHead>
                                                <TableHead className="text-right text-xs sm:text-sm">Net</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className="font-medium text-xs sm:text-sm">{yoyData.period1Label}</TableCell>
                                                <TableCell className="text-right text-green-600 text-xs sm:text-sm">{formatCurrency(yoyData.totals.period1Income, currencySymbol)}</TableCell>
                                                <TableCell className="text-right text-red-600 text-xs sm:text-sm">{formatCurrency(yoyData.totals.period1Expenses, currencySymbol)}</TableCell>
                                                <TableCell className={`text-right font-medium text-xs sm:text-sm ${yoyData.totals.period1Income - yoyData.totals.period1Expenses >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                    {formatCurrency(yoyData.totals.period1Income - yoyData.totals.period1Expenses, currencySymbol)}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium text-xs sm:text-sm">{yoyData.period2Label}</TableCell>
                                                <TableCell className="text-right text-green-600 text-xs sm:text-sm">{formatCurrency(yoyData.totals.period2Income, currencySymbol)}</TableCell>
                                                <TableCell className="text-right text-red-600 text-xs sm:text-sm">{formatCurrency(yoyData.totals.period2Expenses, currencySymbol)}</TableCell>
                                                <TableCell className={`text-right font-medium text-xs sm:text-sm ${yoyData.totals.period2Income - yoyData.totals.period2Expenses >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                    {formatCurrency(yoyData.totals.period2Income - yoyData.totals.period2Expenses, currencySymbol)}
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        )}
                    </TabsContent>

                    {/* Daily Spending Pattern */}
                    <TabsContent value="daily-spending">
                        {dailySpendingData.length > 0 && dailySpendingData.some(d => d.transactionCount > 0) && (
                            <div className="space-y-3 sm:space-y-6">
                                <div className="h-[220px] sm:h-[400px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={dailySpendingData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                                            <YAxis tickFormatter={(v) => formatCurrency(v, currencySymbol)} tick={{ fontSize: 10 }} />
                                            <Tooltip formatter={(v: number | undefined) => v !== undefined ? formatCurrency(v, currencySymbol) : ''} />
                                            <Legend wrapperStyle={{ fontSize: 12 }} />
                                            <Bar dataKey="averageSpending" name="Avg. Spending" fill="#f97316" radius={[4, 4, 0, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>

                                <div className="overflow-x-auto -mx-3 sm:mx-0">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="text-xs sm:text-sm">Day</TableHead>
                                                <TableHead className="text-right text-xs sm:text-sm">Avg Spending</TableHead>
                                                <TableHead className="text-right text-xs sm:text-sm">Total</TableHead>
                                                <TableHead className="text-center text-xs sm:text-sm">Transactions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {dailySpendingData.map((row) => (
                                                <TableRow key={row.day}>
                                                    <TableCell className="font-medium text-xs sm:text-sm">{row.day}</TableCell>
                                                    <TableCell className="text-right text-xs sm:text-sm">{formatCurrency(row.averageSpending, currencySymbol)}</TableCell>
                                                    <TableCell className="text-right text-xs sm:text-sm">{formatCurrency(row.totalSpending, currencySymbol)}</TableCell>
                                                    <TableCell className="text-center text-xs sm:text-sm">{row.transactionCount}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        )}
                    </TabsContent>

                    {/* Savings Rate */}
                    <TabsContent value="savings-rate">
                        {savingsRateData.length > 0 && (
                            <div className="space-y-3 sm:space-y-6">
                                <div className="h-[220px] sm:h-[400px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <ComposedChart data={savingsRateData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                                            <YAxis yAxisId="left" tickFormatter={(v) => formatCurrency(v, currencySymbol)} tick={{ fontSize: 10 }} />
                                            <YAxis yAxisId="right" orientation="right" tickFormatter={(v) => `${v.toFixed(0)}%`} tick={{ fontSize: 10 }} />
                                            <Tooltip formatter={(v: number | undefined, name?: string) => v !== undefined ? (name === 'Savings Rate %' ? `${v.toFixed(1)}%` : formatCurrency(v, currencySymbol)) : ''} />
                                            <Legend wrapperStyle={{ fontSize: 12 }} />
                                            <Area yAxisId="left" type="monotone" dataKey="savings" name="Savings" fill="#22c55e33" stroke="#22c55e" />
                                            <Line yAxisId="right" type="monotone" dataKey="savingsRate" name="Savings Rate %" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} />
                                        </ComposedChart>
                                    </ResponsiveContainer>
                                </div>

                                <div className="overflow-x-auto -mx-3 sm:mx-0">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="text-xs sm:text-sm">Month</TableHead>
                                                <TableHead className="text-right text-xs sm:text-sm">Income</TableHead>
                                                <TableHead className="text-right text-xs sm:text-sm">Expenses</TableHead>
                                                <TableHead className="text-right text-xs sm:text-sm">Savings</TableHead>
                                                <TableHead className="text-right text-xs sm:text-sm">Rate</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {savingsRateData.map((row) => (
                                                <TableRow key={row.month}>
                                                    <TableCell className="font-medium text-xs sm:text-sm">{row.month}</TableCell>
                                                    <TableCell className="text-right text-green-600 text-xs sm:text-sm">{formatCurrency(row.income, currencySymbol)}</TableCell>
                                                    <TableCell className="text-right text-red-600 text-xs sm:text-sm">{formatCurrency(row.expenses, currencySymbol)}</TableCell>
                                                    <TableCell className={`text-right font-medium text-xs sm:text-sm ${row.savings >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                        {formatCurrency(row.savings, currencySymbol)}
                                                    </TableCell>
                                                    <TableCell className={`text-right text-xs sm:text-sm ${row.savingsRate >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                        {row.savingsRate.toFixed(1)}%
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        )}
                    </TabsContent>

                    {/* Net Worth Over Time */}
                    <TabsContent value="net-worth">
                        {netWorthData.length > 0 && (
                            <div className="h-[220px] sm:h-[400px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={netWorthData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                                        <YAxis tickFormatter={(v) => formatCurrency(v, currencySymbol)} tick={{ fontSize: 10 }} />
                                        <Tooltip formatter={(v: number | undefined) => v !== undefined ? formatCurrency(v, currencySymbol) : ''} />
                                        <Area type="monotone" dataKey="netWorth" name="Net Worth" fill="#3b82f633" stroke="#3b82f6" strokeWidth={2} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        )}
                    </TabsContent>

                    {/* Tax Summary */}
                    <TabsContent value="tax-summary">
                        {taxSummaryData && (
                            <div className="space-y-3 sm:space-y-6">
                                <div className="grid grid-cols-3 gap-1.5 sm:gap-4">
                                    <div className="rounded-lg border bg-card p-2 sm:p-4">
                                        <p className="text-[10px] sm:text-xs text-muted-foreground">Total Income</p>
                                        <p className="text-xs sm:text-xl font-bold mt-0.5 text-green-600">{formatCurrency(taxSummaryData.totalIncome, currencySymbol)}</p>
                                    </div>
                                    <div className="rounded-lg border bg-card p-2 sm:p-4">
                                        <p className="text-[10px] sm:text-xs text-muted-foreground">Total Expenses</p>
                                        <p className="text-xs sm:text-xl font-bold mt-0.5 text-red-600">{formatCurrency(taxSummaryData.totalExpenses, currencySymbol)}</p>
                                    </div>
                                    <div className="rounded-lg border bg-card p-2 sm:p-4">
                                        <p className="text-[10px] sm:text-xs text-muted-foreground">Net Taxable</p>
                                        <p className={`text-xs sm:text-xl font-bold mt-0.5 ${taxSummaryData.netTaxable >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                            {formatCurrency(taxSummaryData.netTaxable, currencySymbol)}
                                        </p>
                                    </div>
                                </div>

                                <div className="overflow-x-auto -mx-3 sm:mx-0">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="text-xs sm:text-sm">Category</TableHead>
                                                <TableHead className="text-xs sm:text-sm">Type</TableHead>
                                                <TableHead className="text-right text-xs sm:text-sm">Amount</TableHead>
                                                <TableHead className="text-center text-xs sm:text-sm">Count</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {/* Income section */}
                                            {taxSummaryData.categories.filter(c => c.type === 'INCOME').length > 0 && (
                                                <TableRow className="bg-green-50 dark:bg-green-950/20">
                                                    <TableCell colSpan={4} className="font-semibold text-xs sm:text-sm text-green-700 dark:text-green-400">Income</TableCell>
                                                </TableRow>
                                            )}
                                            {taxSummaryData.categories.filter(c => c.type === 'INCOME').map(cat => (
                                                <TableRow key={`income-${cat.name}`}>
                                                    <TableCell className="text-xs sm:text-sm pl-6">{cat.name}</TableCell>
                                                    <TableCell><Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" variant="secondary">Income</Badge></TableCell>
                                                    <TableCell className="text-right text-green-600 text-xs sm:text-sm">{formatCurrency(cat.amount, currencySymbol)}</TableCell>
                                                    <TableCell className="text-center text-xs sm:text-sm">{cat.transactionCount}</TableCell>
                                                </TableRow>
                                            ))}
                                            {taxSummaryData.categories.filter(c => c.type === 'INCOME').length > 0 && (
                                                <TableRow className="font-medium bg-muted/30">
                                                    <TableCell colSpan={2} className="text-xs sm:text-sm">Subtotal Income</TableCell>
                                                    <TableCell className="text-right text-green-600 text-xs sm:text-sm">{formatCurrency(taxSummaryData.totalIncome, currencySymbol)}</TableCell>
                                                    <TableCell />
                                                </TableRow>
                                            )}

                                            {/* Expense section */}
                                            {taxSummaryData.categories.filter(c => c.type === 'EXPENSE').length > 0 && (
                                                <TableRow className="bg-red-50 dark:bg-red-950/20">
                                                    <TableCell colSpan={4} className="font-semibold text-xs sm:text-sm text-red-700 dark:text-red-400">Expenses</TableCell>
                                                </TableRow>
                                            )}
                                            {taxSummaryData.categories.filter(c => c.type === 'EXPENSE').map(cat => (
                                                <TableRow key={`expense-${cat.name}`}>
                                                    <TableCell className="text-xs sm:text-sm pl-6">{cat.name}</TableCell>
                                                    <TableCell><Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400" variant="secondary">Expense</Badge></TableCell>
                                                    <TableCell className="text-right text-red-600 text-xs sm:text-sm">{formatCurrency(cat.amount, currencySymbol)}</TableCell>
                                                    <TableCell className="text-center text-xs sm:text-sm">{cat.transactionCount}</TableCell>
                                                </TableRow>
                                            ))}
                                            {taxSummaryData.categories.filter(c => c.type === 'EXPENSE').length > 0 && (
                                                <TableRow className="font-medium bg-muted/30">
                                                    <TableCell colSpan={2} className="text-xs sm:text-sm">Subtotal Expenses</TableCell>
                                                    <TableCell className="text-right text-red-600 text-xs sm:text-sm">{formatCurrency(taxSummaryData.totalExpenses, currencySymbol)}</TableCell>
                                                    <TableCell />
                                                </TableRow>
                                            )}

                                            {/* Net row */}
                                            <TableRow className="font-bold bg-muted/50">
                                                <TableCell colSpan={2} className="text-xs sm:text-sm">Net (Income - Expenses)</TableCell>
                                                <TableCell className={`text-right text-xs sm:text-sm ${taxSummaryData.netTaxable >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                    {formatCurrency(taxSummaryData.netTaxable, currencySymbol)}
                                                </TableCell>
                                                <TableCell />
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    )
}
