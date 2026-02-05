import { Header } from "@/components/layout/Header"
import { getAccounts } from "@/actions/accounts"
import { getSettings } from "@/actions/settings"
import { AccountsClient } from "@/components/accounts/AccountsClient"

export default async function AccountsPage() {
    const [accounts, settings] = await Promise.all([
        getAccounts(),
        getSettings(),
    ])

    return (
        <>
            <Header title="Accounts" />
            <div className="p-4 md:p-6">
                <AccountsClient accounts={accounts} currencySymbol={settings.currency_code} />
            </div>
        </>
    )
}
