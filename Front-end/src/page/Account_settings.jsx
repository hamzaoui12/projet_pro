import React, { useState } from "react"
import "tailwindcss/tailwind.css"

const Account = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [setErrorMessage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    const userExists = checkIfUserExists(username)
    const emailExists = checkIfEmailExists(email)

    if (userExists || emailExists) {
      setErrorMessage("An account with this username or email already exists.")
    }
  }

  const checkIfUserExists = (username) => {
    return false
  }

  const checkIfEmailExists = (email) => {
    return false
  }

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      }}
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md max-w-lg mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Personal Information
        </h1>
        <form className="flex flex-col gap-4">
          <input
            className="bg-transparent border border-gray-500 p-2 rounded-lg w-full"
            placeholder="First Name"
          />
          <input
            className="bg-transparent border border-gray-500 p-2 rounded-lg w-full"
            placeholder="Last Name"
          />
          <input
            className="bg-transparent border border-gray-500 p-2 rounded-lg w-full"
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            className="bg-transparent border border-gray-500 p-2 rounded-lg w-full"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="bg-transparent border border-gray-500 p-2 rounded-lg w-full"
            placeholder="Password"
          />
          <input
            className="bg-transparent border border-gray-500 p-2 rounded-lg w-full"
            placeholder="Confirm Password"
          />
        </form>

        <h1 className="text-4xl font-bold mb-8 text-gray-800">Address Book</h1>
        <form className="flex flex-col gap-4">
          <input
            className="bg-transparent border border-gray-500 p-2 rounded-lg w-full"
            placeholder="Shipping Address"
          />
          <input
            className="bg-transparent border border-gray-500 p-2 rounded-lg w-full"
            placeholder="Billing Address"
          />
        </form>
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Payment Methods
        </h1>
        <form className="flex flex-col gap-4 pb-4">
          <input
            className="bg-transparent border border-gray-500 p-2 rounded-lg w-full"
            placeholder="Payment Methods"
          />
        </form>

        <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-all duration-200">
          Update
        </button>
      </div>
    </div>
  )
}

export default Account
