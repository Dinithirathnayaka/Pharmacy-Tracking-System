const express = require("express");
const { getPharmacyLocations } = require("../controllers/searchController");

const router = express.Router();

// Get pharmacy locations for a specific medicine
router.get("/pharmacy-locations/:medicineName", getPharmacyLocations);

module.exports = router;
