require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)

const routeCheckout = async ({ app }) => {
  app.post("/stripe/charge", async (req, res) => {
    let { total, id, metaData } = req.body

    try {
      await stripe.paymentIntents.create({
        amount: total,
        currency: "EUR",
        description: "your Company Description",
        payment_method: id,
        confirm: true,
        metadata: metaData,
      })
      res.send({
        message: "payement reussi",
        success: true,
      })
    } catch (error) {
      res.send({
        message: "le payement a echoue",
        success: false,
      })
    }
  })
}

module.exports = routeCheckout
