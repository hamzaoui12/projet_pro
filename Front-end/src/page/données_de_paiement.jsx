import React, { useState } from "react"
import Navbar from "../components/Navbar"

function PaymentForm() {
  const [cardName, setCardName] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [expirationDate, setExpirationDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleCardNameChange = (event) => {
    setCardName(event.target.value)
  }

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value)
  }

  const handleExpirationDateChange = (event) => {
    setExpirationDate(event.target.value)
  }

  const handleCvvChange = (event) => {
    setCvv(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsLoading(true)

    // Simulating a delay for the payment process
    setTimeout(() => {
      setIsLoading(false)
      // Perform the actual payment logic here
      // Reset form fields
      setCardName("")
      setCardNumber("")
      setExpirationDate("")
      setCvv("")
    }, 2000)
  }

  return (
    <div>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-8 p-6 rounded-lg shadow-lg bg-gray-100"
      >
        <div className="mb-6">
          <label
            htmlFor="cardName"
            className="block text-gray-700 font-bold mb-2"
          >
            Nom de la carte
          </label>
          <input
            id="cardName"
            type="text"
            value={cardName}
            onChange={handleCardNameChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="cardNumber"
            className="block text-gray-700 font-bold mb-2"
          >
            Numéro de carte
          </label>
          <input
            id="cardNumber"
            type="Number"
            value={cardNumber}
            onChange={handleCardNumberChange}
            minlength="16"
            maxlength="16"
            placeholder="0000 0000 0000 0000"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="expirationDate"
            className="block text-gray-700 font-bold mb-2"
          >
            Date d'expiration
          </label>
          <input
            id="expirationDate"
            type="date"
            value={expirationDate}
            onChange={handleExpirationDateChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="cvv" className="block text-gray-700 font-bold mb-2">
            CVV
          </label>
          <input
            id="cvv"
            type="number"
            value={cvv}
            onChange={handleCvvChange}
            min="0"
            max="999"
            placeholder="000"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center  justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {isLoading ? "Paiement en cours..." : "Payer"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default PaymentForm
