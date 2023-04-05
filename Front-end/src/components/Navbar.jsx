import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto flex items-center justify-between py-4">
        <img
          className="h-8 w-8"
          src="https://example.com/logo.png"
          alt="Logo"
        />
        <img
          className="h-8 w-8"
          src="https://example.com/cart-icon.png"
          alt="Cart icon"
        />
        <ul className="flex">
          <li className="mr-6">
            <a className="text-white hover:text-gray-400" href="/">
              Accueil
            </a>
          </li>
          <li className="mr-6">
            <a className="text-white hover:text-gray-400" href="/cart">
              Panier
            </a>
          </li>
          <li className="mr-6">
            <a className="text-white hover:text-gray-400" href="/products">
              Produit
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-400" href="/categories">
              Catégories
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
