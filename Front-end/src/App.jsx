import "../src/App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/footer"

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
export default App
