import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-orange-100 shadow">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <a
              className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
              href="#"
            >
              Mon Site E-commerce
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
              onClick={handleMenuClick}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`md:flex items-center ${menuOpen ? "block" : "hidden"}`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            <a
              className="my-1 text-gray-700 hover:text-blue-500 md:mx-4 md:my-0"
              href="#"
            >
              Accueil
            </a>
            <a
              className="my-1 text-gray-700 hover:text-blue-500 md:mx-4 md:my-0"
              href="#"
            >
              Produits
            </a>
            <a
              className="my-1 text-gray-700 hover:text-blue-500 md:mx-4 md:my-0"
              href="#"
            >
              Catégories
            </a>
            <a
              className="my-1 text-gray-700 hover:text-blue-500 md:mx-4 md:my-0"
              href="#"
            >
              Panier
            </a>
          </div>

          <div className="flex items-center">
            <button
              className=" text-gray-700 rounded-full  focus:outline-none  transition duration-150 ease-in-out"
              aria-label="Cart"
            >
              <span className="sr-only">View cart</span>
              <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
