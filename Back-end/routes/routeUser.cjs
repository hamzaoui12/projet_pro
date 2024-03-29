const sanitizeUser = require("../sanitizer.js")
const UserModel = require("../models/UserModel.cjs")
const auth = require("../middlewares/auth.js")

const routeUsers = async ({ app, db }) => {
  const checkUser = (user) => {
    if (user) {
      return true
    }

    return false
  }

  app.get("/users", auth, async (req, res) => {
    res.send({
      result: sanitizeUser(
        await UserModel.query().withGraphFetched("orders")
      ),
    })
  })

  app.get("/users/:id", auth, async (req, res) => {
    const { id } = req.params
    const user = await UserModel.query().findById(id).withGraphFetched("orders")

    if ((!checkUser(user))) {
      res.status(404).send({ error: "not found" })

      return
    }

    res.send({ result: sanitizeUser(user) })
  })

  app.patch("/users/:id", auth, async (req, res) => {
    const { id } = req.params
    const { firstName, lastName, mail, phoneNumber, orders } = req.body

    try {
      const updateUser = await UserModel.query().updateAndFetchById(id, { firstName, lastName, mail, phoneNumber })

      if (orders) {
        await Promise.all(
          orders.map(async (order) => {
            await updateUser.$relatedQuery("orders").relate(order)
          })
        )
      }

      if (!checkUser(updateUser)) {
        res.status(404).send({ error: "not found" })

        return
      }

      res.send(sanitizeUser(updateUser))
    } catch (error) {
      res.send({result: error})

      return 
    }
  })

  app.delete("/users/:id", auth, async (req, res) => {
    const { id } = req.params
    const [user] = await db("users").where({ id: id })

    if (!checkUser(user)) {
      res.status(404).send({ error: "not found" })

      return
    }

    res.send({ result: sanitizeUser(user) })
    await UserModel.query().deleteById(id)
  })
}

module.exports = routeUsers