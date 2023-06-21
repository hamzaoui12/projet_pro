import React, { useContext, useState } from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai"
import { TbHome } from "react-icons/tb"
import { FaWallet } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi"
import { MdCategory, MdHelp } from "react-icons/md"
import { VscCircleSmall, VscAccount } from "react-icons/vsc"
import { SidebarContext } from "../contexts/SidebarContext.jsx"
import { CartContext } from "../contexts/CartContext.jsx"
import { orderStorage } from "../Storage/orerStorage.js"

const Navbar = () => {
  const [div, setNav] = useState(false)
  const [cart, setCart] = useState([])
  const [item, setShowCart] = useState(false)
  const [showCategoryList, setShowCategoryList] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)

  const handleAddToCart = (product) => {
    setCart([...cart, product])
    setShowCart(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)

    setCart([])
    setShowCart(false)
  }
  const { t, i18n } = useTranslation()

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between shadow-lg items-center p-4 sticky top-0 z-20 bg-white">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!div)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <div>
          <select
            name="language"
            className="text-xl text-center"
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option value="fr">{t("fr")}</option>
            <option value="en">{t("en")}</option>
            <option value="Ar">{t("Ar")}</option>
            <option value="es">{t("es")}</option>
          </select>
        </div>
      </div>
      <h1 className="text-3xl sm:text-4xl text-center lg:text-4xl px-2">
        <span className="">Λｉｒｎｅｉｓ</span>
      </h1>

      <div className="text-black md:flex flex items-center  gap-4 cursor-pointer">
        <Link to="/Search">
          <AiOutlineSearch size={30} className="text-3xl " />
        </Link>

        {/* ... existing code ... */}

        <Link to="/singin">
          <VscAccount size={30} className="text-3xl" />
        </Link>
        {isLoggedIn ? (
          <div onClick={() => handleLogout()} className="cursor-pointer">
            <FiLogOut size={30} />
          </div>
        ) : null}
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
                <p className="px-4">{t("navbar.home")}</p>
              </li>
            </Link>
            <li
              onClick={() => setShowCategoryList(!showCategoryList)}
              size={25}
              className="text-xl py-2 flex cursor-pointer"
            >
              <MdCategory className="mr-4 " /> {t("navbar.category")}
            </li>
            {showCategoryList && (
              <li>
                {/* Liste de clics */}
                <ul className=" text-gray-800 text-xl py-4 px-12">
                  <Link to="/category" onClick={() => setNav(!div)}>
                    <li className=" cursor-pointer grap-2 flex">
                      <VscCircleSmall size={30} /> {t("navbar.kitchens")}
                    </li>
                  </Link>
                  <Link to="/Category" onClick={() => setNav(!div)}>
                    <li className=" cursor-pointer grap-2 flex">
                      <VscCircleSmall size={30} /> {t("navbar.bedrooms")}
                    </li>
                  </Link>
                  <Link to="/category" onClick={() => setNav(!div)}>
                    <li className=" cursor-pointer grap-2 flex">
                      <VscCircleSmall size={30} /> {t("navbar.bathroom")}
                    </li>
                  </Link>
                  <Link to="/category" onClick={() => setNav(!div)}>
                    <li className=" cursor-pointer grap-2 flex">
                      <VscCircleSmall size={30} /> {t("navbar.livingroom")}
                    </li>
                  </Link>
                </ul>
              </li>
            )}
            <Link to="/panier" onClick={() => setNav(!div)} className="mr-4 ">
              <li className="text-xl py-4 flex cursor-pointer">
                <FaWallet size={25} />
                <p className="px-4">{t("navbar.shoppingCart")}</p>
              </li>
            </Link>
            <Link
              to="/help"
              onClick={() => setNav(!div)}
              className="mr-4 cursor-pointer"
            >
              <li className="text-xl py-4 flex">
                <MdHelp size={25} />
                <p className="px-4">{t("navbar.help")}</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
