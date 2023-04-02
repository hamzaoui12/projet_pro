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
}

module.exports = config