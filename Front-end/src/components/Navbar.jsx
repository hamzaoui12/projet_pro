import React, { useState } from "react"
import { ImHome } from "react-icons/im"
import { AiFillDelete } from "react-icons/ai"
import { AiOutlineMenuUnfold } from "react-icons/ai"
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/service" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/" },
  ]

  return (
    <div className="shadow-md w-full fixed top-0 left-0 ">
      <div className="lg:flex items-center justify-between  bg-yellow-700 py-4 lg:px-10 px-10">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800">
          <span className="text-3xl ">
            <ImHome />
          </span>
        </div>
        <div
          onclick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-5 cursor-pointer lg:hidden"
        >
          {open ? <AiFillDelete /> : <AiOutlineMenuUnfold />}
        </div>
        <ul
          className={
            "lg:flex md:items-center md:pb-3 pb-12 absolute lg-static bg-yellow-700  lg:z-auto z-[-1] right-8 w-fulllg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-18 opacity-100 : 'top-[-490] lg:opacity-100 opacity-0'}"
          }
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="lg:ml-12 lg:my-0 my-7 text-xl cursor-pointer hover:border-b-2 duration-500 hover:text-gray-700"
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
;<div></div>
