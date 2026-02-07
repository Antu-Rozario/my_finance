import { Header } from "@/components/layout/Header"
import { getAccounts } from "@/actions/accounts"
import { getSettings } from "@/actions/settings"
import { ReportsClient } from "@/components/reports/ReportsClient"

export default async function ReportsPage() {
    const [accounts, settings] = await Promise.all([
        getAccounts(),
        getSettings(),
    ])

    return (
        <>
            <Header title="Reports" />
            <div className="p-2 sm:p-4 md:p-6 overflow-hidden">
                <ReportsClient accounts={accounts} currencySymbol={settings.currency_code} timezone={settings.timezone} />
            </div>
        </>
    )
}
