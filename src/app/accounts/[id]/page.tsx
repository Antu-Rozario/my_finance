import { Header } from "@/components/layout/Header"
import { getAccountWithTransactions } from "@/actions/accounts"
import { getSettings } from "@/actions/settings"
import { AccountLedger } from "@/components/accounts/AccountLedger"
import { notFound } from "next/navigation"

interface AccountDetailPageProps {
    params: Promise<{ id: string }>
}

export default async function AccountDetailPage({ params }: AccountDetailPageProps) {
    const { id } = await params
    const accountId = parseInt(id)

    if (isNaN(accountId)) {
        notFound()
    }

    const [accountData, settings] = await Promise.all([
        getAccountWithTransactions(accountId),
        getSettings(),
    ])

    if (!accountData) {
        notFound()
    }

    return (
        <>
            <Header title={`Account: ${accountData.account.name}`} />
            <div className="p-4 md:p-6">
                <AccountLedger
                    account={accountData.account}
                    transactions={accountData.transactions}
                    currentBalance={accountData.currentBalance}
                    currencySymbol={settings.currency_code}
                    timezone={settings.timezone}
                />
            </div>
        </>
    )
}
