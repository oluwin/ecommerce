'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useCheckout } from '@/components/features/checkout'
import { Button } from '@/components/components/ui/button'
import { Form } from '@/components/components/ui/form'
import { ValidatedInput } from '@/components/components/forms'
import { useRouter } from 'next/navigation'

const shippingSchema = z.object({
    fullName: z.string().min(2, "Minimum 2 characters"),
    address: z.string().min(5, "Address too short"),
    city: z.string().min(2),
    postalCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Invalid postal code"),
    country: z.string().min(2)
})

export default function ShippingPage() {
    const { setData, setCurrentStep } = useCheckout()
    const router = useRouter()

    const form = useForm<z.infer<typeof shippingSchema>>({
        resolver: zodResolver(shippingSchema),
        defaultValues: {
            fullName: '',
            address: '',
            city: '',
            postalCode: '',
            country: 'US' // Default value
        }
    })

    const onSubmit = (values: z.infer<typeof shippingSchema>) => {
        setData(prev => ({ ...prev, shipping: values }))
        setCurrentStep(1)
        router.push('/checkout/payment')
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6">
                <ValidatedInput
                    form={form}
                    name="fullName"
                    label="Full Name"
                    placeholder="John Doe"
                />

                <ValidatedInput
                    form={form}
                    name="address"
                    label="Street Address"
                    placeholder="123 Main St"
                />

                <div className="grid grid-cols-2 gap-4">
                    <ValidatedInput
                        form={form}
                        name="city"
                        label="City"
                        placeholder="New York"
                    />

                    <ValidatedInput
                        form={form}
                        name="postalCode"
                        label="Postal Code"
                        placeholder="10001"
                    />
                </div>

                <ValidatedInput
                    form={form}
                    name="country"
                    label="Country"
                    placeholder="United States"
                />

                <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                >
                    Continue to Payment
                </Button>
            </form>
        </Form>
    )
}