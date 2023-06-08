require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)

const routeCheckout = async ({ app }) => {
  app.post("/stripe/charge", async (req, res) => {
    let { amount, id } = req.body
    try {
      const payment = await stripe.paymentIntents.create({
        amount: amount,
        currency: "EUR",
        description: "your Company Description",
        payment_method: id,
        confirm: true,
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
