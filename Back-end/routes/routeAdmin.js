const CategoryModel = require("../models/CategoryModel.cjs")

const routeAdmin = async ({ app, db }) => {
  const checkCategory = (category) => {
    if (category) {
      return true
    }

    return false
  }

  app.get("/admin/getCateogries", async (req, res) => {
    try {
      const cateogries = await CategoryModel.query()

      if (!checkCategory(cateogries)) {
        res.status(404).send({ error: "Cateogries not found" })
      } else {
        res.send({ result: cateogries })
      }
    } catch (error) {
      res.status(500).send({ error: "Failed to fetch cateogries" })
    }
  })
}

module.exports = routeAdmin
