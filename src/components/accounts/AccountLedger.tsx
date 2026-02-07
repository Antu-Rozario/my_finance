"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatCurrency, formatDate, getTransactionTypeBadge } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { FinanceAccount } from "@/generated/prisma/client"

interface Transaction {
    id: number
    date: Date
    type: 'INCOME' | 'EXPENSE' | 'TRANSFER'
    amount: number
    debit: number
    credit: number
    balance: number
    note: string | null
    reference: string | null
    category: { name: string } | null
    payer: { name: string } | null
    payee: { name: string } | null
    paymentMethod: { name: string } | null
    transferToAccount: { name: string } | null
}

interface AccountLedgerProps {
    account: FinanceAccount
    transactions: Transaction[]
    currentBalance: number
    currencySymbol: string
    timezone: string
}

export function AccountLedger({
    account,
    transactions,
    currentBalance,
    currencySymbol,
    timezone
}: AccountLedgerProps) {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/accounts">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <div>
                    <h2 className="text-2xl font-bold">{account.name}</h2>
                    {account.note && (
                        <p className="text-muted-foreground">{account.note}</p>
                    )}
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Opening Balance</CardDescription>
                        <CardTitle className="text-2xl">
                            {formatCurrency(account.openingBalance, currencySymbol)}
                        </CardTitle>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Current Balance</CardDescription>
                        <CardTitle className={`text-2xl ${currentBalance >= 0
                                ? 'text-green-600 dark:text-green-400'
                                : 'text-red-600 dark:text-red-400'
                            }`}>
                            {formatCurrency(currentBalance, currencySymbol)}
                        </CardTitle>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Total Transactions</CardDescription>
                        <CardTitle className="text-2xl">{transactions.length}</CardTitle>
                    </CardHeader>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Transaction Ledger</CardTitle>
                </CardHeader>
                <CardContent>
                    {transactions.length === 0 ? (
                        <div className="text-center py-12 text-muted-foreground">
                            No transactions for this account yet.
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Type</TableHead>
                                        <TableHead>Category/Details</TableHead>
                                        <TableHead>Note</TableHead>
                                        <TableHead className="text-right">Debit</TableHead>
                                        <TableHead className="text-right">Credit</TableHead>
                                        <TableHead className="text-right">Balance</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {transactions.map((transaction) => (
                                        <TableRow key={transaction.id}>
                                            <TableCell className="font-medium whitespace-nowrap">
                                                {formatDate(transaction.date, 'MMM dd, yyyy', timezone)}
                                            </TableCell>
                                            <TableCell>
                                                <Badge className={getTransactionTypeBadge(transaction.type)} variant="secondary">
                                                    {transaction.type}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                {transaction.type === 'TRANSFER'
                                                    ? `Transfer to ${transaction.transferToAccount?.name || 'Unknown'}`
                                                    : transaction.category?.name || '-'}
                                            </TableCell>
                                            <TableCell className="max-w-[200px] truncate">
                                                {transaction.note || '-'}
                                            </TableCell>
                                            <TableCell className="text-right text-red-600 dark:text-red-400">
                                                {transaction.debit > 0 ? formatCurrency(transaction.debit, currencySymbol) : '-'}
                                            </TableCell>
                                            <TableCell className="text-right text-green-600 dark:text-green-400">
                                                {transaction.credit > 0 ? formatCurrency(transaction.credit, currencySymbol) : '-'}
                                            </TableCell>
                                            <TableCell className={`text-right font-medium ${transaction.balance >= 0
                                                    ? 'text-green-600 dark:text-green-400'
                                                    : 'text-red-600 dark:text-red-400'
                                                }`}>
                                                {formatCurrency(transaction.balance, currencySymbol)}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
