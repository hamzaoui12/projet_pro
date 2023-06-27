import React from "react"
import CarouselComponent from "../components/Carousel"
import CategoryComposant from "../components/CategoryComposant"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
import axios from "axios"
import ProductComponents from "../components/ProductComponents"

const Home = () => {
  const { t } = useTranslation()
  const [homeImagesCategories, setHomeImagesCategories] = useState([])

  useEffect(() => {
    const fetchHomeCategories = async () => {
      const allImages = []

      await axios
        .get(`${process.env.REACT_APP_URL_ROUTE}/categories`)
        .then((categories) => {
          const homeCategories = categories.data.result.filter(
            (category) => category.main_page !== 0
          )
          homeCategories.forEach((category) =>
            allImages.push(category.image)
          )
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
          ) : (
            <div />
          )}
        </div>
        <div className="absolute left-0 top-1/2 transform -translate-y(-1/2 text-left pl-8">
          <h1 className="text-white text-6xl font-bold">
            {t("home.title")}
            <span className="text-[#FED7AA]">HIGHLANDERS</span>{" "}
            {t("home.title2")} <br />
            <span className="text-[#FED7AA]">{t("home.title3")}</span>
          </h1>
          <p className="text-white text-lg mt-12">
            {t("home.subtitle")}
            <br />
            {t("home.subtitle2")}
          </p>
          <div className="mt-6">
            <a
              href="./page/product"
              className="justify-center inline-block px-4 py-4 text-white text-lg font-semibold bg-white bg-opacity-25 border-white border-2 hover:bg-grid-200 rounded-lg mt-4"
            >
              {t("home.cta")}
            </a>
          </div>
        </div>
      </div>
      <h1 className="text-center mt-20 text-4xl font-bold">
        {t("highlands.title")}
        <span className="text-[#FED7AA]"> {t("highlands.title2")}</span>
        {t("highlands.title3")}{" "}
        <span className="text-[#FED7AA]">{t("highlands.title4")}</span>
      </h1>
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold mb-4">{t("highlands.subtitle")}</h2>
        <p className="text-lg leading-relaxed">{t("highlands.content")}</p>

        <img
          src="https://images.pexels.com/photos/39003/scotland-united-kingdom-england-isle-of-skye-39003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Highland Cliffs"
          className="h-96 w-full mt-6 rounded-xl"
        />
        <p className="text-lg leading-relaxed mt-6">
          {t("highlands.content2")}
        </p>
      </div>
      <div>
        <h1 className="text-center text-4xl font-bold">
          {t("Category.title")}
        </h1>
        <CategoryComposant />
      </div>
      <div>
        <h1 className="text-center text-4xl font-bold">{t("Product.title")}</h1>
        <ProductComponents />
      </div>
    </div>
  )
}

export default Home
