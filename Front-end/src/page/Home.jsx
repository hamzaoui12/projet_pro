import React from "react"
import CarouselComponent from "../components/Carousel"
import CategoryComposant from "../components/CategoryComposant"
import { useTranslation } from "react-i18next"

const Home = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className="h-screen bg-black flex flex-col justify-center items-center relative">
        <div className="h-full w-full filter brightness-50">
          <CarouselComponent
            images={[
              "https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              "https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              "https://images.pexels.com/photos/7031883/pexels-photo-7031883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              "https://images.pexels.com/photos/8135105/pexels-photo-8135105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            ]}
            slideDuration={2000}
          />
        </div>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-left pl-8">
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
          {t("products.title")}
        </h1>
        <CategoryComposant />
      </div>
    </div>
  )
}

export default Home
