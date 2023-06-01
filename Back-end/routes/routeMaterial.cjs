const MaterialModel = require("../models/MaterialModel.cjs");
const auth = require("../middlewares/auth.js");

const routeMaterials = async ({ app, db }) => {
  const checkMaterial = (material) => {
    if (material) {
      return true;
    }
    return false;
  };
  
  app.get("/materials", async (req, res) => {
    res.send({
      result: await MaterialModel.query(),
    });
  });

  app.get("/materials/:id", async (req, res) => {
    const { id } = req.params;
    const material = await MaterialModel.query().findById(id);

    if (!checkMaterial(material)) {
      res.status(404).send({ error: "not found" });
      return;
    }

    res.send({ result: material });
  });

  app.post("/materials", async (req, res) => {
    const { name } = req.body;
  
    try {
      const newMaterial = await MaterialModel.query().insert({
        name,
      });
  
      res.status(201).send({ result: newMaterial });
    } catch (error) {
      res.status(500).send({ error: "Failed to add material" });
    }
  });

  app.patch("/materials/:id", async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
      const updateMaterial = await MaterialModel.query()
        .updateAndFetchById(id, {
          name,
        });

      if (!checkMaterial(updateMaterial)) {
        res.status(404).send({ error: "not found" });
        return;
      }

      res.send(updateMaterial);
    } catch (error) {
      res.send({ result: error });
      return;
    }
  });

  app.delete("/materials/:id", async (req, res) => {
    const { id } = req.params;
    const [material] = await db("materials").where({ id: id });

    if (!checkMaterial(material)) {
      res.status(404).send({ error: "Not found" });
      return;
    }

    res.send({ result: material });
    await MaterialModel.query().deleteById(id);
  });
};

module.exports = routeMaterials;
