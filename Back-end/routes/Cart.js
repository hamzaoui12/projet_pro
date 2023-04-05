const express = require('express');
const app = express();
app.use(express.json());

let cartItems = [];

app.get('/cart', (req, res) => {
  res.json(cartItems);
});

app.post('/cart', (req, res) => {
  const newItem = req.body;
  cartItems.push(newItem);
  res.status(201).json(newItem);
});

app.put('/cart/:id', (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  cartItems.forEach((item, index) => {
    if (item.id === itemId) {
      cartItems[index] = updatedItem;
    }
  });
  res.json(updatedItem);
});

app.delete('/cart/:id', (req, res) => {
  const itemId = req.params.id;
  cartItems = cartItems.filter((item) => item.id !== itemId);
  res.sendStatus(204);
});

app.listen(3000, () => {
  console.log('Cart API listening on port 3000!');
});
