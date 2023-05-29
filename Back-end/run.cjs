const express = require("express")
const cors = require("cors")
const knex = require("knex")
const BaseModel = require("./models/BaseModel.cjs")
const routeUser = require("./routes/routeUser.cjs")
const routeSignIn = require("./routes/routeSignIn.cjs")
const routeCategory = require("./routes/routeCategory.cjs")
const morgan = require("morgan")

const run = async (config) => {
  const app = express()

  app.use(express.json())
  app.use(cors())
  app.use(morgan("dev"))
  const db = knex(config.db)
  BaseModel.knex(db)

  routeUser({ app, db })

  routeMaterial({ app, db })
  routeCategory({ app, db })
  routeSignIn({app})

  app.listen(config.port)
}

module.exports = run
