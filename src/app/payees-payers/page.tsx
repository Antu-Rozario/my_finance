import { Header } from "@/components/layout/Header"
import { getPayeesPayers } from "@/actions/payees-payers"
import { PayeesPayersClient } from "@/components/payees-payers/PayeesPayersClient"

export default async function PayeesPayersPage() {
    const payeesPayers = await getPayeesPayers()

    return (
        <>
            <Header title="Payees & Payers" />
            <div className="p-4 md:p-6">
                <PayeesPayersClient payeesPayers={payeesPayers} />
            </div>
        </>
    )
}
