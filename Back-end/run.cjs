const express = require("express")
const cors = require("cors")
const knex = require("knex")
const BaseModel = require("./models/BaseModel.cjs")
const routeUser = require("./routes/routeUser.cjs")
const routeAddresses = require("./routes/routeAddresses.js")
const routeMaterial = require("./routes/routeMaterial.cjs")
const routeImages = require("./routes/routeImage.cjs")
const routeSignIn = require("./routes/routeSignIn.cjs")
const routeCategory = require("./routes/routeCategory.cjs")
const routeProduct = require("./routes/routeProduct.cjs")
const routeOrder = require("./routes/routeOrder.cjs")
const morgan = require("morgan")

const run = async (config) => {
  const app = express()

  app.use(express.json())
  app.use(cors())
  app.use(morgan("dev"))
  const db = knex(config.db)
  BaseModel.knex(db)

  routeUser({ app, db })
  routeAddresses({ app })
  routeMaterial({ app, db })
  routeSignIn({ app })
  routeImages({ app, db })
  routeCategory({ app, db })
  routeProduct({ app, db })
  routeOrder({ app })

  app.listen(config.port)
}

module.exports = run
