const sanitizeUser = require("../sanitizer.js")
const UserModel = require("../models/UserModel.cjs")

const routeUsers = async ({ app, db }) => {
  const checkUser = async (res, userId) => {
    const user = await UserModel.query().findById(userId)

    if (user) {
      return true
    }

    return false
  }

  app.get("/users", async (req, res) => {
    res.send({
      result: sanitizeUser(
        await UserModel.query()
      ),
    })
  })

  app.get("/users/:id", async (req, res) => {
    const { id } = req.params

    if (checkUser(res, id)) {
      res.status(404).send({error: "not found"})
    }

    const user = await UserModel.query().findById(id)
    console.log(user)

    res.send({ result: sanitizeUser(user) })
  })

  app.post("/users", async (req, res) => {
    const { firstName, lastName, mail, phoneNumber } = req.body

    const [user] = await UserModel.query().insert({ firstName, lastName, mail, phoneNumber })
    res.send({ id: user, firstName, lastName, mail, phoneNumber })
  })

  app.patch("/users/:id", async (req, res) => {
    const { id } = req.params
    const { firstName, lastName, mail, phoneNumber } = req.body

    if (checkUser(res, id)) {
      res.status(404).send({error: "not found"})
    }

    const updateUser = await UserModel.query().updateAndFetchById(id, { firstName, lastName, mail, phoneNumber })
    res.send({ id: updateUser, firstName, lastName, mail, phoneNumber })
  })

  app.delete("/users/:id", async (req, res) => {
    const { id } = req.params
    const [user] = await db("users").where({ id: id })

    if (checkUser(res, id)) {
      res.status(404).send({error: "not found"})
    }

    res.send({ result: user })
    await UserModel.query().deleteById(id)
  })
}

module.exports = routeUsers