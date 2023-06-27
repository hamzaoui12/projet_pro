import React, { useContext, useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { CartContext } from "../contexts/CartContext.jsx"
import { Link } from "react-router-dom"
import { BsPlus } from "react-icons/bs"

import axios from "axios"

const ProductComponents = () => {
  const [data, setData] = useState(null)
  const { addToCart } = useContext(CartContext)
  const [slidesToShow, setSlidesToShow] = useState(3)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/products")

      setData(response.data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1000) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
  }

  return (
    <Slider {...sliderSettings}>
      {data &&
        data.slice(0, 10).map((item, index) => (
          <div key={index} className="relative group p-6">
            <Link to="/product">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full  W-[200px] object-cover duration-300 hover:scale-105"
              />
            </Link>

            <div className="absolute top-2 -right-2 opacity-0 group-hover:opacity-100 p-5 flex flex-col gap-y-2 transition-all duration-300">
              <button onClick={() => addToCart(item)}>
                <div className="flex justify-center rounded-full items-center hover:bg-gray-500 text-white w-12 h-12 bg-black">
                  <BsPlus className="text-3xl" />
                </div>
              </button>
            </div>
            <div className="flex justify-between px-2 py-6 font-bold text-lg">
              <p>{item.name}</p>
              <p>
                <span className="p-6">{item.price}</span>
              </p>
            </div>
          </div>
        ))}
    </Slider>
  )
}

export default ProductComponents
