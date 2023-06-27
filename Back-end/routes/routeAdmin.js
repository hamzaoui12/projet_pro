const CategoryModel = require("../models/CategoryModel.cjs")

const routeAdmin = async ({ app, db }) => {
  const checkCategory = (category) => {
    if (category) {
      return true
    }

    return false
  }

  const checkProduct = (product) => {
    if (product) {
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
  app.get("/admin/products", async (req, res) => {
    try {
      const products = await ProductModel.query()
        .withGraphFetched("materials")
        .withGraphFetched("category")

      if (!checkProduct(products)) {
        res.status(404).send({ error: "Products not found" })
      } else {
        res.send({ result: products })
      }
    } catch (error) {
      console.log(error)
      res.status(500).send({ error: "Failed to fetch Products" })
    }
  })
  app.put("/admin/product/", async (req, res) => {
    const {
      name,
      description,
      highlander,
      welcome_order,
      stock,
      priority,
      price,
      category_id,
      material,
      images,
    } = req.body

    try {
      const newProduct = await ProductModel.query().insert({
        name,
        description,
        highlander,
        welcome_order,
        stock,
        priority,
        price,
        category_id,
        material,
        images,
      })

      res.status(201).send({ result: newProduct })
    } catch (error) {
      res.status(500).send({ error: "Failed to add product" })
    }
  })
  app.patch("/admin/product/:id", async (req, res) => {
    const { id } = req.params
    const {
      name,
      description,
      highlander,
      welcome_order,
      stock,
      priority,
      price,
      category_id,
      material,
    } = req.body

    try {
      const updateProduct = await ProductModel.query().updateAndFetchById(id, {
        name,
        description,
        highlander,
        welcome_order,
        stock,
        priority,
        price,
        category_id,
        material,
      })

      if (!checkProduct(updateProduct)) {
        res.status(404).send({ error: "Not found" })
        return
      }

      res.send(updateProduct)
    } catch (error) {
      res.send({ result: error })
      return
    }
  })
  app.delete("/admin/product/:id", async (req, res) => {
    const { id } = req.params
    const [product] = await db("products").where({ id: id })

    if (!checkProduct(product)) {
      res.status(404).send({ error: "Not found" })
      return
    }

    res.send({ result: product })
    await ProductModel.query().deleteById(id)
  })
}

module.exports = routeAdmin
