const CategoryModel = require("../models/CategoryModel.cjs")

const knex = require("knex")
const BaseModel = require("../models/BaseModel.cjs")
const config = require("../config.js")
const MaterialModel = require("../models/MaterialModel.cjs")
const ProductModel = require("../models/ProductModel.cjs")

const seed = async () => {
  const db = knex(config.db)
  BaseModel.knex(db)
  await db("categories").del()
  await db("materials").del()
  await db("products").del()

  const base_stock = 10

  const categories = [
    {
      name: "Chambre pour adultes",
      products: [
        {
          name: "Armoire pour adulte",
          description: "Une très jolie armoire pour adulte",
          stock: base_stock,
          price: 800,
        },
        {
          name: "Bureau pour adulte",
          description: "Un très joli bureau pour adulte",
          stock: base_stock,
          price: 700,
        },
        {
          name: "Chaise pour adulte",
          description: "Une très jolie chaise pour adulte",
          stock: base_stock,
          price: 150,
        },
        {
          name: "Coiffeuse pour adulte",
          description: "Une très jolie coiffeuse pour adulte",
          stock: base_stock,
          price: 450,
        },
        {
          name: "Commode pour adulte",
          description: "Une très jolie commode",
          stock: base_stock,
          price: 400,
        },
        {
          name: "Etagère pour adulte",
          description: "Une très jolie étagère pour adulte",
          stock: base_stock,
          price: 300,
        },
        {
          name: "Lit double pour adulte",
          description: "",
          stock: base_stock,
          price: 600,
        },
      ],
    },
    {
      name: "Chambre pour Enfant",
      products: [
        {
          name: "Armoire pour enfant",
          description: "Une très jolie armoire pour enfant",
          stock: base_stock,
          price: 400,
        },
        {
          name: "Bureau pour enfant",
          description: "Un très joli bureau pour enfant",
          stock: base_stock,
          price: 250,
        },
        {
          name: "Commode pour enfant",
          description: "Une très jolie commode",
          stock: base_stock,
          price: 300,
        },
        {
          name: "Lit pour enfant",
          description: "Un très joli lit pour enfant",
          stock: base_stock,
          price: 400,
        },
      ],
    },
    {
      name: "Cuisine",
      products: [
        {
          name: "Bar",
          description: "Un très joli bar",
          stock: base_stock,
          price: 2500,
        },
        {
          name: "Cellier",
          description: "Un très joli ellier",
          stock: base_stock,
          price: 1100,
        },
        {
          name: "Chaise haute",
          description: "Une très jolie chaise haute",
          stock: base_stock,
          price: 200,
        },
        {
          name: "Placard vaisselle",
          description: "Un très joli placard à vaisselle",
          stock: base_stock,
          price: 550,
        },
        {
          name: "Placard coulissant",
          description: "Un très joli placard coulissant",
          stock: base_stock,
          price: 450,
        },
        {
          name: "Tiroir couvert",
          description: "Un très joli tiroir couvert",
          stock: base_stock,
          price: 150,
        },
      ],
    },
    {
      name: "Salle de bain",
      products: [
        {
          name: "Etagère murale",
          description: "Une très jolie étagère murale",
          stock: base_stock,
          price: 145,
        },
        {
          name: "Meuble lavabo",
          description: "Un très joli meuble lavabo",
          stock: base_stock,
          price: 300,
        },
        {
          name: "meuble à serviettes",
          description: "Un très joli meuble à serviettes",
          stock: base_stock,
          price: 220,
        },
        {
          name: "Vasque",
          description: "Un très joli vasque",
          stock: base_stock,
          price: 300,
        },
      ],
    },
    {
      name: "Salon",
      products: [
        {
          name: "Bibliothèque",
          description: "Une très jolie bibliothèque",
          stock: base_stock,
          price: 650,
        },
        {
          name: "Canapé",
          description: "Un très joli canapé",
          stock: base_stock,
          price: 2500,
        },
        {
          name: "Chaise",
          description: "Une très jolie chaise",
          stock: base_stock,
          price: 150,
        },
        {
          name: "Fauteuil",
          description: "Un très joli fauteuil",
          stock: base_stock,
          price: 1400,
        },
        {
          name: "Meuble pour télévision",
          description: "Un très joli meuble pour télévision",
          stock: base_stock,
          price: 1600,
        },
        {
          name: "Table",
          description: "Une très jolie table",
          stock: base_stock,
          price: 700,
        },
        {
          name: "Table basse",
          description: "Une très jolie table basse",
          stock: base_stock,
          price: 500,
        },
      ],
    },
  ]

  await CategoryModel.query().insertGraph(categories)
  const materials = [
    {
      name: "bois",
    },
    {
      name: "acier",
    },
    {
      name: "plastique",
    },
    {
      name: "céramique",
    },
  ]

  await MaterialModel.query().insertGraph(materials)
  const productsNameWood = [
    "Armoire pour adulte",
    "Bureau pour adulte",
    "Coiffeuse pour adulte",
    "Commode pour adulte",
    "Etagère pour adulte",
    "Lit double pour adulte",
    "Armoire pour enfant",
    "Bureau pour enfant",
    "Commode pour enfant",
    "Lit pour enfant",
    "Bar",
    "Cellier",
    "Placard coulissant",
    "Tiroir ouvert",
    "Etagère murale",
    "Meuble lavabo",
    "meuble à serviettes",
    "Vasque",
    "Bibliothèque",
    "Meuble pour télévision",
    "Table",
    "Table basse",
  ]
  const productsNameSteel = [
    [
      "Armoire pour adulte",
      "Chaise pour adulte",
      "Coiffeuse pour adulte",
      "Commode pour adulte",
      "Lit double pour adulte",
      "Commode pour enfant",
      "Lit pour enfant",
      "Bar",
      "Cellier",
      "Placard coulissant",
    ],
  ]
  const productsNamePlastic = [["Chaise haute"]]
  const productsNameCeramic = [["Vasque"]]
  const materialWood = await MaterialModel.query().findOne({ name: "bois" })
  const productsWood = await ProductModel.query().whereIn(
    "name",
    productsNameWood
  )
  for (const product of productsWood) {
    await materialWood.$relatedQuery("products").relate(product.id)
  }
  const materialSteel = await MaterialModel.query().findOne({ name: "acier" })
  const productsNameSteelFlat = productsNameSteel.flat()
  const productsSteel = await ProductModel.query().whereIn(
    "name",
    productsNameSteelFlat
  )
  for (const product of productsSteel) {
    await materialSteel.$relatedQuery("products").relate(product.id)
  }
  const materialPlastic = await MaterialModel.query().findOne({
    name: "plastique",
  })
  const productsPlastic = await ProductModel.query().whereIn(
    "name",
    productsNamePlastic
  )
  for (const product of productsPlastic) {
    await materialPlastic.$relatedQuery("products").relate(product.id)
  }
  const materialCeramic = await MaterialModel.query().findOne({
    name: "céramique",
  })
  const productsCeramic = await ProductModel.query().whereIn(
    "name",
    productsNameCeramic
  )
  for (const product of productsCeramic) {
    await materialCeramic.$relatedQuery("products").relate(product.id)
  }
}

seed()
