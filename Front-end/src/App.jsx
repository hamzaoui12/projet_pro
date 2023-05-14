import "../src/App.css"
import Navbar from "./components/Navbar"
import Inscription from "./page/Inscription"

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <Inscription />
    </div>
  )
}
export default App
