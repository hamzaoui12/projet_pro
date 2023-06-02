import React, { useState } from "react"
import { data } from "../data/data.jsx"
import { BsPlus } from "react-icons/bs"

const ProductPage = ({ addToCart }) => {
  const [images] = useState({})
  const [activeImg, setActiveImage] = useState(images.img1)
  const [Kitchen] = useState(data)
  const [amount, setAmount] = useState(1)
  const [totalPrice, setTotalPrice] = useState(199)

  const handleAddToCart = (product) => {
    addToCart(product)
  }
  const handleIncreaseAmount = () => {
    setAmount((prev) => prev + 1)
    setTotalPrice((prevPrice) => prevPrice + 199)
  }

  const handleDecreaseAmount = () => {
    if (amount > 1) {
      setAmount((prev) => prev - 1)
      setTotalPrice((prevPrice) => prevPrice - 199)
    }
  }

  return (
    <div>
      {" "}
      <div className="max-w-[1640px] mx-auto  p-2">
        <div className="max-h-[500px] relative hidden md:flex ">
          {/* Overlay */}
          <div className="absolute w-full h-full rounded-xl text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
            <h1 className="px-4   md:text-6xl lg:text-7xl font-bold">
              The <span className="text-orange-200">Best</span>
            </h1>
            <h1 className="px-4  md:text-6xl lg:text-7xl font-bold">
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
        <div className="flex flex-col justify-between lg:flex-row p-6 lg:p-24 gap-6 lg:gap-16 lg:items-center">
          <div className="flex flex-col gap-6 lg:w-2/4">
            <img
              src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-full aspect-square object-cover rounded-xl"
            />
            <div className="flex flex-row justify-between h-12 sm:h-24">
              <img
                src="https://images.pexels.com/photos/6198663/pexels-photo-6198663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-12 sm:w-24 h-12 sm:h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img1)}
              />
              <img
                src="https://images.pexels.com/photos/6198663/pexels-photo-6198663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-12 sm:w-24 h-12 sm:h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img2)}
              />
              <img
                src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-12 sm:w-24 h-12 sm:h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img3)}
              />
              <img
                src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-12 sm:w-24 h-12 sm:h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img4)}
              />
            </div>
          </div>
          {/* ABOUT */}
          <div className="flex flex-col gap-4 lg:w-2/4">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                BUREAU JARVIS
              </h1>
              <span className="text-orange-200 font-semibold">En stock</span>
            </div>
            <p className="text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              numquam voluptate quod vitae excepturi odio obcaecati?
              Sitlaudantium id dignissimos necessitatibus autem obcaecati non,
              praesentium debitis. Rem officia veniam consectetur. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Excepturi porro eos
              iste blanditiis autem tempore ullam, numquam reiciendis, mollitia
              commodi nobis error! Blanditiis, voluptatem tempore. Et,
              cupiditate. A, libero alias?
            </p>
            <h6 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              $ {totalPrice.toFixed(2)}
            </h6>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-12">
              <div className="flex flex-row items-center">
                <button
                  className="bg-orange-200 py-2 px-5 rounded-lg text-white text-xl sm:text-3xl"
                  onClick={handleDecreaseAmount}
                >
                  -
                </button>
                <span className="py-2 px-4 rounded-lg text-xl sm:text-3xl">
                  {amount}
                </span>
                <button
                  className="bg-orange-200 py-2 px-4 rounded-lg text-white text-xl sm:text-3xl"
                  onClick={handleIncreaseAmount}
                >
                  +
                </button>
              </div>

              <button
                className="bg-black text-white font-semibold py-3 px-8 sm:px-16 rounded-xl h-full"
                onClick={() =>
                  handleAddToCart({ name: "BUREAU JARVIS", price: "$199.00" })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>{" "}
        {/* Similar Products */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold p-6 ">
          Similar Products
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-auto p-3 gap-6 cursor-pointer">
          {Kitchen.slice(0, 6).map((item, index) => (
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

export default ProductPage
