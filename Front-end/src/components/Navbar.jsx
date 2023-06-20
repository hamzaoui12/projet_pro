import React, { useState } from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai"
import { TbHome } from "react-icons/tb"
import { FaWallet } from "react-icons/fa"
import { MdCategory, MdHelp } from "react-icons/md"
import { VscCircleSmall, VscAccount } from "react-icons/vsc"
import { orderStorage } from "../Storage/orerStorage.js"

const Navbar = () => {
  const [div, setNav] = useState(false)
  const [cart, setCart] = useState([])
  const [item, setShowCart] = useState(false)
  const [showCategoryList, setShowCategoryList] = useState(false)

  // const handleAddToCart = (product) => {
  //   setCart([...cart, product])
  //   setShowCart(true)
  // }

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between shadow-lg items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!div)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
      </div>
      <h1 className="text-3xl sm:text-4xl text-center lg:text-4xl px-2">
        <span className="">Λｉｒｎｅｉｓ</span>
      </h1>

      <div className="text-black md:flex flex items-center  gap-4 cursor-pointer">
        <Link to="/Search">
          <AiOutlineSearch size={30} className="text-3xl " />
        </Link>

        <div onClick={() => setShowCart(!item)} size={25} className=" ">
          <AiOutlineShoppingCart className="text-3xl" />
          {cart && cart.length > 0 && (
            <div className="bg-red-500 absolute text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {cart.length}
            </div>
          )}
        </div>
        <Link to="/singin">
          <VscAccount size={30} className="text-3xl" />
        </Link>

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
        <h2 className="text-2xl p-4 flex justify-center items-center">
          <span className="">Λｉｒｎｅｉｓ</span>
        </h2>
        <div>
          <ul className="flex font-bold flex-col p-4 text-gray-800">
            <Link to="/" onClick={() => setNav(!div)} className="mr-4">
              <li className="text-xl py-4 flex cursor-pointer">
                <TbHome size={25} />
                <p className="px-4">Home</p>
              </li>
            </Link>{" "}
            <li
              onClick={() => setShowCategoryList(!showCategoryList)}
              size={25}
              className="text-xl py-2 flex cursor-pointer"
            >
              <MdCategory className="mr-4 " /> Category
            </li>
            {showCategoryList && (
              <li>
                {/* Liste de clics */}
                <ul className=" text-gray-800 text-xl py-4 px-12">
                  <Link to="/category" onClick={() => setNav(!div)}>
                    <li className=" cursor-pointer grap-2 flex">
                      <VscCircleSmall size={30} /> Kitchens
                    </li>{" "}
                  </Link>{" "}
                  <Link to="/Category" onClick={() => setNav(!div)}>
                    <li className=" cursor-pointer grap-2 flex">
                      <VscCircleSmall size={30} />
                      Bedrooms
                    </li>
                  </Link>{" "}
                  <Link to="/category" onClick={() => setNav(!div)}>
                    <li className=" cursor-pointer grap-2 flex">
                      <VscCircleSmall size={30} />
                      Bathroom
                    </li>{" "}
                  </Link>{" "}
                  <Link to="/category" onClick={() => setNav(!div)}>
                    <li className=" cursor-pointer grap-2 flex">
                      <VscCircleSmall size={30} />
                      Livingroom
                    </li>{" "}
                  </Link>{" "}
                </ul>
              </li>
            )}
            <Link to="/panier" onClick={() => setNav(!div)} className="mr-4 ">
              <li className="text-xl py-4 flex cursor-pointer">
                <FaWallet size={25} />
                <p className="px-4">Shopping Cart</p>
              </li>
            </Link>{" "}
            <Link
              to="/help"
              onClick={() => setNav(!div)}
              className="mr-4 cursor-pointer"
            >
              <li className="text-xl py-4 flex">
                <MdHelp size={25} />
                <p className="px-4">Help</p>
              </li>{" "}
            </Link>{" "}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
