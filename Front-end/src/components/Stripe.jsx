import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import PaymentForm from "../page/données_de_paiement"

const PUBLIC_KEY = require(process.env.STRIPE_TEST)
const stripe = loadStripe(PUBLIC_KEY)

const Stripe = () => {
  return (
    <Elements stripe={stripe}>
      <PaymentForm />
    </Elements>
  )
}
export default Stripe
