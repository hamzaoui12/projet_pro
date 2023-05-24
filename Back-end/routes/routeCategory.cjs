const Category = require("../models/CategoryModel.cjs")
const Product = require("../models/ProductModel.cjs")
const routeCategory = ({ app }) => {
  app.get("/", (req, res) => {
    Category.findAll({
      include: [Product],
    })

      .then((categories) => res.json(categories))
      .catch((err) => res.status(500).json(err))
  })

  app.get("/:id", (req, res) => {
    Category.findOne({
      where: {
        id: req.params.id,
      },
      include: [Product],
    })
      .then((category) => res.json(category))
      .catch((err) => res.status(400).json(err))
  })

  app.post("/", (req, res) => {
    Category.create(req.body)
      .then((category) => res.status(200).json(category))
      .catch((err) => res.status(400).json(err))
  })

  app.put("/:id", (req, res) => {
    Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((category) => res.status(200).json(category))
      .catch((err) => res.status(400).json(err))
  })

  app.delete("/:id", (req, res) => {
    Category.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((category) => res.status(200).json(category))
      .catch((err) => res.status(400).json(err))
  })
}

module.exports = routeCategory
