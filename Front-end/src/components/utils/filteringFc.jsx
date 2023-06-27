import axios from "axios"
import paginateProducts from "./pagination"

export const filteringFc = async (
  materials = [],
  categories = [],
  maxPrice = 99999999999,
  minPrice = 1,
  sort = "asc",
  search = "",
  isStock = "",
  page
) => {
  const response = await axios.get("http://localhost:3001/products", {
    params: {
      inStock: isStock,
      minPrice: minPrice,
      maxPrice: maxPrice,
      material: materials,
      categories: categories,
      sortBy: sort,
      searchName: search,
      page: page.toString(),
    },
  })

  let data = response.data
  const materialData = materials
  const categoriesData = categories

  if (materialData.length) {
    data = data.filter((product) =>
      product.materials.some((material) => materialData.includes(material.name))
    )
  }

  if (categoriesData.length) {
    data = data.filter((product) =>
      categoriesData.includes(product.category.name)
    )
  }

  const result = paginateProducts(data, page)

  return result
}
