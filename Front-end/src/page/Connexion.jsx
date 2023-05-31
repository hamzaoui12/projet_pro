import React, { useState } from "react"
import Navbar from "../components/Navbar"

const Connexion = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!email || !password) {
      setErrorMessage("Please complete all the fields !")
      return
    }

    if (!email.includes("@")) {
      setErrorMessage("Please enter a valid email address !")
      return
    }

    setErrorMessage("")
    alert("Connexion réussie !")
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <div
          className="w-full md:w-1/2 h-screen bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg)",
          }}
        >
          <div className="absolute top-[20%] left-[10%] flex flex-col">
            <h1 className="text-6xl text-white font-bold my-4 tracking-wide leading-tight">
              MAKE YOUR <span className="text-[#FED7AA]">FURNITURE</span> DREAMS
              A <span className="text-[#FED7AA]">REALITY</span>
            </h1>
            <p className="text-2xl text-black font-normal">
              Logging in to get more offers on our articles!
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-[#F5f5F5] flex flex-col p-20 justify-center">
          <div className="flex flex-col mb-5">
            <h3 className="text-6xl font-bold mb-4">Login</h3>
            <p className="text-base mb-2">
              Welcome Back! Please enter your details.
            </p>
          </div>
          <div className="flex flex-col">
            {errorMessage && (
              <p className="text-red-500 mb-2">{errorMessage}</p>
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="text-black py-4 bg-none border-black outline-none focus:outline-none"
            />
          </div>
          <div className="flex flex-col my-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="text-black py-4 bg-none border-black outline-none focus:outline-none"
            />
          </div>
          <div className="flex items-end justify-end mb-4">
            <p className="text-base font-medium whitespace-normal cursor-pointer underline underline-offset-2">
              Forgot Password?
            </p>
          </div>
          <div className="flex flex-col my-6">
            <div className="flex justify-center">
              <button
                className="w-full text-white m-1 bg-black rounded-md p-4 text-center flex items-center justify-center text-xl font-semibold"
                onClick={handleSubmit}
              >
                Log in
              </button>
            </div>
            <div className="flex justify-center">
              <button className="w-full text-[#060606] m-1 bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center text-xl font-semibold">
                Register
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-base font-normal text-[#060606]">
              Don't have an account?{" "}
              <span className="font-semibold underline underline-offset">
                Register
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connexion
