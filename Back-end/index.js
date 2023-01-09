const express = require("express")
require("dotenv").config()
const app = express()
require("./db/config.js")

app.listen(process.env.PORT_LISTENER, () => {
})