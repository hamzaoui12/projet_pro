import React, { useState } from "react"

function PaymentForm() {
  const [cardName, setCardName] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [expirationDate, setExpirationDate] = useState("")
  const [cvv, setCvv] = useState("")

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
    //
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
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

      <div className="mb-4">
        <label
          htmlFor="cardNumber"
          className="block text-gray-700 font-bold mb-2"
        >
          Numéro de carte
        </label>
        <input
          id="cardNumber"
          type="text"
          value={cardNumber}
          onChange={handleCardNumberChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="expirationDate"
          className="block text-gray-700 font-bold mb-2"
        >
          Date d'expiration
        </label>
        <input
          id="expirationDate"
          type="text"
          value={expirationDate}
          onChange={handleExpirationDateChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="cvv" className="block text-gray-700 font-bold mb-2">
          CVV
        </label>
        <input
          id="cvv"
          type="text"
          value={cvv}
          onChange={handleCvvChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Payer
        </button>
      </div>
    </form>
  )
}

export default PaymentForm
