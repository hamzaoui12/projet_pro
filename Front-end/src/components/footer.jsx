import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom"; 

const Footer = () => (
  <footer className="hidden md:block bg-black text-white">
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <h6 className="text-lg font-bold underline mb-2">CGU</h6>
          <ul className="text-sm">
            <li> © Inter ARNEIS Systems B.V 2022-2023</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold underline mb-2">Mentions légales</h3>
          <ul className="text-sm">
            <li>Dénomination sociale : Meubles ARNEIS France S.A.S.</li>
            <li>Siège social : 425 rue Henri Barbusse 78370 PLAISIR</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold underline mb-2">
            Contact
          </h3>
          <p>
            Numéro de téléphone : <a href="tel:+123456789">+123456789</a>
          </p>
          <p>
            Email : <a href="mailto:contact@example.com">contact@example.com</a>
          </p>
          <p>
          <Link to="/help">Contact</Link> 
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold underline mb-2">Réseaux sociaux</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="https://www.instagram.com/">
                <FaInstagram size={24} color="white" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <FaFacebook size={24} color="white" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <FaTwitter size={24} color="white" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
