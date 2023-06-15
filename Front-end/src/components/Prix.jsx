import React, { useState } from "react"

function PrixTotal({ produits, panier }) {
  const [totalProduits, setTotalProduits] = useState(0)
  const [totalPanier, setTotalPanier] = useState(0)

  const calculerTotalProduits = () => {
    let somme = 0
    produits.forEach(produit => {
      if (produit.selectionne) {
        somme += produit.prix
      }
    })
    setTotalProduits(somme)
  }

  const calculerTotalPanier = () => {
    let somme = 0
    panier.forEach(item => {
      somme += item.quantite * item.prix
    })
    setTotalPanier(somme)
  }

  return (
    <div>
      <button onClick={calculerTotalProduits}>Calculer le total des produits</button>
      <p>Prix total des produits : {totalProduits} €</p>

      <button onClick={calculerTotalPanier}>Calculer le total du panier</button>
      <p>Prix total du panier : {totalPanier} €</p>
    </div>
  )
}

export default PrixTotal
