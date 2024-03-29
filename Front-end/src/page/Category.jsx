import React, { useState, useEffect, useContext } from "react"
import { BsPlus } from "react-icons/bs"
import { Link, useParams } from "react-router-dom"
import { CartContext } from "../contexts/CartContext.jsx"
import Paginator from "../components/Paginator.jsx"
import paginateProducts from "../components/utils/pagination.jsx"
import getOneRequest from "../components/utils/getOneRequest.jsx"
import getAllRequest from "../components/utils/getAllRequest.jsx"

const Category = () => {
  const [paginatedData, setPaginatedData] = useState(null)
  const [page, setPage] = useState(1)
  const { id } = useParams()
  const { addToCart } = useContext(CartContext)
  const [categories, setCategories] = useState(null)
  const [NomCategories, setNomCategorie] = useState("")

  useEffect(() => {
    getOneRequest("categories", id)
      .then((res) => {
        const data = paginateProducts(res.data.result, page)
        setPaginatedData(data)
      })
      .catch((err) => console.log(err.message))
  }, [page, id])
  useEffect(() => {
    getAllRequest("categories")
      .then((res) => res.data)
      .then((data) => setCategories(data.result))
  }, [])

  useEffect(() => {
    if (Number(id) === 21) {
      setNomCategorie("Chambre adultes")
    } else if (Number(id) === 22) {
      setNomCategorie("Cuisine")
    } else if (Number(id) === 24) {
      setNomCategorie("Chambre Enfant")
    } else if (Number(id) === 23) {
      setNomCategorie("Salle de bain")
    } else if (Number(id) === 25) {
      setNomCategorie("Salon")
    }
  }, [id])

  return (
    <div>
      <div className="max-w-[1640px] m-auto px-4 ">
        {categories &&
          categories
            .filter((elm) => elm.name === NomCategories)
            .map((category, index) => (
              <div className="max-h-[500px] relative" key={index}>
                <div className="absolute w-full h-full  text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
                  <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                    <span className="text-orange-200">Meilleur </span>
                    <span className="text-waith">{category.name}</span>
                  </h1>
                  <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                    <span className="text-orange-200"></span> Furniture
                  </h1>
                </div>

                <img
                  className="w-full max-h-[500px] object-full "
                  src={category.image}
                  alt={category.name}
                />
                <h1 className="text-gray-900  font-bold text-4xl py-32 text-center">
                  Découvrez nos meilleurs modèles
                  <p className="text-gray-700  font-bold text-2xl  py-12 text-center">
                    {category.description}
                  </p>
                </h1>
              </div>
            ))}

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-24 py-96  cursor-pointer">
          {!!paginatedData &&
            paginatedData.paginatedProducts.map((item, index) => (
              <div key={index} className="relative group p-6">
                <Link to="/product">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-full duration-300  hover:scale-105"
                  />
                </Link>
                <div className="absolute top-2 -right-2 opacity-0 group-hover:opacity-100 p-5 flex flex-col gap-y-2 transition-all duration-300">
                  <button onClick={() => addToCart(item)}>
                    <div className="flex justify-center rounded-full items-center hover:bg-gray-500 text-white w-12 h-12 bg-black">
                      <BsPlus className="text-3xl" />
                    </div>
                  </button>
                </div>
                <div className="flex justify-between px-2 py-6 font-bold  border-t text-lg">
                  <p className="">{item.name}</p>
                  <p>
                    <span className=" p-6">{item.price}€</span>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-center pb-6">
        {paginatedData && paginatedData.totalPages > 1 && (
          <Paginator pagination={paginatedData} setPage={setPage} />
        )}
      </div>
    </div>
  )
}

export default Category
