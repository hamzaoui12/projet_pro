import React, { useState, useContext } from "react"
import { data } from "../data/data.jsx"
import { BsPlus } from "react-icons/bs"
import { TbHome } from "react-icons/tb"
import { FaWallet } from "react-icons/fa"
import { MdCategory, MdHelp } from "react-icons/md"
import { VscCircleSmall, VscAccount } from "react-icons/vsc"
import { BrowserRouter as Router, Link } from "react-router-dom"
import { CartContext } from "../contexts/CartContext.jsx"
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai"

const Research = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [Kitchen] = useState(data)

  const { addToCart } = useContext(CartContext)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div className="research" class="w-full ">
      <div class="flex justify-center items-center">
        {" "}
        <button class="text-black text-xl font-bold py-6 px-4 rounded flex  lg-hidden justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
          <span onClick={openModal}>Filter</span>
        </button>
      </div>

      <div class="flex  max-w-[1640px] mx-auto py-12  ">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-auto p-3 gap-6 cursor-pointer">
          {Kitchen.map((item, index) => (
            <div
              key={index}
              className="border shadow-lg  hover:scale-105 duration-300  relative group"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[300px] W-[300px] object-cover p-2"
              />
              <div className="absolute top-2 -right-2 opacity-0 group-hover:opacity-100 p-5 flex flex-col gap-y-2 transition-all duration-300">
                <button onClick={() => addToCart(item)}>
                  <div className="flex justify-center rounded-full items-center hover:bg-gray-500 text-white w-12 h-12 bg-black">
                    <BsPlus className="text-3xl" />
                  </div>
                </button>
              </div>
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{item.name}</p>
                <p>
                  <span className="bg-black text-white p-1 rounded-full">
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        {isOpen && (
          <div className="fixed z-10 w-screen inset-0 lg-hidden overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <div className="bg-white rounded-lg z-20 p-8">
                <h2 className="text-2xl font-bold mb-4">Filter</h2>
                <div class=" border border-gray-200 rounded-lg p-4 m-4">
                  <div class="flex justify-between items-center">
                    <h3 class="text-gray-700 font-semibold">price</h3>
                    <span class="text-gray-500 text-sm">in €</span>
                  </div>
                  <div class="mt-2">
                    <label
                      class="block text-gray-700 font-semibold mb-2"
                      for="price-min"
                    >
                      Minimum price:
                    </label>
                    <input
                      class="border border-gray-400 rounded-md py-1 px-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      type="number"
                      id="price-min"
                      name="price-min"
                      placeholder="
                      Enter a minimum price"
                    ></input>
                  </div>
                  <div class="mt-4">
                    <label
                      class="block text-gray-700 font-semibold mb-2"
                      for="price-max"
                    >
                      Maximum price:
                    </label>
                    <input
                      class="border border-gray-400 rounded-md py-1 px-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      type="number"
                      id="price-max"
                      name="price-max"
                      placeholder="Enter a maximum price"
                    ></input>
                  </div>
                </div>
                <div class=" border border-gray-200 rounded-lg p-4 m-4">
                  <div class="flex justify-between items-center">
                    <h3 class="text-gray-700 font-semibold">Sort</h3>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      id="material-2"
                      name="material-2"
                      class="form-checkbox h-4 w-4 text-green-600 rounded"
                    ></input>
                    <label for="material-2" class="ml-2 block text-gray-700">
                      By increasing prices
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      id="material-3"
                      name="material-3"
                      class="form-checkbox h-4 w-4 text-green-600 rounded"
                    ></input>
                    <label for="material-3" class="ml-2 block text-gray-700">
                      By decreasing prices
                    </label>
                  </div>
                </div>
                <div class=" border border-gray-200 rounded-lg p-4 m-4">
                  <div class="mt-2">
                    <label class="block text-gray-700 font-semibold mb-2">
                      Select materials:
                    </label>
                    <div class="space-y-2">
                      <div class="flex items-center">
                        <input
                          type="checkbox"
                          id="material-1"
                          name="material-1"
                          class="form-checkbox h-4 w-4 text-green-600 rounded"
                        ></input>
                        <label
                          for="material-1"
                          class="ml-2 block text-gray-700"
                        >
                          materials 1
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          type="checkbox"
                          id="material-2"
                          name="material-2"
                          class="form-checkbox h-4 w-4 text-green-600 rounded"
                        ></input>
                        <label
                          for="material-2"
                          class="ml-2 block text-gray-700"
                        >
                          materials 2
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          type="checkbox"
                          id="material-3"
                          name="material-3"
                          class="form-checkbox h-4 w-4 text-green-600 rounded"
                        ></input>
                        <label
                          for="material-3"
                          class="ml-2 block text-gray-700"
                        >
                          materials 3
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="mt-2">
                    <label class="block text-gray-700 font-semibold mb-2">
                      Stock
                    </label>
                    <div class="space-y-2">
                      <div class="flex items-center">
                        <input
                          type="checkbox"
                          id="material-1"
                          name="material-1"
                          class="form-checkbox h-4 w-4 text-green-600 rounded"
                        ></input>
                        <label
                          for="material-1"
                          class="ml-2 block text-gray-700"
                        >
                          In stock
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="mt-2">
                    <div class="flex items-center">
                      <label
                        for="date"
                        class="block text-gray-700 font-semibold mb-2 mr-2"
                      >
                        Date Added:
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        class="border border-gray-400 rounded py-2 px-4"
                      />
                    </div>
                  </div>
                  <div class="mt-2">
                    <label class="block text-gray-700 font-semibold mb-2">
                      Select categories:
                    </label>
                    <div class="space-y-2">
                      <div class="flex items-center">
                        <input
                          type="checkbox"
                          id="material-1"
                          name="material-1"
                          class="form-checkbox h-4 w-4 text-green-600 rounded"
                        ></input>
                        <label
                          for="material-1"
                          class="ml-2 block text-gray-700"
                        >
                          Kitchens
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          type="checkbox"
                          id="material-2"
                          name="material-2"
                          class="form-checkbox h-4 w-4 text-green-600 rounded"
                        ></input>
                        <label
                          for="material-2"
                          class="ml-2 block text-gray-700"
                        >
                          Bedrooms
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          type="checkbox"
                          id="material-3"
                          name="material-3"
                          class="form-checkbox h-4 w-4 text-green-600 rounded"
                        ></input>
                        <label
                          for="material-3"
                          class="ml-2 block text-gray-700"
                        >
                          Bathroom
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          type="checkbox"
                          id="material-3"
                          name="material-3"
                          class="form-checkbox h-4 w-4 text-green-600 rounded"
                        ></input>
                        <label
                          for="material-3"
                          class="ml-2 block text-gray-700"
                        >
                          Livingroom
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <button
                    onClick={closeModal}
                    className="bg-black hover:bg-gray-700 text-white  font-bold py-2 px-4 rounded"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Research
