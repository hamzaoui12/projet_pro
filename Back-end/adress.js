const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('my-address-api', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// define le model pour les adresses
class Address extends Model {}
Address.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  region: {
    type: DataTypes.STRING,
    allowNull: false
  },
  postalCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'address' });

// sync des modeles avec la db
(async () => {
  await sequelize.sync({ force: true });
  console.log('All models were synchronized successfully.');
})();

const app = express();

// configure body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// definir les routes
app.get('/addresses', async (req, res) => {
  try {
    const addresses = await Address.findAll();
    res.send(addresses);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/addresses', async (req, res) => {
  try {
    const address = await Address.create(req.body);
    res.send(address);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/addresses/:id', async (req, res) => {
  try {
    const address = await Address.findOne({ where: { id: req.params.id } });
    res.send(address);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put('/addresses/:id', async (req, res) => {
  try {
    await Address.update(req.body, { where: { id: req.params.id } });
    const address = await Address.findOne({ where: { id: req.params.id } });
    res.send(address);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete('/addresses/:id', async (req, res) => {
  try {
    const address = await Address.findOne({ where: { id: req.params.id } });
    await Address.destroy({ where: { id: req.params.id } });
    res.send(address);
  } catch (err) {
    res.status(500).send(err);
  }
});

//lancer le back
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
