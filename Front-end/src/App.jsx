import "../src/App.css"
import Research from "./page/Research"
import Connexion from "./page/Connexion"
import Footer from "./components/footer"
import PaymentForm from "./page/données_de_paiement"

const App = () => {
  return (
    <div className="app">
      <PaymentForm />
      <Research />
      <Connexion />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
export default App
