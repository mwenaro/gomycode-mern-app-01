const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel");
const { userSeeder } = require("../utils/seeders");
const { seedingUsers } = require("../utils/data");

// CREATE
router.post("/", async (req, res) => {
  try {
    let created = null;
    if (Array.isArray(req.body)) {
      created = await UserModel.insertMany(req.body);
    } else {
      created = await UserModel.create(req.body);
    }
    res.status(201).json(created);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = id ? await UserModel.findOne({ id }) : await UserModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// READ
router.get("/", async (req, res) => {
  try {
    await userSeeder(seedingUsers)
    const data = await UserModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
