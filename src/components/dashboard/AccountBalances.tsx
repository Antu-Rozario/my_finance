"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatCurrency } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wallet } from "lucide-react"
import type { AccountBalance } from "@/actions/dashboard"

interface AccountBalancesProps {
    accounts: AccountBalance[]
    currencySymbol: string
}

export function AccountBalances({ accounts, currencySymbol }: AccountBalancesProps) {
    if (accounts.length === 0) {
        return (
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Account Balances</CardTitle>
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/accounts">
                            Manage <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardHeader>
                <CardContent>
                    <div className="text-center py-8 text-muted-foreground">
                        No accounts yet. Add your first account to get started.
                    </div>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Account Balances</CardTitle>
                <Button variant="ghost" size="sm" asChild>
                    <Link href="/accounts">
                        Manage <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {accounts.map((account) => (
                        <div
                            key={account.id}
                            className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <Wallet className="h-4 w-4 text-primary" />
                                </div>
                                <span className="font-medium">{account.name}</span>
                            </div>
                            <span className={`font-bold ${account.balance >= 0
                                    ? 'text-green-600 dark:text-green-400'
                                    : 'text-red-600 dark:text-red-400'
                                }`}>
                                {formatCurrency(account.balance, currencySymbol)}
                            </span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
