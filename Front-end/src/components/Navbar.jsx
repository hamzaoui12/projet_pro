import { BrowserRouter as Router, Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useContext, useEffect, useState } from "react"
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai"
import { TbHome } from "react-icons/tb"
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"
import { FaWallet } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi"
import { MdCategory, MdHelp } from "react-icons/md"
import { VscAccount, VscCircleSmall } from "react-icons/vsc"
import { useSearch } from "../contexts/Search"
import axios from "axios"
import { SidebarContext } from "../contexts/SidebarContext.jsx"
import { CartContext } from "../contexts/CartContext.jsx"

const Navbar = () => {
  const [div, setNav] = useState(false)
  const [setCart] = useState([])
  const [setShowCart] = useState(false)
  const [showCategoryList, setShowCategoryList] = useState(false)
  const { setSearch } = useSearch()
  const [searchProduct] = useState("")
  const [categories, setCategories] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)

  const handleLogout = () => {
    setIsLoggedIn(false)

    setCart([])
    setShowCart(false)
  }
  const { t, i18n } = useTranslation()

  useEffect(() => {
    axios
      .get(`http://localhost:3001/categories`)
      .then((res) => res.data)
      .then((data) => setCategories(data.result))
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(searchProduct)
    }, 1300)

    return () => clearTimeout(timer)
  }, [searchProduct, setSearch])

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between shadow-lg items-center p-4 sticky top-0 z-20 bg-white">
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

        <div onClick={() => setIsOpen(!isOpen)}>
          <AiOutlineShoppingCart className="text-3xl" />
          {itemAmount > 0 ? (
            <div className="bg-red-500 absolute text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          ) : (
            ""
          )}
        </div>

        <Link to="/singin">
          <VscAccount size={30} className="text-3xl" />
        </Link>
        {isLoggedIn ? (
          <div onClick={() => handleLogout()} className="cursor-pointer">
            <FiLogOut size={30} />
          </div>
        ) : null}
      </div>

      {div ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

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
              <li className="text-xl py-4 flex hover:scale-105 duration-300">
                <TbHome size={25} />
                <p className="px-4 border-b font-semibold uppercase">
                  {t("navbar.home")}
                </p>
              </li>
            </Link>
            <li
              onClick={() => setShowCategoryList(!showCategoryList)}
              size={25}
              className="text-xl cursor-pointer py-4 flex hover:scale-105 duration-300"
            >
              <MdCategory className="mr-4" />{" "}
              <p className=" border-b font-semibold uppercase ">
                {t("navbar.category")}
              </p>
            </li>
            {showCategoryList && (
              <li>
                <ul className=" text-gray-800 text-xl py-4 px-4">
                  {!!categories &&
                    categories.map((category, index) => (
                      <Link
                        to={`/category/${category.id}`}
                        onClick={() => setNav(!div)}
                        key={index + "uuire"}
                      >
                        <li className="cursor-pointer grap-2 flex hover:scale-105 duration-300 border-b">
                          <VscCircleSmall size={30} /> {category.name}
                        </li>
                      </Link>
                    ))}
                </ul>
              </li>
            )}
            <Link to="/panier" onClick={() => setNav(!div)} className="mr-4 ">
              <li className="text-xl py-4 flex hover:scale-105 duration-300">
                <FaWallet size={25} />
                <p className="px-4 font-semibold uppercase border-b">
                  {t("navbar.shoppingCart")}
                </p>
              </li>
            </Link>
            <Link
              to="/help"
              onClick={() => setNav(!div)}
              className="mr-4 cursor-pointer"
            >
              <li className="text-xl py-4 flex hover:scale-105 duration-300 ">
                <MdHelp size={25} className="mr-4 " />
                <p className=" font-semibold uppercase border-b">
                  {t("navbar.help")}
                </p>
              </li>
            </Link>
          </ul>
          <div className="absolute bottom-3 left-[20%]">
            <ul className="flex space-x-8 py-6 relative left-4">
              <li>
                <a href="https://www.instagram.com/">
                  <FaInstagram size={25} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <FaFacebook size={25} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <FaTwitter size={25} />
                </a>
              </li>
            </ul>
            <ul className="flex text-sm ">
              <li> © Inter ARNEIS 2022-2023</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
