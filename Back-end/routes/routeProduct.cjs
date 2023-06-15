const ProductModel = require("../models/ProductModel.cjs")
const auth = require("../middlewares/auth.js")

const routeProducts = async ({ app, db }) => {
  const checkProduct = (product) => {
    if (product) {
      return true
    }
    
return false
  }
  
  app.get("/products", async (req, res) => {
    res.send({
      result: await ProductModel.query().withGraphFetched("materials").withGraphFetched("category"),
    })
  })

  app.get("/products/:id", async (req, res) => {
    const { id } = req.params
    const product = await ProductModel.query().findById(id).withGraphFetched("materials").withGraphFetched("category")

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
      const updateProduct = await ProductModel.query()
        .updateAndFetchById(id, {
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