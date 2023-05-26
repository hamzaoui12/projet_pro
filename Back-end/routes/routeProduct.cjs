const ProductModel = require("../models/ProductyModel.cjs")

const routeProduct = ({ app }) => {
  app.get("/Products", async (req, res) => {
    res.send({ result: await ProductModel.query() })
  })

  app.get("/Products/:id", async (req, res) => {
    const { id } = req.params
    const Product = await ProductModel.query()
      .findById(id)
      .withGraphFetched("products")

    if (!checkProducts(Product)) {
      res.status(404).send({ error: "not found" })

      return
    }
  })

  app.patch("/Products/:id", auth, async (req, res) => {
    const { id } = req.params
    const { products } = req.body

    try {
      const updateProduct = await ProductModel.query()
        .updateAndFetchById(id, { products })
        .withGraphFetched("products")

      if (!checkProducts(updateProduct)) {
        res.status(404).send({ error: "not found" })

        return
      }

      res.send(sanitizeProduct(updateProduct))
    } catch (error) {
      res.send({ result: error })

      return
    }
  })

  app.delete("/Products/:id", auth, async (req, res) => {
    const { id } = req.params

    const [Product] = await ProductModel.query()
      .deleteById(id)
      .withGraphFetched("products")

    if (!checkProduct(Product)) {
      res.status(404).send({ error: "not found" })

      return
    }

    res.send({ result: sanitizeProduct(Product) })
  })
}

module.exports = routeProduct
