import "../src/App.css"
import Navbar from "./components/Navbar"
import Category from "./page/Category"
import Product from "./page/Product"
import CarouselComponent from "./components/Carousel"
import CategoryComposant from "./components/CategoryComposant"
import Connexion from "./page/Connexion"

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Category />
      <Product />
      <CarouselComponent images={[]} duration={1000} className="h-12 l-12" />
      <CategoryComposant />
      <Connexion />
    </div>
  )
}
export default App
