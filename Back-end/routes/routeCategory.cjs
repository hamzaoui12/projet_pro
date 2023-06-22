const CategoryModel = require("../models/CategoryModel.cjs")
const auth = require("../middlewares/auth.js")

const routeCategory = ({ app }) => {
  const checkCategory = (category) => {
    if (category) {
      return true
    }

    return false
  }

  app.get("/categories", async (req, res) => {
    res.send({
      result: await CategoryModel.query(),
    })
  })

  app.get("/categories/:id", auth, async (req, res) => {
    const { id } = req.params
    const category = await CategoryModel.query()
      .findById(id)
      .withGraphFetched("products")
      .withGraphFetched("images")

    if (!checkCategory(category)) {
      res.status(404).send({ error: "not found" })

      return
    }

    res.send({ result: category })
  })

  app.post("/categories", auth, async (req, res) => {
    try {
      const { name, products, images } = req.body
      const category = await CategoryModel.query().insert({
        name,
        products,
        images,
      })

      res.status(201).send({ result: category })
    } catch (error) {
      res.send({ result: error })

      return
    }
  })

  app.patch("/categories/:id", auth, async (req, res) => {
    const { id } = req.params
    const { name, welcome_order } = req.body

    try {
      const updateCategory = await CategoryModel.query()
        .updateAndFetchById(id, { name, welcome_order })
        .withGraphFetched("products")
        .withGraphFetched("images")

      if (!checkCategory(updateCategory)) {
        res.status(404).send({ error: "not found" })

        return
      }

      res.send(updateCategory)
    } catch (error) {
      res.send({ result: error })

      return
    }
  })

  app.delete("/categories/:id", auth, async (req, res) => {
    const { id } = req.params

    const category = await CategoryModel.query()
      .deleteById(id)
      .withGraphFetched("products")
      .withGraphFetched("images")

    if (!checkCategory(category)) {
      res.status(404).send({ error: "not found" })

      return
    }

    res.send({ result: category })
  })
}

module.exports = routeCategory
