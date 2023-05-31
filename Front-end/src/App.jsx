import "../src/App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import Category from "./page/Category"
import Home from "./page/Home"
import Contact from "./page/contact"
import Research from "./page/Research"
import Connexion from "./page/Connexion"
import Registration from "./page/Inscription"
import Product from "./page/Product"
import PasswordResetPage from "./page/Password"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/help" element={<Contact />} />
        <Route path="/Search" element={<Research />} />
        <Route path="/Singin" element={<Connexion />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/room" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/password" element={<PasswordResetPage />} />
      </Routes>
    </Router>
  )
}
export default App
