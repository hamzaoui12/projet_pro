import React, { useState, useEffect } from "react";
import "../style/Navbar.css";

const Navbar = () => {
  const [toggleMenu, setTogleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNavSmallScreen = () => {
    setTogleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || largeur > 500) && (
        <ul className="liste">
          <li className="items">Acceuil</li>
          <li className="items">Poduit</li>
          <li className="items">Panier</li>
        </ul>
      )}

      <button onClick={toggleNavSmallScreen} className="btn">
        BTN
      </button>
    </nav>
  );
};

export default Navbar;
