import "../src/App.css"
import Navbar from "./components/Navbar"
import Category from "./page/Category"
import CategoryComposant from "./components/CategoryComposant"

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Category />
      <CategoryComposant />
    </div>
  )
}
export default App
