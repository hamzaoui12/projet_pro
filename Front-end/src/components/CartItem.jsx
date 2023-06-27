import React, { useContext } from "react"
import { Link } from "react-router-dom"

import { IoMdClose } from "react-icons/io"
import { CartContext } from "../contexts/CartContext"

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext)

  return (
    <div className="flex gap-x-4 py-2 lg:px-2 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[50] flex items-center gap-x-4">
        <div>
          <Link to="/product">
            <img className="w-[250px] " src={item.image} alt="" />
          </Link>
        </div>
        <div className="w-full flex flex-col">
          <div className="flex justify-between md-2">
            <Link
              to="/product"
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline py-2"
            >
              {item.name}
            </Link>
            <div
              onClick={() => removeFromCart(item.id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose clasName="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px] text-sm">
            <div className="flex gap-10">
              <div className="flex items-center justify-around whitespace-nowrap w-10">
                {item.price} $
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
