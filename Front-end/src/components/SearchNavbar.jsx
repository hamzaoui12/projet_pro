import { useEffect, useState } from "react"
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai"
import { FaWallet } from "react-icons/fa"
import { MdCategory, MdHelp } from "react-icons/md"
import { TbHome } from "react-icons/tb"
import { VscAccount, VscCircleSmall } from "react-icons/vsc"
import { Link } from "react-router-dom"
import { useSearch } from "../context/Search"
import axios from "axios"

const SearchNavbar = () => {
  const [div, setNav] = useState(false)
  const [cart, setCart] = useState([])
  const [item, setShowCart] = useState(false)
  const [showCategoryList, setShowCategoryList] = useState(false)
  const { search, setSearch } = useSearch()
  const [searchProduct, setSearchProduct] = useState("")
  const [categories, setCategories] = useState(null)
  // const handleAddToCart = (product) => {
  //   setCart([...cart, product])
  //   setShowCart(true)
  // }
  useEffect(() => {
    axios
      .get(`http://localhost:3001/categories`)
      .then((res) => res.data)
      .then((data) => setCategories(data.result))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(searchProduct)
    }, 1300)
    return () => clearTimeout(timer)
  }, [searchProduct, setSearch])

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between shadow-lg items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setNav(!div)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-3xl sm:text-4xl  hidden md:flex lg:text-4xl ">
          <span className="">Λｉｒｎｅｉｓ</span>
        </h1>
      </div>

      <nav className="navbar">
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
          <AiOutlineSearch size={25} />
          <input
            className="bg-transparent p-2 w-full focus:outline-none"
            value={searchProduct}
            type="text"
            placeholder="Best Furniture"
            onChange={(e) => setSearchProduct(e.target.value)}
          />
        </div>
      </nav>
      <div className="text-black md:flex flex items-center  gap-4 cursor-pointer">
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
        <h2 className="text-2xl p-4">Λｉｒｎｅｉｓ</h2>
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
              <MdCategory className="mr-4" /> Category
            </li>
            {showCategoryList && (
              <li>
                {/* Liste de clics */}
                <ul className=" text-gray-800 text-xl py-4 px-4">
                  {!!categories &&
                    categories.map((category, index) => (
                      <Link
                        to={`/category/${category.id}`}
                        onClick={() => setNav(!div)}
                        key={index + "uuire"}
                      >
                        <li className=" cursor-pointer items-center grap-2 flex text-[14px]">
                          <VscCircleSmall size={30} /> {category.name}
                        </li>
                      </Link>
                    ))}
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

export default SearchNavbar
