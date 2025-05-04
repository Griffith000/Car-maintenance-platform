'use client'

import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import CheckoutPage from "./CheckoutCard"
import convertToSubcurrency from "@/lib/convertToSubcurrency"

const StripePayment = ({ amount }: { amount: number }) => {
  
  if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
  }

  // load the stripe client
  const stripeClient = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

  return (
    <Elements
      stripe={stripeClient}
      options={{
        mode: "payment",
        amount: convertToSubcurrency(amount),
        currency: "usd",
      }}
    >
      <CheckoutPage amount={amount} />
    </Elements>
  )
}

export default StripePayment
