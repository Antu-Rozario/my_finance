"use client"

import { memo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatCurrency } from "@/lib/utils"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import type { MonthlyData } from "@/actions/dashboard"

interface IncomeExpenseChartProps {
    data: MonthlyData[]
    currencySymbol: string
}

export const IncomeExpenseChart = memo(function IncomeExpenseChart({ data, currencySymbol }: IncomeExpenseChartProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Income vs Expenses</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                            <XAxis
                                dataKey="month"
                                tick={{ fill: 'currentColor' }}
                                tickLine={{ stroke: 'currentColor' }}
                            />
                            <YAxis
                                tick={{ fill: 'currentColor' }}
                                tickLine={{ stroke: 'currentColor' }}
                                tickFormatter={(value) => formatCurrency(value, currencySymbol)}
                            />
                            <Tooltip
                                formatter={(value: number | undefined) => value !== undefined ? formatCurrency(value, currencySymbol) : ''}
                                contentStyle={{
                                    backgroundColor: 'hsl(var(--background))',
                                    border: '1px solid hsl(var(--border))',
                                    borderRadius: '8px',
                                }}
                                labelStyle={{ color: 'hsl(var(--foreground))' }}
                            />
                            <Legend />
                            <Bar dataKey="income" name="Income" fill="#4285F4" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="expenses" name="Expenses" fill="#DB4437" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    )
})
