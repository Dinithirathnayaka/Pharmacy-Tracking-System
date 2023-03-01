const express = require("express");

const {
  createMedicine,
  getMedicines,
  getMedicine,
  deleteMedicine,
  updateMedicine,
} = require("../controllers/medicineController");

const router = express.Router();

//GET all medicines
router.get("/", getMedicines);

//GET a single medicine
router.get("/:id", getMedicine);

//Post a new medicine
router.post("/", createMedicine);

//DELETE a medicine
router.delete("/:id", deleteMedicine);

//UPDATE a medicine
router.patch("/:id", updateMedicine);

module.exports = router;
