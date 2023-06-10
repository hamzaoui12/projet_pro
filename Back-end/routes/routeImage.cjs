const ImageModel = require("../models/ImageModel.cjs");
const auth = require("../middlewares/auth.js");
const multer = require("multer");

const routeImages = async ({ app, db }) => {
  const checkImage = (image) => {
    if (image) {
      return true;
    }
    return false;
  };

  app.get("/images", async (req, res) => {
    res.send({
      result: await ImageModel.query(),
    });
  });

  app.get("/images/:id", async (req, res) => {
    const { id } = req.params;
    const image = await ImageModel.query().findById(id);

    if (!checkImage(image)) {
      res.status(404).send({ error: "not found" });
      return;
    }

    res.send({ result: image });
  });

    // Configurez Multer pour spécifier où enregistrer les fichiers téléchargés
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + "-" + uniqueSuffix + ".jpg");
    },
  });

  const upload = multer({ storage: storage });

  app.post("/images", upload.single("picture"), async (req, res) => {
    const { product_id, category_id } = req.body;
    const picture = req.file.filename;

    try {
      const newImage = await ImageModel.query().insert({
        product_id,
        category_id,
        picture,
      });

      res.status(201).send({ result: newImage });
    } catch (error) {
      res.status(500).send({ error: "Failed to add image" });
    }
  });

  app.patch("/images/:id", async (req, res) => {
    const { id } = req.params;
    const { product_id, category_id, picture } = req.body;

    try {
      const updateImage = await ImageModel.query()
        .updateAndFetchById(id, {
          product_id,
          category_id,
          picture,
        });

      if (!checkImage(updateImage)) {
        res.status(404).send({ error: "not found" });
        return;
      }

      res.send(updateImage);
    } catch (error) {
      res.send({ result: error });
      return;
    }
  });

  app.delete("/images/:id", async (req, res) => {
    const { id } = req.params;
    const [image] = await db("images").where({ id });

    if (!checkImage(image)) {
      res.status(404).send({ error: "not found" });
      return;
    }

    res.send({ result: image });
    await ImageModel.query().deleteById(id);
  });
};

module.exports = routeImages;