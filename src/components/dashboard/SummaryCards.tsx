"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatCurrency } from "@/lib/utils"
import { TrendingUp, TrendingDown, Wallet, DollarSign } from "lucide-react"
import type { DashboardSummary } from "@/actions/dashboard"

interface SummaryCardsProps {
    summary: DashboardSummary
    currencySymbol: string
}

export function SummaryCards({ summary, currencySymbol }: SummaryCardsProps) {
    const cards = [
        {
            title: "Total Income",
            value: summary.totalIncome,
            icon: TrendingUp,
            className: "text-green-600 dark:text-green-400",
            bgClassName: "bg-green-100 dark:bg-green-900/30",
        },
        {
            title: "Total Expenses",
            value: summary.totalExpenses,
            icon: TrendingDown,
            className: "text-red-600 dark:text-red-400",
            bgClassName: "bg-red-100 dark:bg-red-900/30",
        },
        {
            title: "Net Balance",
            value: summary.netBalance,
            icon: DollarSign,
            className: summary.netBalance >= 0
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400",
            bgClassName: summary.netBalance >= 0
                ? "bg-green-100 dark:bg-green-900/30"
                : "bg-red-100 dark:bg-red-900/30",
        },
        {
            title: "Total Balance",
            value: summary.totalAccountBalance,
            icon: Wallet,
            className: "text-blue-600 dark:text-blue-400",
            bgClassName: "bg-blue-100 dark:bg-blue-900/30",
        },
    ]

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
                <Card key={card.title} className="overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            {card.title}
                        </CardTitle>
                        <div className={`p-2 rounded-lg ${card.bgClassName}`}>
                            <card.icon className={`h-4 w-4 ${card.className}`} />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className={`text-2xl font-bold ${card.className}`}>
                            {formatCurrency(card.value, currencySymbol)}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                            This month
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
