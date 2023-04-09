const express = require("express")
const HomeModel = require("./models/HomeModel") // Import du modèle de données Home

const app = express()
const port = 3000

app.use(express.json())

// Route pour récupérer toutes les maisons
app.get("/homes", async (req, res) => {
  const homes = await HomeModel.query() // Récupération de toutes les maisons avec Objection.js
  res.json(homes)
})

// Route pour récupérer une maison par son ID
app.get("/homes/:id", async (req, res) => {
  const homeId = req.params.id
  const home = await HomeModel.query().findById(homeId) // Récupération de la maison avec l'ID spécifié avec Objection.js
  if (!home) {
    res.status(404).json({ error: "Home not found" })
  } else {
    res.json(home)
  }
})

// Route pour créer une nouvelle maison
app.post("/homes", async (req, res) => {
  const newHome = req.body // Le corps de la requête contient les données de la nouvelle maison à créer
  const home = await HomeModel.query().insert(newHome) // Création de la nouvelle maison avec Objection.js
  res.json(home)
})

// Route pour mettre à jour une maison existante
app.put("/homes/:id", async (req, res) => {
  const homeId = req.params.id
  const updatedHome = req.body // Le corps de la requête contient les données mises à jour de la maison
  const home = await HomeModel.query().findById(homeId) // Récupération de la maison avec l'ID spécifié avec Objection.js
  if (!home) {
    res.status(404).json({ error: "Home not found" })
  } else {
    const updated = await home.$query().update(updatedHome) // Mise à jour de la maison avec Objection.js
    res.json(updated)
  }
})

// Route pour supprimer une maison existante
app.delete("/homes/:id", async (req, res) => {
  const homeId = req.params.id
  const home = await HomeModel.query().findById(homeId) // Récupération de la maison avec l'ID spécifié avec Objection.js
  if (!home) {
    res.status(404).json({ error: "Home not found" })
  } else {
    const deleted = await home.$query().delete() // Suppression de la maison avec Objection.js
    res.json(deleted)
  }
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
