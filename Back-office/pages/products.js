import React, { useEffect, useState } from "react"
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Card,
  Button,
} from "@tremor/react"
import axios from "axios"

const Products = () => {
  const [UserInput, setUserInput] = useState({})
  const [PopupVisible, setPopupVisible] = useState(false)
  const [Selected, setSelected] = useState({})

  const [Processing, setProcessing] = useState(false)
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    ;(async () => {
      let { data } = await axios.get("http://localhost:3001/admin/products")

      setProducts(data.result)

      let { data: cateogryData } = await axios.get(
        "http://localhost:3001/admin/getCateogries"
      )

      setCategories(cateogryData.result)
    })()
  }, [Processing])

  return (
    <>
      <div className="p-4 md:p-10 mx-auto max-w-7xl">
        <Title>Products</Title>
        <div className="flex flex-row w-full items-center justify-between">
          <Text>Search wth the magic of AI powered by App Ambient.</Text>
          <div
            onClick={() => {
              setPopupVisible(true)
            }}
            className="bg-gray-200 px-3 rounded-md py-[6px] text-sm font-semibold cursor-pointer hover:bg-purple-300 transition-all duration-300"
          >
            Add New
          </div>
        </div>

        <Card className="mt-6 overflow-y-scroll h-[65vh]">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Product Name</TableHeaderCell>
                <TableHeaderCell>Stock</TableHeaderCell>
                <TableHeaderCell>Price</TableHeaderCell>
                <TableHeaderCell>Category</TableHeaderCell>
                <TableHeaderCell>Action</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={Math.random}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>
                    <Text>{product.stock}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>${product.price}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{product.category?.name}</Text>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-row items-center gap-x-3">
                      <Button
                        onClick={() => {
                          setPopupVisible(true)
                          setSelected(product)
                          setUserInput(product)
                        }}
                        className="transition-all duration-300"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={async () => {
                          setProcessing(true)
                          await axios.delete(
                            `http://localhost:3001/admin/product/${product.id}`
                          )
                          setProcessing(false)
                        }}
                        className="bg-red-600 hover:border-red-700 border-red-600 hover:bg-red-700 transition-all duration-300"
                      >
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
      {PopupVisible && (
        <div className="absolute h-full bg-[#0006] top-0 left-0 bottom-0 right-0 flex items-center justify-center">
          <div className="mx-auto mt-10 bg-gray-200 w-[60vw] px-5 py-4 rounded-2xl drop-shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
            <form
              onSubmit={async (e) => {
                e.preventDefault()
                setProcessing(true)

                setPopupVisible(false)

                try {
                  if (Selected && Selected.id) {
                    let { data } = await axios.patch(
                      `http://localhost:3001/admin/product/${Selected.id}`,
                      {
                        ...UserInput,
                      }
                    )

                    console.log(data)
                  } else {
                    let { data } = await axios.put(
                      `http://localhost:3001/admin/product/`,
                      {
                        ...UserInput,
                      }
                    )

                    console.log(data)
                  }
                } catch (er) {
                  console.log(er)
                }

                setUserInput({})
                setSelected(null)

                setProcessing(false)
              }}
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border border-gray-300 px-4 py-2 rounded w-full max-w-[400px]"
                  value={UserInput.name}
                  onChange={(e) =>
                    setUserInput({ ...UserInput, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1 "
                >
                  Description:
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="border border-gray-300 px-4 py-2 rounded w-full max-w-[700px] text-sm text-gray-600"
                  rows={4}
                  value={UserInput.description}
                  onChange={(e) =>
                    setUserInput({ ...UserInput, description: e.target.value })
                  }
                  required
                ></textarea>
              </div>
              <div className=" flex flex-row w-full items-center justify-start gap-x-4">
                <div className="mb-4 ">
                  <label
                    htmlFor="stock"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Stock:
                  </label>
                  <input
                    type="number"
                    id="stock"
                    name="stock"
                    className="border border-gray-300 px-4 py-2 rounded w-[100px]"
                    value={UserInput.stock}
                    onChange={(e) =>
                      setUserInput({ ...UserInput, stock: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Price:
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    step="0.01"
                    className="border border-gray-300 px-4 py-2 rounded w-[100px]"
                    value={UserInput.price}
                    onChange={(e) =>
                      setUserInput({ ...UserInput, price: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Category:
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="border border-gray-300 px-4 py-2 rounded w-full"
                    value={UserInput.category_id}
                    onChange={(e) =>
                      setUserInput({
                        ...UserInput,
                        category_id: e.target.value,
                      })
                    }
                    required
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    setPopupVisible(false)
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Products
