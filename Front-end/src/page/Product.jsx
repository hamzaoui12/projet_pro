import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { BrowserRouter as Router, Link } from "react-router-dom"
import axios from "axios"
import CarouselComponent from "./../components/Carousel.jsx"

const ProductPage = ({ addToCart }, props) => {
  const { id } = useParams()
  const productId = id
  const [materials, setMaterials] = useState([])
  const [images, setImages] = useState([])
  const [product, setProduct] = useState(null)
  const [product_filtered, setProductFiltered] = useState(null)
  const [amount, setAmount] = useState(1)
  const [totalPrice, setTotalPrice] = useState(199)

  console.log("id produit")
  console.log(productId)

  const handleAddToCart = (product) => {
    addToCart(product)
  }
  const handleIncreaseAmount = () => {
    setAmount((prev) => prev + 1)
    setTotalPrice((prevPrice) => prevPrice + 199)
  }

  const handleDecreaseAmount = () => {
    if (amount > 1) {
      setAmount((prev) => prev - 1)
      setTotalPrice((prevPrice) => prevPrice - 199)
    }
  }
  

  useEffect(() => {
    fetchProductData()
    fetchCategoryData()
  }, [productId])
  

  const fetchProductData = async () => {
    try {
      await axios.get(
        `${process.env.REACT_APP_URL_ROUTE}/products/${productId}`
      ) 
      .then((response) => {
        setProduct(response.data.result)
        console.log("Product")
        console.log(response.data.result)
        setImages(response.data.result.images)     
        setMaterials(response.data.result.materials)
      })      
    } catch (error) {
      console.log("Error fetching product data:", error)
    }
  }

  const fetchCategoryData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL_ROUTE}/products`)
  
      const allProducts = response.data.result
      const filteredProducts = allProducts.filter(product => product.category_id === 23)
      
      setProductFiltered(filteredProducts)      
    } catch (error) {
      console.log("Error fetching product data:", error)
    }
  } 
  

  if (!product) {
    return <div>Chargement...</div>
  }

  return (
    <div>
      <div className="max-w-[1640px] mx-auto  p-2">
        <div className="max-h-[500px] relative hidden md:flex ">
          {/* Overlay */}
          <div className="absolute w-full h-full rounded-xl text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
            <h1 className="px-4   md:text-6xl lg:text-7xl font-bold">
              The <span className="text-orange-200">Best</span>
            </h1>
            <h1 className="px-4  md:text-6xl lg:text-7xl font-bold">
              {" "}
              <span className="text-orange-200">Kitchen</span> Furniture
            </h1>
          </div>
          <img
            className="w-full max-h-[500px] object-cover rounded-xl"
            src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg"
            alt="/"
          />
        </div>
        <div className=" flex flex-col justify-between lg:flex-row p-6 lg:p-24 gap-6 lg:gap-16 lg:items-center">
          <div className="bg-black w-96 h-96 rounded-xl">
            <CarouselComponent images={images.map((image) => `${image.picture}`)} slideDuration={3000} />
          </div>          
          <div className="flex flex-col gap-4  lg:w-2/4">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                {product.name}
              </h1>
              <span className="text-orange-200 font-semibold">
                {product.stock}
              </span>
            </div>
            <p className="text-gray-700">{product.description}</p>
            {materials.length > 0 && (
              <div className="text-gray-700">
                <h1>Matériaux :</h1>
                <ul>
                  {materials.map((material, index) => (
                    <li key={index}>{material.name}</li>
                  ))}
                </ul>
              </div>
            )}
            {materials.length === 0 && (
              <div className="text-gray-700">
                <h1>Matériaux : Aucun matériaux</h1>
              </div>
            )}
            <h6 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              $ {product.price}
            </h6>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-12">
              <div className="flex flex-row items-center">
                <button
                  className="bg-orange-200 py-2 px-5 rounded-lg text-white text-xl sm:text-3xl"
                  onClick={handleDecreaseAmount}
                >
                  -
                </button>
                <span className="py-2 px-4 rounded-lg text-xl sm:text-3xl">
                  {amount}
                </span>
                <button
                  className="bg-orange-200 py-2 px-4 rounded-lg text-white text-xl sm:text-3xl"
                  onClick={handleIncreaseAmount}
                >
                  +
                </button>
              </div>

              <button
                className="bg-black text-white font-semibold py-3 px-8 sm:px-16 rounded-xl h-full"
                onClick={() =>
                  handleAddToCart({ name: "{product.name}", price: "{product.price}" })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold p-6 ">
          Produits similaires
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-auto p-3 gap-6 cursor-pointer">
            {product_filtered && product_filtered.map((item) => (
              <div
                key={item.id}
                className="border shadow-lg hover:scale-105 duration-300 relative group"
              >
                <Link to={`/product/${item.id}`}>
                  <h1>{item.name}</h1>
                  {item.images.length > 0 && (
                    <img
                      src={"http://localhost:3306/" + item.images[0].picture}
                      alt={item.name}
                      className="w-full h-[300px] W-[300px] object-cover p-2"
                    />
                  )}
                </Link>
                <div className="absolute top-2 -right-2 opacity-0 group-hover:opacity-100 p-5 flex flex-col gap-y-2 transition-all duration-300">
                  <button onClick={() => handleAddToCart(item)}>
                    <div className="flex justify-center rounded-full items-center hover:bg-gray-500 text-white w-12 h-12 bg-black">
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default ProductPage
