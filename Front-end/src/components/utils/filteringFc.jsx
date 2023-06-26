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
  const response = await axios.get(`${process.env.REACT_APP_URL_ROUTE}/products`, {
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

  if (materials.length) {
    data = data.filter((product) =>
      product.materials.some((material) => materials.includes(material.name))
    )
  }

  if (categories.length) {
    data = data.filter((product) => categories.includes(product.category.name))
  }

  return data
}
