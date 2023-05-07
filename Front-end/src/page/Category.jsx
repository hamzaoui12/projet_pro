import React, { useState } from "react"
import { data } from "../data/data.jsx"

const Category = () => {
  //   console.log(data);
  const [Kitchen] = useState(data)

  return (
    <div className="max-w-[1640px] mx-auto p-2">
      <div className="max-h-[500px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-200">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            {" "}
            <span className="text-orange-200">Kitchen</span> Furniture
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg"
          alt="/"
        />
      </div>
      <div className="max-w-[1640px] m-auto px-4 py-32">
        <h1 className="text-gray-900  font-bold text-4xl text-center">
          Discover Our Best Models
          <p className="text-gray-700  font-bold text-2xl py-12 text-center">
            La cuisine est une pièce spécifique dans un bâtiment, spécialement
            équipée pour la préparation des aliments et des plats. On y dispose
            généralement de l'eau courante et divers appareils électroménagers
            (cuisinière, four, réfrigérateur...).
          </p>
        </h1>

        {/* Display foods */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-32  cursor-pointer">
          {Kitchen.map((item, index) => (
            <div
              key={index}
              className="border shadow-lg  hover:scale-105 duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[300px] l-[300px]object-cover "
              />
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

export default Category
