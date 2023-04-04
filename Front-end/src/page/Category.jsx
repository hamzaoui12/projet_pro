import React from "react"
import Link from "next/link"

const categories = [
  {
    id: 1,
    name: "Chambre",
    description: "Tous les meubles pour la chambre",
    image: "/images/Pictures/Chambre.jpg",
    products: [
      {
        id: 1,
        name: "Lit",
        price: "500€",
        image: "/images/Categories/chambre/adulte/Lit_double/IMG_6994_2.jpg",
      },
      {
        id: 2,
        name: "Armoire",
        price: "300€",
        image: "/images/Categories/chambre/adulte/Armoire/IMG_2017_2.jpg",
      },
      {
        id: 3,
        name: "Commodes",
        price: "150€",
        image: "/images/Categories/chambre/adulte/Commode/IMG_7006_2.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Cuisine",
    description: "Tous les meubles pour la cuisine",
    image: "/images/Pictures/Cuisine.jpg",
    products: [
      {
        id: 1,
        name: "Bar",
        price: "200€",
        image: "/images/Categories/Cuisine/Bar/IMG_6963_2.jpg",
      },
      {
        id: 2,
        name: "cellier",
        price: "50€",
        image: "/images/Categories/Cuisine/cellier/IMG_6983_2.jpg",
      },
      {
        id: 3,
        name: "chaise",
        price: "350€",
        image: "/images/Categories/Cuisine/Chaise_haute/IMG_6973_2.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Salon",
    description: "Tous les meubles pour le salon",
    image: "/images/Pictures/Salon.jpg",
    products: [
      {
        id: 1,
        name: "Canapé",
        price: "800€",
        image: "/images/Categories/Salon/Canape/IMG_6880_2.jpg",
      },
      {
        id: 2,
        name: "Fauteuils",
        price: "150€",
        image: "/images/Categories/Salon/Fauteuil/IMG_6945_2.jpg",
      },
      {
        id: 3,
        name: "Table basse",
        price: "100€",
        image: "/images/Categories/Salon/Table_basse/IMG_6885_2.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Salle de bain",
    description: "Tous les meubles pour la salle de bain",
    image: "/images/Pictures/salle-de-bain.jpg",
    products: [
      {
        id: 1,
        name: "Meuble lavabo",
        price: "250€",
        image: "/images/Categories/Salle_de_bain/Meuble_lavabo/IMG_7046_2.jpg",
      },
      {
        id: 2,
        name: "etagere murale",
        price: "50€",
        image: "/images/Categories/Salle_de_bain/Etagere_murale/IMG_7051_2.jpg",
      },
      {
        id: 3,
        name: "Vasque",
        price: "100€",
        image: "/images/Categories/Salle_de_bain/Vasque/IMG_7042_2.jpg",
      },
    ],
  },
]

const CategoryPage = ({ category }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">{category.name}</h1>
      <img className="mb-4" src={category.image} alt={category.name} />
      <p className="mb-4">{category.description}</p>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols
-3 lg:grid-cols-3 gap-4"
      >
        {category.products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="px-4 py-2">
              <p className="text-lg font-bold mb-2">{product.name}</p>
              <p className="text-gray-700">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <Link href="/">
        <a className="block mt-4 text-indigo-600 hover:text-indigo-800">
          Retour à la page d'accueil
        </a>
      </Link>
    </div>
  )
}
export async function getStaticPaths() {
  const paths = categories.map((category) => ({
    params: { id: category.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const id = parseInt(params.id)
  const category = categories.find((category) => category.id === id)

  return { props: { category } }
}

export default CategoryPage
