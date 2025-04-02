'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useCheckout } from '@/components/features/checkout'
import { Button } from '@/components/components/ui/button'
import { Form } from '@/components/components/ui/form'
import {ValidatedInput, ExpiryDatePicker} from '@/components/components/forms'
import { useRouter } from 'next/navigation'
import {paymentSchema} from "@/components/lib/schemas";
import {format} from "date-fns";

export default function PaymentPage() {
    const { setData, setCurrentStep } = useCheckout()
    const router = useRouter()

    const form = useForm<z.infer<typeof paymentSchema>>({
        resolver: zodResolver(paymentSchema),
        defaultValues: {
            number: '',
            cvc: '',
            name: '',
            expiry: undefined // Initialize as undefined
        }
    })

    const onSubmit = (values: z.infer<typeof paymentSchema>) => {
        setData(prev => ({
            ...prev,
            payment: {
                method: 'card',
                card: {
                    ...values,
                    expiry: format(values.expiry, 'MM/yy')
                }
            }
        }))
        setCurrentStep(2)
        router.push('/checkout/review')
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6">
                <ValidatedInput
                    form={form}
                    name="name"
                    label="Card Holder Name"
                    placeholder="John Doe"
                    description="Name as it appears on your card"
                />

                <ValidatedInput
                    form={form}
                    name="number"
                    label="Card Number"
                    placeholder="4242 4242 4242 4242"
                    description="16-digit number on your card"
                    onChange={(e) => {
                        // Add spaces every 4 digits for better readability
                        e.target.value = e.target.value
                            .replace(/\s/g, '')
                            .replace(/(\d{4})/g, '$1 ')
                            .trim()
                    }}
                />

                <div className="grid grid-cols-2 gap-4">
                    <ExpiryDatePicker
                        form={form}
                        name="expiry"
                        label="Expiry Date"
                        placeholder="MM/YY"
                    />

                    <ValidatedInput
                        form={form}
                        name="cvc"
                        label="Security Code"
                        placeholder="123"
                        description="3 digits on back of card"
                        type="password"
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                    disabled={form.formState.isSubmitting}
                >
                    {form.formState.isSubmitting ? 'Processing...' : 'Review Order'}
                </Button>
            </form>
        </Form>
    )
}