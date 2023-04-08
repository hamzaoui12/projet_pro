const express = require('express');
const ProductModel = require('./models/ProductModels'); // Import du modèle de données Product

const app = express();

   app.get('/materials/:id', async (req, res) => {
    const material = await knex('materials').where('id', req.params.id).first();
    if (!material) {
      return res.status(404).json({ error: 'Material not found' });
    }
    res.json(material);
  });
  
  app.post('/materials', async (req, res) => {
    const material = {
      name: req.body.name
    };
    const id = await knex('materials').insert(material, 'id');
    material.id = id[0];
    res.json(material);
  });
  
  app.put('/materials/:id', async (req, res) => {
    const material = await knex('materials').where('id', req.params.id).first();
    if (!material) {
      return res.status(404).json({ error: 'Material not found' });
    }
    await knex('materials').where('id', req.params.id).update(req.body);
    res.json({ message: 'Material updated' });
  });
  
  app.delete('/materials/:id', async (req, res) => {
    const material = await knex('materials').where('id', req.params.id).first();
    if (!material) {
      return res.status(404).json({ error: 'Material not found' });
    }
    await knex('materials').where('id', req.params.id).delete();
    res.json({ message: 'Material deleted' });
  });
  
  