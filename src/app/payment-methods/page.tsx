import { Header } from "@/components/layout/Header"
import { getPaymentMethods } from "@/actions/payment-methods"
import { PaymentMethodsClient } from "@/components/payment-methods/PaymentMethodsClient"

export default async function PaymentMethodsPage() {
    const paymentMethods = await getPaymentMethods()

    return (
        <>
            <Header title="Payment Methods" />
            <div className="p-4 md:p-6">
                <PaymentMethodsClient paymentMethods={paymentMethods} />
            </div>
        </>
    )
}
