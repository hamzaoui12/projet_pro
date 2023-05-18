const sanitizeUser = require("../sanitizer.js")
const UserModel = require("../models/UserModel.cjs")
const hashPassword = require("../hashPassword.cjs")

const routeUsers = async ({ app, db }) => {
  const checkUser = (user) => {
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
    const user = await UserModel.query().findById(id)

    if ((!checkUser(user))) {
      res.status(404).send({ error: "not found" })

      return
    }

    res.send({ result: sanitizeUser(user) })
  })

  app.post("/users", async (req, res) => {
    const { firstName, lastName, password, mail, phoneNumber } = req.body

    const [passwordHash, passwordSalt] = hashPassword(password)

    try {
      const user = await UserModel.query().insert({ firstName, lastName, passwordHash, passwordSalt, mail, phoneNumber })
      res.send(sanitizeUser(user))
    } catch (error) {
      res.send({result: error})

      return 
    }
  })

  app.patch("/users/:id", async (req, res) => {
    const { id } = req.params
    const { firstName, lastName, mail, phoneNumber } = req.body

    try {
      const updateUser = await UserModel.query().updateAndFetchById(id, { firstName, lastName, mail, phoneNumber })

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

  app.delete("/users/:id", async (req, res) => {
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