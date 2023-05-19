const CategoryModel = require("./models/CategoryModel")

const port = 3000
const routeCategory = ({ app }) => {
  app.get("/categories", async (req, res) => {
    const categories = await CategoryModel.query()
    res.json(categories)
  })

  app.get("/categories/:id", async (req, res) => {
    const categoryId = req.params.id
    const category = await CategoryModel.query().findById(categoryId)
    if (!category) {
      res.status(404).json({ error: "Category not found" })
    } else {
      res.json(category)
    }
  })

  app.post("/categories", async (req, res) => {
    const newCategory = req.body
    const category = await CategoryModel.query().insert(newCategory)
    res.json(category)
  })

  app.patch("/categories/:id", async (req, res) => {
    const categoryId = req.params.id
    const updatedCategory = req.body
    const category = await CategoryModel.query().findById(categoryId)
    if (!category) {
      res.status(404).json({ error: "Category not found" })
    } else {
      const updated = await category.$query().update(updatedCategory)
      res.json(updated)
    }
  })

  app.delete("/categories/:id", async (req, res) => {
    const categoryId = req.params.id
    const category = await CategoryModel.query().findById(categoryId)
    if (!category) {
      res.status(404).json({ error: "Category not found" })
    } else {
      const deleted = await category.$query().delete()
      res.json(deleted)
    }
  })
}

module.exports = routeCategory
