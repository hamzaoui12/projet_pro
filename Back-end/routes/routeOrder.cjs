const OrderModel = require("../models/OrderModel.cjs")

const routeOrder = ({ app }) => {
  app.get("/orders", async (req, res) => {
    res.send({ result: await OrderModel.query() })
  })

  app.get("/orders/:id", async (req, res) => {
    const { id } = req.params
    const user = await OrderModel.query()
      .findById(id)
      .withGraphFetched("products")

    if (!checkUser(user)) {
      res.status(404).send({ error: "not found" })

      return
    }
  })

  app.patch("/orders/:id", auth, async (req, res) => {
    const { id } = req.params
    const { canceled, total, tva, finished, arrived, progress, date } = req.body

    try {
      const updateOrder = await OrderModel.query()
        .updateAndFetchById(id, {
          canceled,
          total,
          tva,
          finished,
          arrived,
          progress,
          date,
        })
        .withGraphFetched("products")

      if (!checkOrder(updateOrder)) {
        res.status(404).send({ error: "not found" })

        return
      }

      res.send(sanitizeUser(updateOrder))
    } catch (error) {
      res.send({ result: error })

      return
    }
  })

  app.delete("/Orders/:id", auth, async (req, res) => {
    const { id } = req.params

    const [user] = await OrderModel.query()
      .deleteById(id)
      .withGraphFetched("products")

    if (!checkOrder(user)) {
      res.status(404).send({ error: "not found" })

      return
    }

    res.send({ result: sanitizeOrder(user) })
  })
}

module.exports = routeOrder
