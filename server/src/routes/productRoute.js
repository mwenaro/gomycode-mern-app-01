const express = require("express");
const router = express.Router();
const ProductModel = require("../models/ProductModel");

// CREATE
router.post("/", async (req, res) => {
  try {
    // Check if req.body is an array
    if (Array.isArray(req.body)) {
      // If req.body is an array, insert multiple products
      const newProducts = await ProductModel.insertMany(req.body);
      res.status(201).json(newProducts);
    } else {
      // If req.body is not an array, insert a single product
      const newProduct = await ProductModel.create(req.body);
      res.status(201).json(newProduct);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// READ
router.get("/", async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await ProductModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
