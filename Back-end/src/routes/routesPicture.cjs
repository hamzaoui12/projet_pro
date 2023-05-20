const express = require("express");
const app = express();

// GET all images
app.get("/images", async (req, res) => {
  try {
    const images = await knex.select("*").from("images");
    res.json(images);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// GET a specific image by ID
app.get("/images/:id", async (req, res) => {
  try {
    const image = await knex
      .select("*")
      .from("images")
      .where("id", req.params.id)
      .first();
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }
    res.json(image);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// POST a new image
app.post("/images", async (req, res) => {
  try {
    const { picture, product_id, category_id } = req.body;
    const newImage = await knex("images").insert({
      picture,
      product_id,
      category_id
    });
    res.json({ id: newImage[0] });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// PUT or update an existing image
app.put("/images/:id", async (req, res) => {
  try {
    const { picture, product_id, category_id } = req.body;
    const updatedImage = await knex("images")
      .where("id", req.params.id)
      .update({
        picture,
        product_id,
        category_id
      });
    if (!updatedImage) {
      return res.status(404).json({ message: "Image not found" });
    }
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// DELETE an image
app.delete("/images/:id", async (req, res) => {
  try {
    const deletedImage = await knex("images")
      .where("id", req.params.id)
      .del();
    if (!deletedImage) {
      return res.status(404).json({ message: "Image not found" });
    }
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});
