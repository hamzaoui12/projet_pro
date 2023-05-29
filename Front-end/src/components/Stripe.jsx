import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const PUBLIC_KEY =
  "pk_test_51NChk7ImrSCoSRQsm0IfzcSsArixlrKAP7ZF6Mqtzf8J9fjv99kwISMOBAhZU6xnsUIM7CEIK6tt2cYweGcJxVOs00O0EMzped"
const stripe = loadStripe(PUBLIC_KEY)

const Stripe = () => {
  return (
    <Elements stripe={stripe}>
      <donnees_de_paiment />
    </Elements>
  )
}
export default Stripe
