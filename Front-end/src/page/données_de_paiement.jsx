import React, { useState } from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import { element } from "prop-types"
import axios from "axios"

function PaymentForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [cardName, setCardName] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name: cardName,
      },
    })

    setIsLoading(false)

    if (!error) {
      try {
        const { id } = paymentMethod
        const response = await axios.post(
          "http://localhost:3001/stripe/charge",
          {
            amount: 10000,
            id: id,
          }
        )
      } catch (error) {}
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md w-full mx-4 bg-transparent">
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-50 shadow-md rounded-lg px-8 py-6"
        >
          <div className="mb-6">
            <label
              htmlFor="cardName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nom de la carte
            </label>
            <input
              id="cardName"
              type="text"
              value={cardName}
              onChange={(Name) => setCardName(Name.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="cardElement"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Informations de carte de crédit
            </label>
            <div id="cardElement" className="border rounded p-2">
              <CardElement options={{ hidePostalCode: true }} />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Link to="/thankyou">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {isLoading ? "Paiement en cours..." : "Payer"}
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PaymentForm
