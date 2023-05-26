import "../src/App.css"
import Navbar from "./components/Navbar"
import Category from "./page/Category"
import Product from "./page/Product"
import CarouselComponent from "./components/Carousel"
import Registration from "./page/Inscription"

import Footer from "./components/footer"

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Category />
      <Product />
      <Registration/>
      <CarouselComponent images={[]} duration={1000} className="h-12 l-12" />
     
    </div>
  )
}
export default App
