import { BsTrash3 } from "react-icons/bs"
import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { IoMdAdd, IoMdRemove } from "react-icons/io"
import { CartContext } from "../contexts/CartContext"
import { Formik } from "formik"
import inActualOrder from "../components/utils/inActualOrder"
import addNewOrder from "../components/utils/addNewOrder"


const Panier = (item) => {
  const navigate = useNavigate()
  const defaultProductId = 1
  const {
    removeFromCart,
    increaseAmount,
    decreaseAmount,
    cart,
    total,
  } = useContext(CartContext)

  const initialvalues = {
    productId : defaultProductId
  }
  
  const handleSubmit = async (values) => {
    if (localStorage.getItem("token")) {
      inActualOrder(addNewOrder)
      navigate("/validationfrom")
    }
  }

  return (
    <div>
      <Formik
          initialValues={initialvalues}
          onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:border-2 lg:border-black p-12 mx-4 lg:mx-24 my-4 lg:my-10 ">
              <span className="font-extrabold text-4xl pl-4 pb-8 lg:pb-16 mx-auto justify-center ">
                Panier
              </span>
              {cart.map((item) => (
                <div key={item.id} className="flex flex-col  my-4 py-4 border-b">
                  <div className="flex flex-col lg:flex-row gap-w-3">
                    <img
                      className="w-48 lg:w-64 mr-4 object-cover"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="flex flex-col">
                      <span className="h-6 w-full text-xl font-bold mb-2 lg:mb-4 ">
                        {item.name}
                      </span>
                      <span className="text-l break-words  overflow-hidden mb-2">
                        {item.description}
                      </span>
                      <span className="h-6 w-full text-xl font-bold mb-2 lg:mb-4 ">
                        {item.price} $
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row-reverse">
                    <div className="flex gap-6 h-[36px] text-sm">
                      <div className="flex w-16 lg:w-30 items-center h-full border text-primary font-medium">
                        <div
                          onClick={() => decreaseAmount(item.id)}
                          className="flex h-full w-36 text-white justify-center items-center cursor-pointer bg-black"
                        >
                          <IoMdRemove />
                        </div>
                        <div className="flex h-full justify-center items-center px-2 w-24 lg:w-30">
                          {item.amount}
                        </div>
                        <div
                          onClick={() => increaseAmount(item.id)}
                          className="flex h-full w-36 justify-center items-center cursor-pointer text-white bg-black"
                        >
                          <IoMdAdd />
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          removeFromCart(item.id)
                        }}
                      >
                        <BsTrash3 size={25} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-center">
                <div className="relative bottom-0  w-1/3">
                  <div className="grid grid-cols-2">
                    <span>Total</span>
                    <span className="flex justify-end">{total}$</span>
                    <span className="font-extrabold text-sm pl-1 text-slate-400">
                      TVA
                    </span>
                    <span className="flex justify-end">
                      {((total * 20) / 100).toFixed(2)}$
                    </span>
                  </div>
                  <div>
                    <button type="submit" className="border-4 border-black w-full py-2 mt-6 hover:bg-black hover:text-white">
                        {" "}
                        Passer la commande
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Panier
