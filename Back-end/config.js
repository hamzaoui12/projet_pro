const { isInteger } = require("formik")

require("dotenv").config()

const config = {
  port: process.env.PORT,
  db: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_CONNECTION_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_CONNECTION_DATABASE,
    },
    migrations: {
      directory: "./db/migrations",
      stub: "./db/migration.stub",
    },
  },
  security: {
    session: {
      password: {
        saltLen: parseInt(process.env.PSW_SALT),
        iterations: parseInt(process.env.PSW_ITERATIONS),
        keyLen: parseInt(process.env.PSW_KEY),
        digest: process.env.PSW_DIGEST,
      },
    },
  },
}

module.exports = config