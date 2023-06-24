import axios from "axios"

export const filteringFc = async (
  materials = [],
  categories = [],
  maxPrice = 99999999999,
  minPrice = 1,
  sort = "asc",
  search = "",
  isStock = "",
  date = ""
) => {
  const response = await axios.get("http://localhost:3001/products", {
    params: {
      dateAdded: date,
      inStock: isStock,
      minPrice: minPrice,
      maxPrice: maxPrice,
      sortBy: sort,
      searchName: search,
    },
  })

  let data = response.data.result

  console.log(materials.length)

  if (materials.length) {
    data = data.filter((product) => {
      let isIt = false
      product.materials.filter((material) => {
        materials.includes(material.name) ? (isIt = true) : (isIt = false)
      })
      if (isIt) {
        return product
      }
    })
  }

  console.log(categories.length)

  if (categories.length) {
    data = data.filter((product) => {
      let isIt = false
      categories.includes(product.category.name)
        ? (isIt = true)
        : (isIt = false)

      if (isIt) {
        return product
      }
    })

    console.log("category", data)
  }

  return data
}
