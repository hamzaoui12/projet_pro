const BankCardModel = require("../models/BankCardModel.cjs");
const sanitizeUser = require("../sanitizer.js");

const routeBankCard = async ({ app }) => {
  const checkBankCard = (bankCard) => {
    if (bankCard) {
      return true;
    }

    return false;
  };

  app.get("/Bank_card", async (req, res) => {
    res.send({
      result: sanitizeUser(await BankCardModel.query()),
    });
  });

  app.get("/Bank_card/:id", async (req, res) => {
    const { id } = req.params;
    const bankCard = await BankCardModel.query().findById(id);

    if (!checkBankCard(bankCard)) {
      res.status(404).send({ error: "not found" });

      return;
    }

    res.send({ result: sanitizeUser(bankCard) });
  });

  app.post("/Bank_card", async (req, res) => {
    const { id_user, name, card_number, expiration_year, expiration_month, CVV } = req.body;

    try {
      const bankCard = await BankCardModel.query().insert({
        id_user,
        name,
        card_number,
        expiration_year,
        expiration_month,
        CVV,
      });
      res.send(sanitizeUser(bankCard));
    } catch (error) {
      res.send({ result: error });

      return;
    }
  });

  app.patch("/Bank_card/:id", async (req, res) => {
    const { id } = req.params;
    const { name, card_number, expiration_year, expiration_month, CVV } = req.body;

    try {
      const updateBankCard = await BankCardModel.query()
        .updateAndFetchById(id, {
          name,
          card_number,
          expiration_year,
          expiration_month,
          CVV,
        })
        .where({ id });

      if (!checkBankCard(updateBankCard)) {
        res.status(404).send({ error: "not found" });

        return;
      }

      res.send(sanitizeUser(updateBankCard));
    } catch (error) {
      res.send({ result: error });

      return;
    }
  });

  app.delete("/Bank_card/:id", async (req, res) => {
    const { id } = req.params;
    const [bankCard] = await BankCardModel.query().where({ id });

    if (!checkBankCard(bankCard)) {
      res.status(404).send({ error: "not found" });

      return;
    }

    res.send({ result: sanitizeUser(bankCard) });
    await BankCardModel.query().deleteById(id);
  });
};

module.exports = routeBankCard;
