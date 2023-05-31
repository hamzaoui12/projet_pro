import "../src/App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import Category from "./page/Category"
import Home from "./page/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </Router>
  )
}
export default App
