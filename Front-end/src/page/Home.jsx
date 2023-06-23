import React from "react"
import CarouselComponent from "../components/Carousel"
import CategoryComposant from "../components/CategoryComposant"
import { useEffect, useState } from "react"
import axios from "axios"

const Home = () => {
  const [homeImagesCategories, setHomeImagesCategories] = useState([])

  useEffect(() => {
    const fetchHomeCategories = async () => {
      const allImages = []

      await axios.get(`${process.env.REACT_APP_ROUTE}/categories`).then((categories) => {
        const homeCategories = categories.data.result.filter((category) => category.main_page !== 0)
        homeCategories.forEach((category) => allImages.push(category.images[0].picture))
      })

      return setHomeImagesCategories(allImages)
    }
    fetchHomeCategories()

    return
  }, [])

  return (
    <div>
      <div className="h-screen bg-black flex flex-col justify-center items-center relative">
        <div className="h-full w-full filter brightness-50">
          {homeImagesCategories[0] !== undefined ? (
          <CarouselComponent
            images={homeImagesCategories}
            slideDuration={5000}
          />
          ): (<div />)}
        </div>
        <div className="absolute left-0 top-1/2 transform -translate-y(-1/2 text-left pl-8">
          <h1 className="text-white text-6xl font-bold">
            THE <span className="text-[#FED7AA]">HIGHLANDERS</span> OF THE{" "}
            <br />
            <span className="text-[#FED7AA]">MOMENT</span>
          </h1>
          <p className="text-white text-lg mt-12">
            On Best Furniture you will find a multitude ,
            <br />
            of furniture choices to bring your home up to date .
          </p>
          <div className="mt-6">
            <a
              href="./page/product"
              className="justify-center inline-block px-4 py-4 text-white text-lg font-semibold bg-white bg-opacity-25 border-white border-2 hover:bg-grid-200 rounded-lg mt-4"
            >
              Take advantage of all our current offers, here!
            </a>
          </div>
        </div>
      </div>
      <h1 className="text-center mt-20 text-4xl font-bold">
        FROM THE HIGHLANDS<span className="text-[#FED7AA]"> OF SCOTLAND</span>,
        OUR FURNITURE <span className="text-[#FED7AA]">IS IMMORTAL</span>
      </h1>
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold mb-4">
          The timeless elegance of the Highlands
        </h2>
        <p className="text-lg leading-relaxed">
          Discover our collection of furniture inspired by the majestic Hautes
          Lands of Scotland. Each piece is meticulously crafted to combine
          beauty and sustainability, reflecting the very essence of this
          mythical region.
        </p>

        <img
          src="https://images.pexels.com/photos/39003/scotland-united-kingdom-england-isle-of-skye-39003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Highland Cliffs"
          className="h-96 w-full mt-6 rounded-xl"
        />
        <p className="text-lg leading-relaxed mt-6">
          Find high quality bedroom, kitchen and bathroom furniture on our
          e-commerce site. From the cozy bed to the functional kitchen and
          elegant bathroom furniture, create practical and aesthetic spaces for
          every room in your home.
        </p>
      </div>
      <div>
        <h1 className="text-center text-4xl font-bold">OUR PRODUCTS</h1>
        <CategoryComposant />
      </div>
    </div>
  )
}

export default Home
