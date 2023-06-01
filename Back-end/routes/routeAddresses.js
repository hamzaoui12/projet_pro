const AddressModel = require("../models/AddressModel.cjs")
const auth = require("../middlewares/auth.js")

const routeAddresses = async ({ app }) => {
  const checkAddress = async (address) => {
    if (address) {
      return true
    }

    return false
  }

  app.get("/addresses", auth, async (req, res) => {
    try {
      const addresses = await AddressModel.query()
      res.send({ result: addresses })
    } catch (error) {
      res.status(500).send({ error: "Failed to fetch addresses" })
    }
  })

  app.get("/addresses/:id", auth, async (req, res) => {
    const { id } = req.params

    try {
      const address = await AddressModel.query().findById(id)

      if (!checkAddress(address)) {
        res.status(404).send({ error: "Address not found" })
      } else {
        res.send({ result: address })
      }
    } catch (error) {
      res.status(500).send({ error: "Failed to fetch address" })
    }
  })

  app.post("/addresses", auth, async (req, res) => {
    const { country, city, region, postalCode } = req.body

    try {
      const newAddress = await AddressModel.query().insert({
        country,
        city,
        region,
        postalCode,
      })
      res.status(201).send({ result: newAddress })
    } catch (error) {
      res.status(500).send({ error: "Failed to add address" })
    }
  })

  app.patch("/addresses/:id",auth ,async (req, res) => {
    const { id } = req.params
    const { country, city, region, postalCode } = req.body

    try {
      const updatedAddress = await AddressModel.query()
        .updateAndFetchById(id, {
          country,
          city,
          region,
          postalCode,
        })
      
      if (!checkAddress(updatedAddress)) {
        res.status(404).send({ error: "Address not found" })
      } else {
        res.send({ result: updatedAddress })
      }
    } catch (error) {
      res.status(500).send({ error: "Failed to update address" })
    }
  })

  app.delete("/addresses/:id", async (req, res) => {
    const { id } = req.params

    try {
      const address = await AddressModel.query().findById(id)
      
      if (!checkAddress(address)) {
        res.status(404).send({ error: "Address not found" })
      } else {
        await AddressModel.query().deleteById(id)
        res.send({ result: address })
      }
    } catch (error) {
      res.status(500).send({ error: "Failed to delete address" })
    }
  })
}

module.exports = routeAddresses
