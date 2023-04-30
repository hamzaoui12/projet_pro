const sanitizeAddress = require("../sanitizer.js")
const AddressModel = require("../models/AddressModel.cjs")

const routeAddresses = async ({ app, db }) => {
  const checkAddress = (address) => {
    if (address) {
      return true
    }

    return false
  }

  app.get("/adress", async (req, res) => {
    res.send({
      result: sanitizeAddress(
        await AddressModel.query()
      ),
    })
  })

  app.get("/adress/:id", async (req, res) => {
    const { id } = req.params
    const address = await AddressModel.query().findById(id)

    if (!checkAddress(address)) {
      res.status(404).send({ error: "not found" })

      return
    }

    res.send({ result: sanitizeAddress(address) })
  })

  app.post("/adress", async (req, res) => {
    const { city, region, postal_code, country } = req.body

    try {
      const address = await AddressModel.query().insert({ city, region, postal_code, country })
      res.send(sanitizeAddress(address))
    } catch (error) {
      res.send({result: error})

      return 
    }
  })

  app.patch("/adress/:id", async (req, res) => {
    const { id } = req.params
    const { city, region, postal_code, country } = req.body

    try {
      const updateAddress = await AddressModel.query().updateAndFetchById(id, { city, region, postal_code, country })

      if (!checkAddress(updateAddress)) {
        res.status(404).send({ error: "not found" })

        return
      }

      res.send(sanitizeAddress(updateAddress))
    } catch (error) {
      res.send({result: error})

      return 
    }
  })

  app.delete("/adress/:id", async (req, res) => {
    const { id } = req.params
    const [address] = await db("adress").where({ id: id })

    if (!checkAddress(address)) {
      res.status(404).send({ error: "not found" })

      return
    }

    res.send({ result: sanitizeAddress(address) })
    await AddressModel.query().deleteById(id)
  })
}

module.exports = routeAddresses
