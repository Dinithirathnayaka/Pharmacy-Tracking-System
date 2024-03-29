const express = require("express");

const {
  createDoctor,
  getDoctors,
  getDoctor,
  deleteDoctor,
  updateDoctor,
} = require("../controllers/doctorController");

const router = express.Router();

//GET all doctors
router.get("/", getDoctors);

//GET a single doctor
router.get("/:id", getDoctor);

//Post a new doctor
router.post("/", createDoctor);

//DELETE a doctor
router.delete("/:id", deleteDoctor);

//UPDATE a doctor
router.patch("/:id", updateDoctor);

module.exports = router;
