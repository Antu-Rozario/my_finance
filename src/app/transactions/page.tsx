import { Header } from "@/components/layout/Header"
import { getTransactions } from "@/actions/transactions"
import { getAccounts } from "@/actions/accounts"
import { getCategories } from "@/actions/categories"
import { getPayeesPayers } from "@/actions/payees-payers"
import { getPaymentMethods } from "@/actions/payment-methods"
import { getSettings } from "@/actions/settings"
import { TransactionsClient } from "@/components/transactions/TransactionsClient"

export default async function TransactionsPage() {
    const [transactionsData, accounts, categories, payeesPayers, paymentMethods, settings] = await Promise.all([
        getTransactions({ page: 1, limit: 20 }),
        getAccounts(),
        getCategories(),
        getPayeesPayers(),
        getPaymentMethods(),
        getSettings(),
    ])

    return (
        <>
            <Header title="Transactions" />
            <div className="p-2 sm:p-4 md:p-6 overflow-hidden">
                <TransactionsClient
                    initialTransactions={transactionsData}
                    accounts={accounts}
                    categories={categories}
                    payeesPayers={payeesPayers}
                    paymentMethods={paymentMethods}
                    currencySymbol={settings.currency_code}
                />
            </div>
        </>
    )
}
