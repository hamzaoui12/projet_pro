import React, { useState } from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"

const CategoryComposant = () => {
  const [div, setNav] = useState(false)
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-4 cursor-pointer gap-6">
      <div className="rounded-xl relative hover:scale-105 duration-300">
        <Link
          to="/room"
          onClick={() => setNav(!div)}
          size={30}
          className="rounded-xl relative hover:scale-105 duration-300"
        >
          {" "}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-3xl px-2 pt-4 text-orange-200">
              Kitchen
            </p>
            <p className="px-2">Best Kitchen</p>
          </div>
          <img
            className="max-h-[160px] md:max-h-[500px] w-full object-cover rounded-xl"
            src="https://images.pexels.com/photos/6198663/pexels-photo-6198663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
          />
        </Link>
      </div>

      <div>
        <Link
          to="/room"
          onClick={() => setNav(!div)}
          size={30}
          className="rounded-xl relative hover:scale-105 duration-300"
        >
          {" "}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-3xl px-2 pt-4 text-orange-200">Room</p>
            <p className="px-2">Best Room</p>
          </div>
          <img
            className="max-h-[160px] md:max-h-[500px] w-full object-cover rounded-xl"
            src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
          />
        </Link>
      </div>

      <div>
        {" "}
        <Link
          to="/room"
          onClick={() => setNav(!div)}
          size={30}
          className="rounded-xl relative hover:scale-105 duration-300"
        >
          {" "}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-3xl px-2 pt-4 text-orange-200">
              Chawroom
            </p>
            <p className="px-2">Best chawroom</p>
          </div>
          <img
            className="max-h-[160px] md:max-h-[500px] w-full object-cover rounded-xl"
            src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
          />
        </Link>
      </div>
      <div>
        <Link
          to="/room"
          onClick={() => setNav(!div)}
          size={30}
          className="rounded-xl relative hover:scale-105 duration-300"
        >
          {" "}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-3xl px-2 pt-4 text-orange-200">
              Living-room
            </p>
            <p className="px-2">Best living-room</p>
          </div>
          <img
            className="max-h-[160px] md:max-h-[500px] w-full object-cover rounded-xl"
            src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
          />
        </Link>
      </div>
    </div>
  )
}

export default CategoryComposant
