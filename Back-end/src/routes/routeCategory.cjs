const express = require("express")
const CategoryModel = require("./models/CategoryModel") // Import du modèle de données Category

const app = express()
const port = 3000

app.use(express.json())

// Route pour récupérer toutes les catégories
app.get("/categories", async (req, res) => {
  const categories = await CategoryModel.query() // Récupération de toutes les catégories avec Objection.js
  res.json(categories)
})

// Route pour récupérer une catégorie par son ID
app.get("/categories/:id", async (req, res) => {
  const categoryId = req.params.id
  const category = await CategoryModel.query().findById(categoryId) // Récupération de la catégorie avec l'ID spécifié avec Objection.js
  if (!category) {
    res.status(404).json({ error: "Category not found" })
  } else {
    res.json(category)
  }
})

// Route pour créer une nouvelle catégorie
app.post("/categories", async (req, res) => {
  const newCategory = req.body // Le corps de la requête contient les données de la nouvelle catégorie à créer
  const category = await CategoryModel.query().insert(newCategory) // Création de la nouvelle catégorie avec Objection.js
  res.json(category)
})

// Route pour mettre à jour une catégorie existante
app.put("/categories/:id", async (req, res) => {
  const categoryId = req.params.id
  const updatedCategory = req.body // Le corps de la requête contient les données mises à jour de la catégorie
  const category = await CategoryModel.query().findById(categoryId) // Récupération de la catégorie avec l'ID spécifié avec Objection.js
  if (!category) {
    res.status(404).json({ error: "Category not found" })
  } else {
    const updated = await category.$query().update(updatedCategory) // Mise à jour de la catégorie avec Objection.js
    res.json(updated)
  }
})

// Route pour supprimer une catégorie existante
app.delete("/categories/:id", async (req, res) => {
  const categoryId = req.params.id
  const category = await CategoryModel.query().findById(categoryId) // Récupération de la catégorie avec l'ID spécifié avec Objection.js
  if (!category) {
    res.status(404).json({ error: "Category not found" })
  } else {
    const deleted = await category.$query().delete() // Suppression de la catégorie avec Objection.js
    res.json(deleted)
  }
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
