import "../src/App.css"
import Category from "./page/Category"
import Home from "./page/Home"
import Contact from "./page/contact"
import Research from "./page/Research"
import Connexion from "./page/Connexion"
import Registration from "./page/Inscription"
import Product from "./page/Product"
import Panier from "./page/Panier"
import PasswordResetPage from "./page/Password"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Stripe from "./components/Stripe"
import PaymentForm from "./page/Checkout"
import Thankyou from "./page/thankyou"
import Sidebar from "./components/Sidebar"
import Orders from "./page/Orders"
import ValidateForm from "./page/validation_form"

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/category/:id"
          element={
            <Layout>
              <Category />
            </Layout>
          }
        />
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/thankyou"
          element={
            <Layout>
              <Thankyou />
            </Layout>
          }
        />
        <Route
          path="/checkout"
          element={
            <Layout>
              <PaymentForm />
            </Layout>
          }
        />
        <Route
          path="/payment"
          element={
            <Layout>
              <Stripe />
            </Layout>
          }
        />
        <Route
          path="/validationfrom"
          element={
            <Layout>
              <ValidateForm />
            </Layout>
          }
        />
        <Route
          path="/help"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/Search"
          element={
            <Layout>
              <Research />
            </Layout>
          }
        />
        <Route
          path="/Singin"
          element={
            <Layout>
              <Connexion />
            </Layout>
          }
        />
        <Route
          path="/registration"
          element={
            <Layout>
              <Registration />
            </Layout>
          }
        />
        <Route
          path="/room"
          element={
            <Layout>
              <Category />
            </Layout>
          }
        />
        <Route
          path="/product"
          element={
            <Layout>
              <Product />
            </Layout>
          }
        />
        <Route
          path="/panier"
          element={
            <Layout>
              <Panier />
            </Layout>
          }
        />
        <Route
          path="/password"
          element={
            <Layout>
              <PasswordResetPage />
            </Layout>
          }
        />
        <Route
          path="/orders"
          element={
            <Layout>
              <Orders />
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}
export default App
