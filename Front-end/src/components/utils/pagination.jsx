export default function paginateProducts(products, currentPage) {
  const pageSize = 12
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const paginatedProducts = products.slice(startIndex, endIndex)
  const totalPages = Math.ceil(products.length / pageSize)

  return {
    paginatedProducts,
    totalPages,
    currentPage,
  }
}
