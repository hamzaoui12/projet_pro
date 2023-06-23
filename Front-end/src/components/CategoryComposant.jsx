import axios from "axios"
import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"

const CategoryComposant = () => {
  const [categories, setCategories] = useState(null)
  const [div, setNav] = useState(false)
  useEffect(() => {
    axios
      .get(`http://localhost:3001/categories`)
      .then((res) => res.data)
      .then((data) => setCategories(data.result))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="max-w-[1640px] mx-auto p-4  grid md:grid-cols-5 cursor-pointer gap-4">
      {categories &&
        categories.map((category, index) => (
          <div
            className="rounded-xl relative hover:scale-105 duration-300"
            key={index + "id"}
          >
            <Link
              to={`/category/${category.id}`}
              onClick={() => setNav(!div)}
              size={30}
              className="rounded-xl relative hover:scale-105 duration-300"
            >
              {" "}
              <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-3xl px-2 pt-4 text-orange-200">
                  {category.name}
                </p>
                <p className="px-2"></p>
              </div>
              <img
                className="max-h-[200px] h-full md:max-h-[500px] w-full object-cover rounded-xl"
                src={category.image}
                alt="/"
              />
            </Link>
          </div>
        ))}
    </div>
  )
}

export default CategoryComposant
