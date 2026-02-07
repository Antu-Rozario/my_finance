"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { formatCurrency, formatDate, getTransactionTypeBadge } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface Transaction {
    id: number
    date: Date
    type: 'INCOME' | 'EXPENSE' | 'TRANSFER'
    amount: number
    note: string | null
    account: { name: string }
    category: { name: string } | null
}

interface RecentTransactionsProps {
    transactions: Transaction[]
    currencySymbol: string
    timezone: string
}

export function RecentTransactions({ transactions, currencySymbol, timezone }: RecentTransactionsProps) {
    if (transactions.length === 0) {
        return (
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Recent Transactions</CardTitle>
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/transactions">
                            View All <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardHeader>
                <CardContent>
                    <div className="text-center py-8 text-muted-foreground">
                        No transactions yet. Add your first transaction to get started.
                    </div>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Transactions</CardTitle>
                <Button variant="ghost" size="sm" asChild>
                    <Link href="/transactions">
                        View All <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Account</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {transactions.map((transaction) => (
                            <TableRow key={transaction.id}>
                                <TableCell className="font-medium">
                                    {formatDate(transaction.date, 'MMM dd, yyyy', timezone)}
                                </TableCell>
                                <TableCell>{transaction.account.name}</TableCell>
                                <TableCell>
                                    <Badge className={getTransactionTypeBadge(transaction.type)} variant="secondary">
                                        {transaction.type}
                                    </Badge>
                                </TableCell>
                                <TableCell>{transaction.category?.name || '-'}</TableCell>
                                <TableCell className={`text-right font-medium ${transaction.type === 'INCOME'
                                        ? 'text-green-600 dark:text-green-400'
                                        : transaction.type === 'EXPENSE'
                                            ? 'text-red-600 dark:text-red-400'
                                            : 'text-blue-600 dark:text-blue-400'
                                    }`}>
                                    {transaction.type === 'EXPENSE' ? '-' : ''}
                                    {formatCurrency(transaction.amount, currencySymbol)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
