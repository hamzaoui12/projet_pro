const CategoryModel = require("../models/CategoryModel.cjs")

const routeCategory = ({ app }) => {
  app.get("/categories", async (req, res) => {
    res.send({ result: await CategoryModel.query() })
  })

  app.get("/categories/:id", async (req, res) => {
    const { id } = req.params
    const user = await CategoryModel.query()
      .findById(id)
      .withGraphFetched("products")

    if (!checkUser(user)) {
      res.status(404).send({ error: "not found" })

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

      if (!checkCategory(updateCategory)) {
        res.status(404).send({ error: "not found" })

        return
      }

      res.send(sanitizeUser(updateUser))
    } catch (error) {
      res.send({ result: error })

      return
    }
  })

  app.delete("/categories/:id", auth, async (req, res) => {
    const { id } = req.params

    const [user] = await CategoryModel.query()
      .deleteById(id)
      .withGraphFetched("products")

    if (!checkCategory(user)) {
      res.status(404).send({ error: "not found" })

      return
    }

    res.send({ result: sanitizeCategory(user) })
  })
}

module.exports = routeCategory
