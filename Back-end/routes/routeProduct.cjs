const ProductModel = require("../models/ProductModel.cjs")

const routeProducts = async ({ app, db }) => {
  const checkProduct = (product) => {
    if (product) {
      return true
    }

    return false
  }

  app.get("/products", async (req, res) => {
    try {
      const {
        minPrice,
        maxPrice,
        inStock,
        material,
        categories,
        sortBy,
        searchName,
        page,
      } = req.query

      let query = ProductModel.query()

      if (searchName) {
        query = query.where("name", "LIKE", `%${searchName}%`)
      }

      if (minPrice) {
        query = query.where("price", ">=", parseFloat(minPrice))
      }

      if (maxPrice) {
        query = query.where("price", "<=", parseFloat(maxPrice))
      }

      if (inStock !== "false") {
        query = query.where("stock", ">", 0)
      }

      if (sortBy === "asc") {
        query = query.orderBy("price", "asc")
      } else if (sortBy === "desc") {
        query = query.orderBy("price", "desc")
      }

      let result = await query.withGraphFetched("[materials, category]")

      return res.status(200).json(result)
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred", message: error.message })
      return
    }
  })

  app.get("/products/:id", async (req, res) => {
    const { id } = req.params
    const product = await ProductModel.query()
      .findById(id)
      .withGraphFetched("materials")
      .withGraphFetched("category")

    if (!checkProduct(product)) {
      res.status(404).send({ error: "not found" })

      return
    }

    res.send({ result: product })
  })

  app.post("/products", async (req, res) => {
    const {
      name,
      description,
      highlander,
      welcome_order,
      stock,
      priority,
      price,
      category,
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
        category,
        material,
        images,
      })

      await Promise.all(
        material.map(async (material_id) => {
          await db("productmaterials").insert({
            product_id: newProduct.id,
            material_id,
          })
        })
      )
      res.status(201).send({ result: newProduct })
    } catch (error) {
      res.status(500).send({ error: "Failed to add product" })
    }
  })

  app.patch("/products/:id", async (req, res) => {
    const { id } = req.params
    const {
      name,
      description,
      highlander,
      welcome_order,
      stock,
      priority,
      price,
      category,
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
        category,
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

  app.delete("/products/:id", async (req, res) => {
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

module.exports = routeProducts
