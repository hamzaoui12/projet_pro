import React, { useState, useEFfect, useEffect } from "react"
import { data } from "../data/data.jsx"
import { BsPlus } from "react-icons/bs"
import axios from "axios"
import { orderStorage } from "../Storage/orerStorage.js"
import { BrowserRouter as Router, Link } from "react-router-dom"

const Category = ({ addToCart }) => {
  const [Kitchen] = useState(data)
  const [images, setImages] = useState()
  const handleAddToCart = (product) => {
    const data = JSON.parse(localStorage.getItem("storageOrder")) || []
    data.push(product)
    localStorage.setItem("storageOrder", JSON.stringify(data))
  }
  useEffect(() => {
    axios
      .get("http://localhost:3306/images")
      .then((response) => {
        setImages(response.data)
      })
      .catch((error) => {
        console.error("Error fetching image data:", error)
      })
  }, [])

  if (images && images.result) {
    return (
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
          {images.result.map((image) => (
            <img
              className="w-full max-h-[500px] object-cover rounded-xl"
              key={image.id}
              src={"http://127.0.0.1:3306/" + image.picture}
              alt={image.id}
            />
          ))}
        </div>
        <div className="max-w-[1640px] m-auto px-4 py-32">
          <h1 className="text-gray-900  font-bold text-4xl text-center">
            Discover Our Best Models
            <p className="text-gray-700  font-bold text-2xl py-12 text-center">
              The kitchen is a specific room in a building, especially equipped
              for the preparation of food and dishes. We have there usually
              running water and various household appliances (stove,
              oven,refrigerator...).
            </p>
          </h1>

          {/* Display foods */}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 py-32  cursor-pointer">
            {Kitchen.map((item, index) => (
              <div
                key={index}
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
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Category
