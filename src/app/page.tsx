import { Header } from "@/components/layout/Header"
import {
  getDashboardSummary,
  getMonthlyData,
  getCategoryBreakdown,
  getAccountBalances,
  getRecentTransactions
} from "@/actions/dashboard"
import { getSettings } from "@/actions/settings"
import { SummaryCards } from "@/components/dashboard/SummaryCards"
import { IncomeExpenseChart } from "@/components/dashboard/IncomeExpenseChart"
import { ExpensePieChart } from "@/components/dashboard/ExpensePieChart"
import { RecentTransactions } from "@/components/dashboard/RecentTransactions"
import { AccountBalances } from "@/components/dashboard/AccountBalances"
import { DashboardFilters } from "@/components/dashboard/DashboardFilters"

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string; to?: string }>
}) {
  const { from, to } = await searchParams
  const startDate = from ? new Date(from) : undefined
  const endDate = to ? new Date(to) : undefined

  const [summary, monthlyData, categoryBreakdown, accountBalances, recentTransactions, settings] = await Promise.all([
    getDashboardSummary(startDate, endDate),
    getMonthlyData(),
    getCategoryBreakdown(startDate, endDate),
    getAccountBalances(),
    getRecentTransactions(10, startDate, endDate),
    getSettings(),
  ])

  return (
    <>
      <Header title="Dashboard" />
      <div className="p-4 md:p-6 space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
          <DashboardFilters />
        </div>
        
        <SummaryCards summary={summary} currencySymbol={settings.currency_code} />

        <div className="grid gap-6 md:grid-cols-2">
          <IncomeExpenseChart data={monthlyData} currencySymbol={settings.currency_code} />
          <ExpensePieChart data={categoryBreakdown} currencySymbol={settings.currency_code} />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <RecentTransactions transactions={recentTransactions} currencySymbol={settings.currency_code} />
          </div>
          <AccountBalances accounts={accountBalances} currencySymbol={settings.currency_code} />
        </div>
      </div>
    </>
  )
}
