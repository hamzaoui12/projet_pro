const express = require("express")
require("dotenv").config()
const app = express()
const config = require("./config.js")



app.listen(port, () => {
    console.log(`Server listening at http://localhost:${config.port}`);
  });