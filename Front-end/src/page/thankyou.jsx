import React, {useEffect} from "react"
import { Link } from "react-router-dom"
import patchRequest from "../components/utils/patchRequest"

const Thankyou = () => {
  const userData = JSON.parse(localStorage.getItem("loggedUser"))
  const token = localStorage.getItem("token")
  const actualOrder = JSON.parse(localStorage.getItem("actualOrder"))

  useEffect(() => {
    patchRequest("orders", { finished: true }, actualOrder.id,{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    })
    localStorage.removeItem("actualOrder")
  }, [actualOrder.id, token])

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Thank you, {userData.firstName}!</h2>
        <p className="text-gray-600 mb-2">
          We sent you a receipt confirmation email at <span className="font-black font-bold">{userData.mail}</span>.
        </p>
        <p className="text-gray-600 mb-2">
          We are glad you found what you're looking for.
        </p>
        <p className="text-gray-600 mb-2">
          Customer satisfaction is our #1 priority, please let us know if your
          shopping experience was anything short of excellent.
        </p>
        <p className="text-gray-600 mb-2">
          You can find your order with the number #{actualOrder.id}
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
