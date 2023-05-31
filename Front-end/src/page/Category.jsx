import React, { useState } from "react"
import { data } from "../data/data.jsx"
import { BsPlus } from "react-icons/bs"
import Navbar from "../components/Navbar"
import { BrowserRouter as Router, Link } from "react-router-dom"
const allCategory = ["all", ...new Set(data.map((item) => item.category))]
const Category = ({ addToCart }) => {
  const [Kitchen, setLists] = useState(data)
  const [category, setCategory] = useState(allCategory)
  console.log(setCategory)
  const filterItems = (category) => {
    const newItems = data.filter((item) => item.category === category)
    setLists(newItems)
    if (category === "all") {
      setLists(data)
      return
    }
  }
  const handleAddToCart = (product) => {
    addToCart(product)
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-[1640px] mx-auto p-2">
        <div className="max-h-[500px] relative   ">
          {/* Overlay */}
          <div className="absolute w-full h-full rounded-xl text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              The <span className="text-orange-200">Best</span>
            </h1>
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              {" "}
              <span className="text-orange-200">Kitchen</span> Furniture
            </h1>
          </div>
          <img
            className="w-full max-h-[500px] object-cover rounded-xl"
            src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg"
            alt="/"
          />
        </div>
        <div className="max-w-[1640px] m-auto px-4 ">
          <h1 className="text-gray-900  font-bold text-4xl py-32 text-center">
            Discover Our Best Models
            <p className="text-gray-700  font-bold text-2xl py-12 text-center">
              The kitchen is a specific room in a building, especially equipped
              for the preparation of food and dishes. We have there usually
              running water and various household appliances (stove,
              oven,refrigerator...).
            </p>
          </h1>
          <h1 className="text-gray-900  font-bold text-3xl text-center ">
            Filter
          </h1>
          <div className="flex gap-6 justify-center py-6">
            {category.map((category) => (
              <button
                className="px-4 py-2 bg-black text-white rounded-full font-bold  hover:bg-orange-200"
                onClick={() => filterItems(category)}
                data-aos="zoom-out-down"
              >
                {category}
              </button>
            ))}
          </div>
          {/* Display foods */}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6   cursor-pointer">
            {" "}
            {Kitchen.map((item, index) => (
              <Link to="/product">
                <div
                  key={index}
                  className="border shadow-lg  hover:scale-105 duration-300  relative group"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[300px] W-[300px] object-cover p-2 "
                  />
                  <div className="absolute top-2 -right-2 opacity-0 group-hover:opacity-100 p-5 flex flex-col gap-y-2 transition-all duration-300">
                    <button onClick={() => handleAddToCart(item)}>
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
