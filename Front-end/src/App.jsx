import "../src/App.css"
import Research from "./page/Research"
import Connexion from "./page/Connexion"
import Footer from "./components/footer"

const App = () => {
  return (
    <div className="app">
      <Research />
      <Connexion/>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
export default App;
