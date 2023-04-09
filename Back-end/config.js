require("dotenv").config()

const config = {
  port: process.env.PORT,
  db: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
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
        saltLen: process.env.PSW_SALT,
        iterations: process.env.PSW_ITERATIONS,
        keyLen: process.env.PSW_KEY,
        digest: process.env.PSW_DIGEST,
      },
    },
  },
}

module.exports = config