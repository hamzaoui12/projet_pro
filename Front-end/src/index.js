import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { I18nextProvider } from "react-i18next"
import i18n from "./i18n"

import SidebarProvider from "./contexts/SidebarContext"
import CartProvider from "./contexts/CartContext"

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <SidebarProvider>
      <CartProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </CartProvider>
    </SidebarProvider>
  </I18nextProvider>,
  document.getElementById("root")
)
