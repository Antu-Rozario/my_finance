"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { formatCurrency } from "@/lib/utils"
import type { DashboardSummary } from "@/actions/dashboard"

interface MonthlyBudgetProps {
    summary: DashboardSummary
    currencySymbol: string
}

export function MonthlyBudget({ summary, currencySymbol }: MonthlyBudgetProps) {
    const expensePercentage = summary.totalIncome > 0 
        ? Math.min((summary.totalExpenses / summary.totalIncome) * 100, 100)
        : summary.totalExpenses > 0 ? 100 : 0

    const isOverBudget = summary.totalExpenses > summary.totalIncome && summary.totalIncome > 0

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Budget Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Expenses vs Income</span>
                        <span className={isOverBudget ? "text-destructive font-bold" : "text-muted-foreground"}>
                            {expensePercentage.toFixed(0)}%
                        </span>
                    </div>
                    <Progress 
                        value={expensePercentage} 
                        className="h-2"
                        // Custom indicator color if over budget
                        indicatorClassName={isOverBudget ? "bg-destructive" : "bg-primary"}
                    />
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Remaining</p>
                        <p className={`text-sm font-bold ${summary.netBalance < 0 ? "text-destructive" : "text-green-600"}`}>
                            {formatCurrency(Math.max(0, summary.netBalance), currencySymbol)}
                        </p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Expense Total</p>
                        <p className="text-sm font-bold">
                            {formatCurrency(summary.totalExpenses, currencySymbol)}
                        </p>
                    </div>
                </div>

                {isOverBudget && (
                    <p className="text-[11px] text-destructive bg-destructive/10 p-2 rounded-md border border-destructive/20 animate-pulse">
                        Warning: Monthly expenses have exceeded your total income.
                    </p>
                )}
            </CardContent>
        </Card>
    )
}
