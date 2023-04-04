import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4">
      <div className="flex items-center">
        <Link href="/">
          <a className="mr-4">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
          </a>
        </Link>
        <ul className="flex items-center">
          <li className="mr-4">
            <Link href="/">
              <a className="hover:text-gray-700">Accueil</a>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/produits">
              <a className="hover:text-gray-700">Produit</a>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/categories">
              <a className="hover:text-gray-700">Catégories</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <Link href="/panier">
          <a className="flex items-center hover:text-gray-700">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            Panier
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
