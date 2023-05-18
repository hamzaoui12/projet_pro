const express = require('express');
const ProductModel = require('./models/ProductModels'); // Import du modèle de données Product
import config from "../config"

const app = express();

// Route pour récupérer tous les produits
app.get('/products', async (req, res) => {
  const products = await ProductModel.query(); // Récupération de tous les produits avec Objection.js
  res.json(products);
});

// Route pour récupérer un produit par son ID
app.get('/products/:id', async (req, res) => {
  const productId = req.params.id;
  const product = await ProductModel.query().findById(productId); // Récupération du produit avec l'ID spécifié avec Objection.js
  if (!product) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    res.json(product);
  }
});

// Route pour créer un nouveau produit
app.post('/products', async (req, res) => {
  const newProduct = req.body; // Le corps de la requête contient les données du nouveau produit à créer
  const product = await ProductModel.query().insert(newProduct); // Création du nouveau produit avec Objection.js
  res.json(product);
});

// Route pour mettre à jour un produit existant
app.put('/products/:id', async (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body; // Le corps de la requête contient les données mises à jour du produit
  const product = await ProductModel.query().findById(productId); // Récupération du produit avec l'ID spécifié avec Objection.js
  if (!product) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    const updated = await product.$query().update(updatedProduct); // Mise à jour du produit avec Objection.js
    res.json(updated);
  }
});

// Route pour supprimer un produit existant
app.delete('/products/:id', async (req, res) => {
  const productId = req.params.id;
  const product = await ProductModel.query().findById(productId); // Récupération du produit avec l'ID spécifié avec Objection.js
  if (!product) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    const deleted = await product.$query().delete(); // Suppression du produit avec Objection.js
    res.json(deleted);
  }
});
