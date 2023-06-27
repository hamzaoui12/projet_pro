import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"

const Thankyou = (props) => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Thank you, {props.name}!</h2>
        <p className="text-gray-600 mb-2">
          We sent you a receipt confirmation email at {props.email}.
        </p>
        <p className="text-gray-600 mb-2">
          We are glad you found what you're looking for.
        </p>
        <p className="text-gray-600 mb-2">
          Customer satisfaction is our #1 priority, please let us know if your
          shopping experience was anything short of excellent.
        </p>
        <Link to="/home">
          {" "}
          <button
            type="submit"
            className="w-full text-white m-1 bg-black rounded-md p-4 text-center flex items-center justify-center text-xl font-semibold"
          >
            Home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Thankyou
