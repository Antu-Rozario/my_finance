"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatCurrency } from "@/lib/utils"
import { TrendingUp, TrendingDown, Wallet, DollarSign } from "lucide-react"
import type { DashboardSummary } from "@/actions/dashboard"
import { useSearchParams } from "next/navigation"
import { format } from "date-fns"

interface SummaryCardsProps {
    summary: DashboardSummary
    currencySymbol: string
}

export function SummaryCards({ summary, currencySymbol }: SummaryCardsProps) {
    const searchParams = useSearchParams()
    const from = searchParams.get("from")
    const to = searchParams.get("to")

    const dateLabel = React.useMemo(() => {
        if (from && to) {
            return `${format(new Date(from), "MMM d, yyyy")} - ${format(new Date(to), "MMM d, yyyy")}`
        }
        return "This month"
    }, [from, to])

    const cards = [
        {
            title: "Total Income",
            value: summary.totalIncome,
            icon: TrendingUp,
            className: "text-[#0F9D58]", // Google Green 500
            bgClassName: "bg-[#0F9D58]/10",
        },
        {
            title: "Total Expenses",
            value: summary.totalExpenses,
            icon: TrendingDown,
            className: "text-[#DB4437]", // Google Red 500
            bgClassName: "bg-[#DB4437]/10",
        },
        {
            title: "Net Balance",
            value: summary.netBalance,
            icon: DollarSign,
            className: summary.netBalance >= 0
                ? "text-[#4285F4]" // Google Blue 500
                : "text-[#DB4437]", // Google Red 500
            bgClassName: summary.netBalance >= 0
                ? "bg-[#4285F4]/10"
                : "bg-[#DB4437]/10",
        },
        {
            title: "Total Balance",
            value: summary.totalAccountBalance,
            icon: Wallet,
            className: "text-[#F4B400]", // Google Yellow 500
            bgClassName: "bg-[#F4B400]/10",
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
                            {card.title === "Total Balance" ? "Current" : dateLabel}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
