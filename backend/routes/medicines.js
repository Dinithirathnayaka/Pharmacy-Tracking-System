const express = require("express");

const {
  createMedicine,
  getMedicines,
  getMedicine,
  deleteMedicine,
  updateMedicine,
  getMedicineSuggestions,
  getMedicinesById,
} = require("../controllers/medicineController");

const router = express.Router();

// Medicine suggestions
router.get("/medicine-suggestions", getMedicineSuggestions);

//GET all medicines
router.get("/", getMedicines);

//GET all medicines according to PharmacyId
router.get("/id/:userId", getMedicinesById);

//GET a single medicine
router.get("/:id", getMedicine);

//Post a new medicine
router.post("/", createMedicine);

//DELETE a medicine
router.delete("/:id", deleteMedicine);

//UPDATE a medicine
router.patch("/:id", updateMedicine);

module.exports = router;
