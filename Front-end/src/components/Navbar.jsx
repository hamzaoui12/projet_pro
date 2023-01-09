import React from "react";
import "../style/Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [showLinks, setShowlinks] = useState(false);

  const handleShowLinks = () => {
    setShowlinks(!showLinks);
  };
  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
      <div className="avbar_logo">Logo</div>
      <lu className="navbar_links">
        <li className="navbar_item">
          <a href="/" className="navbar_link">
            Accueil
          </a>
        </li>
        <li className="navbar_item">
          <a href="/" className="navbar_link">
            produit
          </a>
        </li>
        <li className="navbar_item">
          <a href="/" className="navbar_link">
            connexion
          </a>
        </li>
        <li className="navbar_item">
          <a href="/" className="navbar_link">
            category
          </a>
        </li>
      </lu>
      <ul className="navbar_icons">
        <li className="navbar_action">
          <a href="/" className="navbar_icone">
            panier
          </a>
        </li>
        <li className="navbar_action">
          <a href="/" className="navbar_icone">
            recherche
          </a>
        </li>
      </ul>
      <button className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;
