/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai"
import { TbHome } from "react-icons/tb"
import { FaWallet } from "react-icons/fa"
import { MdCategory, MdHelp } from "react-icons/md"

const Navbar = () => {
  const [div, setNav] = useState(false)
  const [cart, setCart] = useState([]) // Tableau pour stocker les produits ajoutés au panier
  const [item, setShowCart] = useState(false)

  function handleAddToCart(product) {
    setCart([...cart, product]) // Ajouter le produit sélectionné au tableau cart
    setShowCart(true) // Afficher le panier
  }
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!div)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Furniture</span>
        </h1>
      </div>

      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Best Furniture"
        />
      </div>
      {/* Cart button */}
      <div className="text-black hidden md:flex items-center p-2  cursor-pointer">
        <div onClick={() => setShowCart(!item)} size={30}>
          <AiOutlineShoppingCart className="text-3xl" />

          <div className="bg-red-500 absolute text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {cart.length}
          </div>
        </div>
        {item ? (
          <div className=" fixed w-full h-screen z-10 top-0 right-0"></div>
        ) : (
          ""
        )}
        {item && (
          <div
            className={`${
              item ? "right-0" : "-right-full"
            } bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
          >
            <div className="flex items-center justify-between py-6 border-b">
              <div className="uppercase text-xl font-semibold">
                Shopping Bag
              </div>{" "}
              <AiOutlineClose
                onClick={() => setShowCart(!item)}
                size={30}
                className="cursor-pointer w-8 h-8 flex justify-center items-center"
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {div ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          div
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!div)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Furniture</span>
        </h2>
        <div>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbHome
                onClick={() => setNav(!div)}
                size={25}
                className="mr-4 cursor-pointer"
              />{" "}
              Home
            </li>
            <li className="text-xl py-4 flex">
              <MdCategory
                onClick={() => setNav(!div)}
                size={25}
                className="mr-4 cursor-pointer"
              />{" "}
              Category
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet
                onClick={() => setNav(!div)}
                size={25}
                className="mr-4 cursor-pointer"
              />{" "}
              Panier
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp
                onClick={() => setNav(!div)}
                size={25}
                className="mr-4 cursor-pointer"
              />{" "}
              Help
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
