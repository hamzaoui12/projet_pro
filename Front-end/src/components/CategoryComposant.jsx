import React, { useState } from "react"

const CategoryComposant = () => {
  const [div, setNav] = useState(false)
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-4 cursor-pointer gap-6">
      {/* Card */}
      <div className="rounded-xl relative hover:scale-105 duration-300">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-3xl px-2 pt-4 text-orange-200">
            Cuisine
          </p>
          <p className="px-2">Best Cuisine</p>
        </div>
        <img
          className="max-h-[160px] md:max-h-[500px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/6198663/pexels-photo-6198663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      {/* Card */}
      <div
        onClick={() => setNav(!div)}
        size={30}
        className="rounded-xl relative hover:scale-105 duration-300"
      >
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-3xl px-2 pt-4 text-orange-200">
            Chambre
          </p>
          <p className="px-2">Best room</p>
        </div>
        <img
          className="max-h-[160px] md:max-h-[500px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative hover:scale-105 duration-300">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-3xl px-2 pt-4 text-orange-200">
            Salle De Bain
          </p>
          <p className="px-2">Best chawroom</p>
        </div>
        <img
          className="max-h-[160px] md:max-h-[500px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative hover:scale-105 duration-300">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-3xl px-2 pt-4 text-orange-200">
            Espace Séjour
          </p>
          <p className="px-2">Best living-room</p>
        </div>
        <img
          className="max-h-[160px] md:max-h-[500px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
    </div>
  )
}

export default CategoryComposant
