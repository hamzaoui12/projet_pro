import React, { useState, useEFfect, useEffect, useContext } from "react"
import { data } from "../data/data.jsx"
import { BsPlus } from "react-icons/bs"
import { orderStorage } from "../Storage/orerStorage.js"
import { BrowserRouter as Router, Link } from "react-router-dom"
import { CartContext } from "../contexts/CartContext.jsx"
import { useTranslation } from "react-i18next"
const Category = () => {
  const { t } = useTranslation()
  const [Kitchen] = useState(data)
  const { addToCart } = useContext(CartContext)
  const handleAddToCart = (product) => {
    const data = JSON.parse(localStorage.getItem("storageOrder")) || []
    data.push(product)
    localStorage.setItem("storageOrder", JSON.stringify(data))
  }

  return (
    <div className="max-w-[1640px] mx-auto p-2">
      <div className="max-h-[500px] relative   ">
        {/* Overlay */}
        <div className="absolute w-full h-full rounded-xl text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            {t("category.best")}
            <span className="text-orange-200">{t("category.best2")}</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            {" "}
            <span className="text-orange-200">
              {t("category.kitchen")}
            </span>{" "}
            {t("category.furniture")}
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover rounded-xl"
          src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg"
          alt="/"
        />
      </div>
      <div className="max-w-[1640px] m-auto px-4 py-32">
        <h1 className="text-gray-900  font-bold text-4xl text-center">
          {t("category.discoverModels")}
          <p className="text-gray-700  font-bold text-2xl py-12 text-center">
            {t("category.description")}
          </p>
        </h1>

        {/* Display foods */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 py-32  cursor-pointer">
          {Kitchen.map((item, id) => (
            <div
              key={id}
              className="border shadow-lg  hover:scale-105 duration-300  relative group"
            >
              <Link to="/product">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[300px] W-[300px] object-cover p-2 "
                />
              </Link>
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
                    {item.price} $
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Category
