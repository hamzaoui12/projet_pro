import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import SidebarProvider from "./contexts/SidebarContext"
import CartProvider from "./contexts/CartContext"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
