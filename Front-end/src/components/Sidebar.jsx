import React, { useContext } from "react"
import { IoMdArrowForward } from "react-icons/io"
import CartItem from "./CartItem"
import { SidebarContext } from "../contexts/SidebarContext"
import { CartContext } from "../contexts/CartContext"
import { FiTrash2 } from "react-icons/fi"
import { Link } from "react-router-dom"

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext)
  const { cart, clearCart, total } = useContext(CartContext)

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-50 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-xl font-semibold">Shopping Bag</div>
        <div onClick={handleClose} className="">
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className=" gap-y-2 overflow-y-auto overflow-x-hidden">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />
        })}
      </div>
      <div className="flex felx-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>€ {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-black text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
      </div>{" "}
      <Link
        to="/panier"
        className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium"
      >
        View cart
      </Link>
    </div>
  )
}

export default Sidebar
