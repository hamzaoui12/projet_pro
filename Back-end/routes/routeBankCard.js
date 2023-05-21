const BankCardModel = require("../models/BankCardModel.cjs");
const auth = require("../middlewares/auth.js");

const routeBankCards = async ({ app, db }) => {
  const checkBankCard = (bankCard) => {
    return !!bankCard;
  };

  app.get("/bankcards", async (req, res) => {
    res.send({
      result: await BankCardModel.query(),
    });
  });

  app.get("/bankcards/:id", async (req, res) => {
    const { id } = req.params;
    const bankCard = await BankCardModel.query().findById(id);

    if (!checkBankCard(bankCard)) {
      res.status(404).send({ error: "Bank card not found" });
      return;
    }

    res.send({ result: bankCard });
  });

  app.post("/bankcards", async (req, res) => {
    const { expirationMonth, expirationYear, cardValidationCodeHash, cardValidationCodeSalt, cardNumberHash, cardNumberSalt, user_id } = req.body;

    try {
      const newBankCard = await BankCardModel.query().insert({
        expirationMonth,
        expirationYear,
        cardValidationCodeHash,
        cardValidationCodeSalt,
        cardNumberHash,
        cardNumberSalt,
        user_id,
      });

      res.status(201).send({ result: newBankCard });
    } catch (error) {
      res.status(500).send({ error: "Failed to add bank card" });
    }
  });

  app.patch("/bankcards/:id", async (req, res) => {
    const { id } = req.params;
    const { expirationMonth, expirationYear, cardValidationCodeHash, cardValidationCodeSalt, cardNumberHash, cardNumberSalt, user_id } = req.body;

    try {
      const updatedBankCard = await BankCardModel.query()
        .updateAndFetchById(id, {
          expirationMonth,
          expirationYear,
          cardValidationCodeHash,
          cardValidationCodeSalt,
          cardNumberHash,
          cardNumberSalt,
          user_id,
        });

      if (!checkBankCard(updatedBankCard)) {
        res.status(404).send({ error: "Bank card not found" });
        return;
      }

      res.send(updatedBankCard);
    } catch (error) {
      res.send({ result: error });
    }
  });

  app.delete("/bankcards/:id", async (req, res) => {
    const { id } = req.params;
    const [bankCard] = await db("bankcards").where({ id });

    if (!checkBankCard(bankCard)) {
      res.status(404).send({ error: "Bank card not found" });
      return;
    }

    res.send({ result: bankCard });
    await BankCardModel.query().deleteById(id);
  });
};


module.exports = routeBankCards;
