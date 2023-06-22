import React, { useEffect, useState } from "react"
import { BsPlus } from "react-icons/bs"
import Filter from "../components/Filter"
import { filteringFc } from "../components/utils/filteringFc"
import { useSearch } from "../context/Search"

const Research = ({ addToCart }) => {
  const { search } = useSearch()
  const [data, setData] = useState(null)
  const [materials, setMaterials] = useState([])
  const [categories, setCategories] = useState([])
  const [start, setStart] = useState(false)
  const [filter, setFilters] = useState({
    materials: [],
    categories: [],
    maxPrice: 99999999999,
    minPrice: 1,
    sort: "asc",
    isStock: false,
  })
  useEffect(() => {
    const fetchData = async () => {
      const response = await filteringFc(
        materials,
        categories,
        filter.maxPrice,
        filter.minPrice,
        filter.sort,
        search,
        filter.isStock
      )
      setData(response)
    }
    fetchData()
  }, [
    start,
    search,
    categories,
    filter.isStock,
    filter.maxPrice,
    filter.minPrice,
    filter.sort,
    materials,
  ])

  const [isOpen, setIsOpen] = useState(false)

  const handleAddToCart = (product) => {
    addToCart(product)
  }
  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div className="research" class="w-full ">
      <div class="flex justify-center items-center">
        {" "}
        <button
          class="text-black text-xl font-bold py-6 px-4 rounded flex  lg-hidden justify-center items-center"
          onClick={openModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
          <span>Filter</span>
        </button>
      </div>

      <div class="flex  max-w-[1640px] mx-auto py-12  ">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-auto p-3 gap-6 cursor-pointer">
          {data &&
            data.map((item, index) => (
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
        {isOpen && (
          <Filter
            close={closeModal}
            setMaterials={setMaterials}
            setCategories={setCategories}
            filter={filter}
            setFilters={setFilters}
            materials={materials}
            setStart={setStart}
            categories={categories}
          />
        )}
      </div>
    </div>
  )
}

export default research
