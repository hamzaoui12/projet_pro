const Order = require("../models/Order")

const routeOrder = ({ app }) => {
  app.get("/orders", Auth, async (req, res) => {
    const owner = req.user._id
    try {
      const order = await Order.find({ owner: owner }).sort({ date: -1 })
      res.status(200).send(order)
    } catch (err) {
      res.status(500).send()
    }
  })

  app.post("/orders", Auth, async (req, res) => {
    const owner = req.user._id
    try {
      if (cart && cart.items.length > 0) {
        const newOrder = await Order.create({
          owner,
          items: cart.items,
          bill: cart.bill,
        })

        return res.status(201).send(newOrder)
      } else
        return res.status(404).send({
          message: "No items in cart",
        })
    } catch (err) {
      console.log(err)
      res.status(500).send("something went wrong     :(")
    }
  })
}

module.exports = routeOrder
