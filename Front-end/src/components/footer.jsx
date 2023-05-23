import React from 'react';

const Footer = () => (
  <footer className="bg-black text-white">
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <h6 className="text-lg font-bold underline">CGU</h6>
          <ul className="text-sm">
            <li> © Inter ARNEIS Systems B.V 2022-2023</li>
          </ul>          
        </div>
        <div>
          <h3 className="text-lg font-bold underline">Mentions légales</h3>
          <ul className="text-sm">
            <li>Dénomination sociale : Meubles ARNEIS France S.A.S.</li>
            <li>Siège social : 425 rue Henri Barbusse 78370 PLAISIR</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold underline">Contact</h3>
          <p>Numéro de téléphone : <a href="tel:+123456789">+123456789</a></p>
          <p>Email : <a href="mailto:contact@example.com">contact@example.com</a></p>
        </div>
        <div>
          <h3 className="text-lg font-bold underline">Réseaux sociaux</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="https://www.instagram.com/">
                <img src="chemin_vers_icone_instagram.png" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <img src="chemin_vers_icone_facebook.png" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <img src="chemin_vers_icone_twitter.png" alt="Twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
