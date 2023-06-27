import React, { useState, useContext, useRef } from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import axios from "axios"
import { CartContext } from "../contexts/CartContext"

function PaymentForm() {
  const userData = JSON.parse(localStorage.getItem("userData")) || []
  const stripe = useStripe()
  const thankuRef = useRef()
  const elements = useElements()
  const [cardName, setCardName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState(false)
  const { total } = useContext(CartContext)
  const [email, setEmail] = useState("")
  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name: cardName,
        email: email,
      },
    })

    setIsLoading(false)

    if (!error) {
      const { id } = paymentMethod
      await axios.post("${process.env.REACT_APP_URL_ROUTE}/stripe/charge", {
        amount: total,
        id: id,
        metaData: userData,
      })
      setPaymentStatus(true)
      thankuRef.current.click()
    }
  }

  return (
    <div
      className="flex items-center justify-center "
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url(https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="max-w-md p-8 bg-white bg-opacity-75 shadow-lg border border-gray-100"
        style={{ width: "600px" }}
      >
        <form
          onSubmit={handleSubmit}
          className=" shadow-md rounded-lg px-8 py-6"
        >
          <div className="mb-6 ">
            <div className="mb-4 border-b border-black">
              <label
                htmlFor="cardName"
                className="text-black text-sm font-bold mb-2 flex justify-between"
              >
                First Name :
                <input
                  id="firstName"
                  type="text"
                  value={userData.firstName}
                  disabled={true}
                  className="px-6 text-right bg-transparent"
                  onChange={(e) => setCardName(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-4 border-b border-black">
              <label
                htmlFor="cardName"
                className="text-black text-sm font-bold mb-2 flex justify-between"
              >
                Last Name :
                <input
                  id="lastName"
                  type="text"
                  value={userData.lastName}
                  disabled={true}
                  className="px-6 text-right bg-transparent"
                  onChange={(e) => setCardName(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-4 border-b border-black">
              <label
                htmlFor="cardName"
                className="text-black text-sm font-bold mb-2 flex justify-between"
              >
                Address 1 :
                <input
                  id="address1"
                  type="text"
                  value={userData.address1}
                  disabled={true}
                  className="px-6 text-right bg-transparent"
                />
              </label>
            </div>
            <div className="mb-4 border-b border-black">
              <label
                htmlFor="cardName"
                className="text-black text-sm font-bold mb-2 flex justify-between"
              >
                Address 2 :
                <input
                  id="address2"
                  type="text"
                  value={userData.address2}
                  disabled={true}
                  className="px-6 text-right bg-transparent"
                />
              </label>
            </div>
            <div className="mb-4 border-b border-black">
              <label
                htmlFor="cardName"
                className="text-black text-sm font-bold mb-2 flex justify-between"
              >
                City :
                <input
                  id="city"
                  type="text"
                  value={userData.city}
                  disabled={true}
                  className="px-6 text-right bg-transparent"
                />
              </label>
            </div>
            <div className="mb-4 border-b border-black">
              <label
                htmlFor="cardName"
                className="text-black text-sm font-bold mb-2 flex justify-between"
              >
                Region :
                <input
                  id="region"
                  type="text"
                  value={userData.region}
                  disabled={true}
                  className="px-6 text-right bg-transparent"
                />
              </label>
            </div>
            <div className="mb-4 border-b border-black">
              <label
                htmlFor="cardName"
                className="text-black text-sm font-bold mb-2 flex justify-between"
              >
                Postal Code :
                <input
                  id="postalCode"
                  type="text"
                  value={userData.postalCode}
                  disabled={true}
                  className="px-6 text-right bg-transparent"
                />
              </label>
            </div>
            <div className="mb-4 border-b border-black">
              <label
                htmlFor="cardName"
                className="text-black text-sm font-bold mb-2 flex justify-between"
              >
                Country :
                <input
                  id="country"
                  type="text"
                  value={userData.country}
                  disabled={true}
                  className="px-6 text-right bg-transparent"
                />
              </label>
            </div>
            <div className="mb-4 border-b border-black">
              <label
                htmlFor="cardName"
                className="text-black text-sm font-bold mb-2 flex justify-between"
              >
                Phone :
                <input
                  id="phoneNumber"
                  type="text"
                  value={userData.phoneNumber}
                  disabled={true}
                  className="px-6 text-right bg-transparent"
                />
              </label>
            </div>
            <div className="mb-4 border-b border-black">
              <label
                htmlFor="cardName"
                className="text-black text-sm font-bold mb-2 flex justify-between"
              >
                Total Price :
                <input
                  id="total"
                  type="text"
                  value={total}
                  disabled={true}
                  className="px-6 text-right bg-transparent"
                />
              </label>
            </div>
            <div>
              <div className="mb-6 py-6">
                <label
                  htmlFor="email"
                  className="flex items-center justify-center text-black text-sm font-bold mb-2"
                >
                  Email :
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-2 border-black rounded px-2 py-1 w-full text-black bg-transparent"
                  placeholder="Entrez votre mail"
                />
                <label
                  htmlFor="cardElement"
                  className="flex items-center justify-center px-4 text-black text-sm font-bold mb-2"
                >
                  Informations de carte de crédit
                </label>
                <div
                  id="cardElement"
                  className="border-2 border-black rounded p-2"
                >
                  <CardElement options={{ hidePostalCode: true }} />
                </div>
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  {isLoading ? "Paiement en cours..." : "Payer"}
                </button>
              </div>
            </div>

            {paymentStatus && (
              <Link to="/thankyou" ref={thankuRef} style={{ opacity: "0" }} />
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default PaymentForm
