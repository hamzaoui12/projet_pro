import "../src/App.css"
import Research from "./page/Research"

import Footer from "./components/footer"

const App = () => {
  return (
    <div className="app">
      <Research />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
export default App;
