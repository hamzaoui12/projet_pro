require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)

const routeChekout = async ({ app, db }) => {
  app.post("/stripe/charge", async (req, res) => {
    let { amount, id } = req.body
    console.log("amount & id :", amount, id)
    try {
      const payment = await stripe.paymentIntents.create({
        amount: amount,
        currency: "EUR",
        description: "your Company Description",
        payment_method: id,
        confirm: true,
      })
      res.json({
        message: "payement reussi",
        success: true,
      })
    } catch (error) {
      console.log("erreur... ", error)
      res.json({
        message: "le payement a echoue",
        success: false,
      })
    }
  })
}

module.exports = routeChekout
