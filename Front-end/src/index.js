import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import SidebarProvider from "./contexts/SidebarContext"
import CartProvider from "./contexts/CartContext"
ReactDOM.render(
  <SidebarProvider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </SidebarProvider>,
  document.getElementById("root")
)
