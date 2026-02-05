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

export default async function DashboardPage() {
  const [summary, monthlyData, categoryBreakdown, accountBalances, recentTransactions, settings] = await Promise.all([
    getDashboardSummary(),
    getMonthlyData(),
    getCategoryBreakdown(),
    getAccountBalances(),
    getRecentTransactions(10),
    getSettings(),
  ])

  return (
    <>
      <Header title="Dashboard" />
      <div className="p-4 md:p-6 space-y-6">
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
