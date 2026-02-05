"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { formatCurrency, formatDate, formatDateForInput, getTransactionTypeBadge } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from "recharts"
import { Loader2, Download, Printer } from "lucide-react"
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
    const [startDate, setStartDate] = useState(() => {
        const date = new Date()
        date.setMonth(date.getMonth() - 11)
        date.setDate(1)
        return formatDateForInput(date)
    })
    const [endDate, setEndDate] = useState(() => formatDateForInput(new Date()))

    // Report data
    const [incomeExpenseData, setIncomeExpenseData] = useState<{ data: IncomeExpenseData[]; totals: { totalIncome: number; totalExpenses: number; net: number } } | null>(null)
    const [categoryData, setCategoryData] = useState<CategoryReportData[]>([])
    const [categoryType, setCategoryType] = useState<'INCOME' | 'EXPENSE'>('EXPENSE')
    const [selectedAccountId, setSelectedAccountId] = useState<string>('')
    const [accountStatement, setAccountStatement] = useState<Awaited<ReturnType<typeof getAccountStatement>> | null>(null)
    const [cashFlowData, setCashFlowData] = useState<CashFlowData[]>([])

    async function generateIncomeExpenseReport() {
        setIsLoading(true)
        try {
            const data = await getIncomeExpenseReport(new Date(startDate), new Date(endDate))
            setIncomeExpenseData(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function generateCategoryReport() {
        setIsLoading(true)
        try {
            const data = await getCategoryReport(new Date(startDate), new Date(endDate), categoryType)
            setCategoryData(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function generateAccountStatement() {
        if (!selectedAccountId) return
        setIsLoading(true)
        try {
            const data = await getAccountStatement(parseInt(selectedAccountId), new Date(startDate), new Date(endDate))
            setAccountStatement(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function generateCashFlowReport() {
        setIsLoading(true)
        try {
            const data = await getCashFlowReport(new Date(startDate), new Date(endDate))
            setCashFlowData(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Financial Reports</CardTitle>
            </CardHeader>
            <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-4 mb-6">
                        <TabsTrigger value="income-expense">Income vs Expense</TabsTrigger>
                        <TabsTrigger value="category">Category</TabsTrigger>
                        <TabsTrigger value="account-statement">Account Statement</TabsTrigger>
                        <TabsTrigger value="cash-flow">Cash Flow</TabsTrigger>
                    </TabsList>

                    {/* Date Range Filters */}
                    <div className="flex flex-wrap gap-4 mb-6">
                        <div className="space-y-2">
                            <Label>Start Date</Label>
                            <Input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>End Date</Label>
                            <Input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Income vs Expense Report */}
                    <TabsContent value="income-expense">
                        <div className="space-y-6">
                            <Button onClick={generateIncomeExpenseReport} disabled={isLoading}>
                                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Generate Report
                            </Button>

                            {incomeExpenseData && (
                                <>
                                    <div className="h-[400px]">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart data={incomeExpenseData.data}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="month" />
                                                <YAxis tickFormatter={(v) => formatCurrency(v, currencySymbol)} />
                                                <Tooltip formatter={(v: number | undefined) => v !== undefined ? formatCurrency(v, currencySymbol) : ''} />
                                                <Legend />
                                                <Bar dataKey="income" name="Income" fill="#22c55e" />
                                                <Bar dataKey="expenses" name="Expenses" fill="#ef4444" />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>

                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Month</TableHead>
                                                <TableHead className="text-right">Income</TableHead>
                                                <TableHead className="text-right">Expenses</TableHead>
                                                <TableHead className="text-right">Net</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {incomeExpenseData.data.map((row) => (
                                                <TableRow key={row.month}>
                                                    <TableCell>{row.month}</TableCell>
                                                    <TableCell className="text-right text-green-600">{formatCurrency(row.income, currencySymbol)}</TableCell>
                                                    <TableCell className="text-right text-red-600">{formatCurrency(row.expenses, currencySymbol)}</TableCell>
                                                    <TableCell className={`text-right font-medium ${row.net >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                        {formatCurrency(row.net, currencySymbol)}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                            <TableRow className="font-bold bg-muted/50">
                                                <TableCell>Total</TableCell>
                                                <TableCell className="text-right text-green-600">{formatCurrency(incomeExpenseData.totals.totalIncome, currencySymbol)}</TableCell>
                                                <TableCell className="text-right text-red-600">{formatCurrency(incomeExpenseData.totals.totalExpenses, currencySymbol)}</TableCell>
                                                <TableCell className={`text-right ${incomeExpenseData.totals.net >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                    {formatCurrency(incomeExpenseData.totals.net, currencySymbol)}
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </>
                            )}
                        </div>
                    </TabsContent>

                    {/* Category Report */}
                    <TabsContent value="category">
                        <div className="space-y-6">
                            <div className="flex gap-4 items-end">
                                <div className="space-y-2">
                                    <Label>Type</Label>
                                    <Select value={categoryType} onValueChange={(v) => setCategoryType(v as 'INCOME' | 'EXPENSE')}>
                                        <SelectTrigger className="w-40">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="EXPENSE">Expenses</SelectItem>
                                            <SelectItem value="INCOME">Income</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button onClick={generateCategoryReport} disabled={isLoading}>
                                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Generate Report
                                </Button>
                            </div>

                            {categoryData.length > 0 && (
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="h-[400px]">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie
                                                    data={categoryData}
                                                    cx="50%"
                                                    cy="50%"
                                                    outerRadius={150}
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
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Category</TableHead>
                                                <TableHead className="text-right">Amount</TableHead>
                                                <TableHead className="text-right">%</TableHead>
                                                <TableHead className="text-center">Count</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {categoryData.map((cat, index) => (
                                                <TableRow key={cat.name}>
                                                    <TableCell className="flex items-center gap-2">
                                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                                        {cat.name}
                                                    </TableCell>
                                                    <TableCell className="text-right">{formatCurrency(cat.amount, currencySymbol)}</TableCell>
                                                    <TableCell className="text-right">{cat.percentage.toFixed(1)}%</TableCell>
                                                    <TableCell className="text-center">{cat.transactionCount}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            )}
                        </div>
                    </TabsContent>

                    {/* Account Statement */}
                    <TabsContent value="account-statement">
                        <div className="space-y-6">
                            <div className="flex gap-4 items-end flex-wrap">
                                <div className="space-y-2">
                                    <Label>Account</Label>
                                    <Select value={selectedAccountId} onValueChange={setSelectedAccountId}>
                                        <SelectTrigger className="w-60">
                                            <SelectValue placeholder="Select account" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {accounts.map(account => (
                                                <SelectItem key={account.id} value={account.id.toString()}>
                                                    {account.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button onClick={generateAccountStatement} disabled={isLoading || !selectedAccountId}>
                                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Generate Statement
                                </Button>
                                {accountStatement && (
                                    <Button variant="outline" onClick={() => window.print()}>
                                        <Printer className="mr-2 h-4 w-4" />
                                        Print
                                    </Button>
                                )}
                            </div>

                            {accountStatement && (
                                <div className="space-y-4 print:shadow-none">
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <Card>
                                            <CardHeader className="pb-2">
                                                <CardTitle className="text-sm text-muted-foreground">Opening Balance</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-2xl font-bold">{formatCurrency(accountStatement.openingBalance, currencySymbol)}</p>
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader className="pb-2">
                                                <CardTitle className="text-sm text-muted-foreground">Transactions</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-2xl font-bold">{accountStatement.transactions.length}</p>
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader className="pb-2">
                                                <CardTitle className="text-sm text-muted-foreground">Closing Balance</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className={`text-2xl font-bold ${accountStatement.closingBalance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                    {formatCurrency(accountStatement.closingBalance, currencySymbol)}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Date</TableHead>
                                                <TableHead>Type</TableHead>
                                                <TableHead>Description</TableHead>
                                                <TableHead className="text-right">Debit</TableHead>
                                                <TableHead className="text-right">Credit</TableHead>
                                                <TableHead className="text-right">Balance</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow className="bg-muted/50">
                                                <TableCell colSpan={5} className="font-medium">Opening Balance</TableCell>
                                                <TableCell className="text-right font-medium">{formatCurrency(accountStatement.openingBalance, currencySymbol)}</TableCell>
                                            </TableRow>
                                            {accountStatement.transactions.map((t) => (
                                                <TableRow key={t.id}>
                                                    <TableCell>{formatDate(t.date)}</TableCell>
                                                    <TableCell>
                                                        <Badge className={getTransactionTypeBadge(t.type)} variant="secondary">
                                                            {t.type}
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell>{t.note || t.category?.name || '-'}</TableCell>
                                                    <TableCell className="text-right text-red-600">
                                                        {t.debit > 0 ? formatCurrency(t.debit, currencySymbol) : '-'}
                                                    </TableCell>
                                                    <TableCell className="text-right text-green-600">
                                                        {t.credit > 0 ? formatCurrency(t.credit, currencySymbol) : '-'}
                                                    </TableCell>
                                                    <TableCell className="text-right font-medium">{formatCurrency(t.runningBalance, currencySymbol)}</TableCell>
                                                </TableRow>
                                            ))}
                                            <TableRow className="bg-muted/50 font-bold">
                                                <TableCell colSpan={5}>Closing Balance</TableCell>
                                                <TableCell className={`text-right ${accountStatement.closingBalance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                    {formatCurrency(accountStatement.closingBalance, currencySymbol)}
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            )}
                        </div>
                    </TabsContent>

                    {/* Cash Flow Report */}
                    <TabsContent value="cash-flow">
                        <div className="space-y-6">
                            <Button onClick={generateCashFlowReport} disabled={isLoading}>
                                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Generate Report
                            </Button>

                            {cashFlowData.length > 0 && (
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Month</TableHead>
                                            <TableHead className="text-right">Opening Balance</TableHead>
                                            <TableHead className="text-right">Income</TableHead>
                                            <TableHead className="text-right">Expenses</TableHead>
                                            <TableHead className="text-right">Net Change</TableHead>
                                            <TableHead className="text-right">Closing Balance</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {cashFlowData.map((row) => (
                                            <TableRow key={row.month}>
                                                <TableCell className="font-medium">{row.month}</TableCell>
                                                <TableCell className="text-right">{formatCurrency(row.openingBalance, currencySymbol)}</TableCell>
                                                <TableCell className="text-right text-green-600">{formatCurrency(row.totalIncome, currencySymbol)}</TableCell>
                                                <TableCell className="text-right text-red-600">{formatCurrency(row.totalExpenses, currencySymbol)}</TableCell>
                                                <TableCell className={`text-right font-medium ${row.netChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                    {formatCurrency(row.netChange, currencySymbol)}
                                                </TableCell>
                                                <TableCell className={`text-right font-medium ${row.closingBalance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                    {formatCurrency(row.closingBalance, currencySymbol)}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            )}
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    )
}
