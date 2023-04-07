const express = require("express")
require("dotenv").config()
const app = express()
const config = require("./config.js")

app.listen(config.port, () => { })