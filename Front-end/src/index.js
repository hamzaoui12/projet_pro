import React from "react"
import App from "./App"
import SidebarProvider from "./contexts/SidebarContext"
import CartProvider from "./contexts/CartContext"
import { I18nextProvider } from "react-i18next"
import { createRoot } from "react-dom/client"
import i18n from "./i18n"

const root = createRoot(document.getElementById("root"))
root.render(
  <I18nextProvider i18n={i18n}>
    <SidebarProvider>
      <CartProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </CartProvider>
    </SidebarProvider>
  </I18nextProvider>
)
