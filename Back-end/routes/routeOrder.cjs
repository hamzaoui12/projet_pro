const OrderModel = require("../models/OrderModel.cjs")
const auth = require("../middlewares/auth.js")

const routeOrder = ({ app }) => {
  const checkOrder = (order) => {
    if (order) {
      return true
    }

    return false
  }
  app.get("/orders", auth, async (req, res) => {
    res.send({ result: await OrderModel.query().withGraphFetched("products") })
  })

  app.get("/orders/:id", auth, async (req, res) => {
    const { id } = req.params
    const user = await OrderModel.query()
      .findById(id)
      .withGraphFetched("products")

    if (!checkOrder(user)) {
      res.status(404).send({ error: "not found" })

      return
    }

    res.send({ result: user })
  })

  app.post("/orders/", auth, async (req, res) => {
    const {
      canceled,
      total,
      tva,
      finished,
      arrived,
      progress,
      date,
      products,
      user_id,
    } = req.body

    try {
      const createOrder = await OrderModel.query().insert({
        canceled,
        total,
        tva,
        finished,
        arrived,
        progress,
        date,
        user_id,
      })

      if (products) {
        await Promise.all(
          products.map(async (product) => {
            await createOrder.$relatedQuery("products").relate(product)
          })
        )
      }

      if (!checkOrder(createOrder)) {
        res.status(404).send({ error: "not found" })

        return
      }

      res.send({ result: createOrder })
    } catch (error) {
      res.send({ result: error })

      return
    }
  })

  app.patch("/orders/:id", auth, async (req, res) => {
    const { id } = req.params
    const {
      canceled,
      total,
      tva,
      finished,
      arrived,
      progress,
      date,
      products,
    } = req.body

    try {
      const updateOrder = await OrderModel.query().updateAndFetchById(id, {
        canceled,
        total,
        tva,
        finished,
        arrived,
        progress,
        date,
      })

      if (products) {
        await updateOrder.$relatedQuery("products").unrelate()
        await Promise.all(
          products.map(async (product) => {
            await updateOrder.$relatedQuery("products").relate(product)
          })
        )
      }

      if (!checkOrder(updateOrder)) {
        res.status(404).send({ error: "not found" })

        return
      }

      res.send({ result: updateOrder })
    } catch (error) {
      res.send({ result: error })

      return
    }
  })

  app.delete("/Orders/:id", auth, async (req, res) => {
    const { id } = req.params

    const order = await OrderModel.query()
      .deleteById(id)
      .withGraphFetched("products")

    if (!checkOrder(order)) {
      res.status(404).send({ error: "not found" })

      return
    }

    res.send({ result: order })
  })
}

module.exports = routeOrder
