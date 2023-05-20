import "../src/App.css"
import Navbar from "./components/Navbar"
import Category from "./page/Category"
import CarouselComponent from "./components/Carousel"
import ValidateForm from "./page/validation_form"

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Category />
      <CarouselComponent images={[]} duration={1000} className="h-12 l-12" />
      <ValidateForm/>
    </div>
  )
}
export default App
