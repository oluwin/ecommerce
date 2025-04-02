'use client'
import { useCheckout } from '@/components/features/checkout'

export default function SuccessPage() {
    const { data } = useCheckout()

    return (
        <div className="max-w-md mx-auto text-center">
            <h1>Order Confirmed!</h1>
            <p>Card ending in {data.payment.card?.number.slice(-4)}</p>
        </div>
    )
}