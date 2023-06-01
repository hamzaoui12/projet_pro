const hashPassword = require("../hashPassword.cjs")
const config = require("../config.js")
const jsonwebtoken = require("jsonwebtoken")
const sanitizeUser = require("../sanitizer.js")
const UserModel = require("../models/UserModel.cjs")


const routeSign = ({ app }) => {
  app.post("/sign-up", async (req, res) => {
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
  app.post("/sign-in", async (req, res) => {
    const { mail, password } = req.body
    const user = await UserModel.query().findOne({mail})
    
    if (!user) {
      res.status(401).send({ error: "connection non authorisée" })

      return
    }

    const [passwordHash] = hashPassword(password, user.passwordSalt)

    if (user.passwordHash !== passwordHash) {
      res.status(401).send({ error: "connection non authorisée" })

      return
    }

    const jwt = jsonwebtoken.sign(
      {
        payload: {
          user: {
            id: user.id,
            fullName: `${user.firstName} ${user.lastName}`,
            mail: `${user.mail}`
          },
        },
      },
      config.security.session.jwt.secret,
      { expiresIn: config.security.session.jwt.expiresIn }
    )

    res.send({ result: jwt, "user" : sanitizeUser(user)})
  })
}

module.exports = routeSign