import "../src/App.css"
import Navbar from "./components/Navbar"
import Category from "./page/Category"
import Product from "./page/Product"
import CarouselComponent from "./components/Carousel"


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Category />
      <Product />
      <Inscription/>
      <CarouselComponent images={[]} duration={1000} className="h-12 l-12" />
      <ValidateForm/>
    </div>
  )
}
export default App
