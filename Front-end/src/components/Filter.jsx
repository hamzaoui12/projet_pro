import React, { useEffect, useState } from "react"
import axios from "axios"

const Filter = ({
  close: closeModal,
  setFilters,
  filter,
  setMaterials,
  setCategories,
  materials,
  categories,
  setStart,
  P,
}) => {
  const [data, setData] = useState(null)
  const [dataCategories, setDataCategories] = useState(null)

  useEffect(() => {
    axios
      .get("http://localhost:3001/materials")
      .then((response) => setData(response.data.result))

    axios
      .get("http://localhost:3001/categories")
      .then((response) => setDataCategories(response.data.result))
  }, [])

  return (
    <div className="fixed z-10 w-screen inset-0 lg-hidden overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="bg-white rounded-lg z-20 p-8">
          <h2 className="text-2xl font-bold mb-4">Filter</h2>
          <div className=" border border-gray-200 rounded-lg p-4 m-4">
            <div className="flex justify-between items-center">
              <h3 className="text-gray-700 font-semibold">price</h3>
              <span className="text-gray-500 text-sm">in €</span>
            </div>
            <div className="mt-2">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="price-min"
              >
                Minimum price:
              </label>
              <input
                className="border border-gray-400 rounded-md py-1 px-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                type="number"
                id="price-min"
                onChange={(e) =>
                  setFilters((pre) => ({ ...pre, minPrice: e.target.value }))
                }
                name="price-max"
                placeholder="
                      Enter a minimum price"
              ></input>
            </div>

            <div className="mt-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="price-max"
              >
                Maximum price:
              </label>
              <input
                className="border border-gray-400 rounded-md py-1 px-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                onChange={(e) =>
                  setFilters((pre) => ({ ...pre, maxPrice: e.target.value }))
                }
                type="number"
                id="price-max"
                name="price-max"
                placeholder="Enter a maximum price"
              ></input>
            </div>
          </div>
          <div className=" border border-gray-200 rounded-lg p-4 m-4">
            <div className="flex justify-between items-center">
              <h3 className="text-gray-700 font-semibold">Sort</h3>
            </div>
            <div className="">
              <div className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  value="asc"
                  checked={filter.sort === "asc" ? true : false}
                  onChange={(e) =>
                    setFilters((pre) => ({ ...pre, sort: e.target.value }))
                  }
                  id="sortAsc"
                ></input>
                <label className=" capitalize cursor-pointer" htmlFor="sortAsc">
                  By increasing prices
                </label>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  value="desc"
                  onChange={(e) =>
                    setFilters((pre) => ({ ...pre, sort: e.target.value }))
                  }
                  id="sortDesc"
                  checked={filter.sort === "desc" ? true : false}
                ></input>
                <label
                  className=" capitalize cursor-pointer"
                  htmlFor="sortDesc"
                >
                  By decreasing prices
                </label>
              </div>
            </div>
          </div>
          <div className="m-4 flex items-center gap-2 border border-gray-200 rounded-lg p-4">
            <input
              checked={filter.isStock}
              type="checkbox"
              onChange={(e) =>
                setFilters((pre) => ({ ...pre, isStock: !filter.isStock }))
              }
              id="price-max"
              name="price-max"
              placeholder="Enter a maximum price"
            ></input>
            <label className=" text-gray-700 font-semibold">
              only avaiable in stock
            </label>
          </div>
          <div className=" border border-gray-200 rounded-lg p-4 m-4">
            <h3 className=" capitalize mb-1">materials</h3>
            {data &&
              data.map((e, i) => (
                <div
                  className="flex items-center gap-2"
                  key={e.name + i + "tt"}
                >
                  <input
                    type="checkbox"
                    id={e.name}
                    className=" cursor-pointer"
                    value={e.name}
                    checked={materials.includes(e.name) ? true : false}
                    onChange={(e) =>
                      setMaterials((pre) =>
                        pre.includes(e.target.value)
                          ? pre.filter((mat) => mat !== e.target.value)
                          : [...pre, e.target.value]
                      )
                    }
                  />
                  <label
                    className=" capitalize cursor-pointer"
                    htmlFor={e.name}
                  >
                    {e.name}
                  </label>
                </div>
              ))}
          </div>

          <div className=" border border-gray-200 rounded-lg p-4 m-4">
            <h3 className=" capitalize mb-1">categories</h3>
            {dataCategories &&
              dataCategories.map((e, i) => (
                <div
                  className="flex items-center gap-2"
                  key={e.name + i + "tt"}
                >
                  <input
                    type="checkbox"
                    id={e.name}
                    className=" cursor-pointer"
                    value={e.name}
                    checked={categories.includes(e.name) ? true : false}
                    onChange={(e) =>
                      setCategories((pre) =>
                        pre.includes(e.target.value)
                          ? pre.filter((mat) => mat !== e.target.value)
                          : [...pre, e.target.value]
                      )
                    }
                  />
                  <label
                    className=" capitalize cursor-pointer"
                    htmlFor={e.name}
                  >
                    {e.name}
                  </label>
                </div>
              ))}
          </div>

          <div className="flex justify-center gap-3 items-center">
            <button
              onClick={closeModal}
              className="bg-black hover:bg-gray-700 text-white  font-bold py-2 px-4 rounded"
            >
              Fermer
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
