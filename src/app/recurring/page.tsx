import { Header } from "@/components/layout/Header"
import { getRecurringTransactions } from "@/actions/recurring"
import { getAccounts } from "@/actions/accounts"
import { getCategories } from "@/actions/categories"
import { getPayeesPayers } from "@/actions/payees-payers"
import { getPaymentMethods } from "@/actions/payment-methods"
import { getSettings } from "@/actions/settings"
import { RecurringClient } from "@/components/recurring/RecurringClient"

export default async function RecurringPage() {
    const [recurring, accounts, categories, payeesPayers, paymentMethods, settings] = await Promise.all([
        getRecurringTransactions(),
        getAccounts(),
        getCategories(),
        getPayeesPayers(),
        getPaymentMethods(),
        getSettings(),
    ])

    return (
        <>
            <Header title="Recurring Transactions" />
            <div className="p-4 md:p-6">
                <RecurringClient
                    recurringTransactions={recurring}
                    accounts={accounts}
                    categories={categories}
                    payeesPayers={payeesPayers}
                    paymentMethods={paymentMethods}
                    currencySymbol={settings.currency_code}
                    timezone={settings.timezone}
                />
            </div>
        </>
    )
}
