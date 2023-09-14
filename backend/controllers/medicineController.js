const Medicine = require("../models/medicineModel");
const mongoose = require("mongoose");

//get all medicines
const getMedicines = async (req, res) => {
  const medicines = await Medicine.find({}).sort({ createdAt: -1 });

  res.status(200).json(medicines);
};

//get single medicine

const getMedicine = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such medidcine" });
  }

  const medicine = await Medicine.findById(id);

  if (!medicine) {
    return res.status(404).json({ error: "No such medicine" });
  }
  res.status(200).json(medicine);
};

//create new medicine
const createMedicine = async (req, res) => {
  try {
    const {
      pharmacyId,
      batchNumber,
      name,
      company,
      quantity,
      expiryDate,
      type,
    } = req.body;

    // Check if the medicine with the same batch number and name exists in the same pharmacy
    const existingMedicine = await Medicine.findOne({
      pharmacyId,
      batchNumber,
      name,
      company,
    });

    if (existingMedicine) {
      return res.status(400).json({ error: "Duplicate medicine entry" });
    }

    const medicine = {
      pharmacyId,
      batchNumber,
      name,
      company,
      quantity,
      expiryDate,
      type,
    };

    const json = await Medicine.create(medicine);

    res.status(201).json(json);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

//delete a medicine

const deleteMedicine = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such medicine" });
  }

  const medicine = await Medicine.findByIdAndDelete({ _id: id });

  if (!medicine) {
    return res.status(404).json({ error: "No such medicine" });
  }

  res.status(200).json(medicine);
};

//update a post

const updateMedicine = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such medicine" });
  }

  const medicine = await Medicine.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!medicine) {
    return res.status(404).json({ error: "No such medicine" });
  }
  res.status(200).json(medicine);
};

// Get pharmacy locations for a specific medicine
const getPharmacyLocations = async (req, res) => {
  try {
    const { medicineId } = req.params;
    // Logic to retrieve pharmacy locations related to the specific medicine
    // You'll need to implement this based on your project's requirements
    const pharmacyLocations = [];
    res.status(200).json(pharmacyLocations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

//Get medicine suggestions
const getMedicineSuggestions = async (req, res) => {
  try {
    const { searchValue } = req.query; // Get the search value from query parameters
    const regex = new RegExp(searchValue, "i"); // Case-insensitive regex pattern

    // Use the aggregation framework to group and return unique medicine names
    const suggestions = await Medicine.aggregate([
      {
        $match: { name: regex }, // Filter by search value
      },
      {
        $group: {
          _id: "$name", // Group by medicine name
        },
      },
      {
        $project: {
          _id: 0, // Exclude _id field
          name: "$_id", // Rename _id as name
        },
      },
    ]).limit(10);

    res.json(suggestions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createMedicine,
  getMedicines,
  getMedicine,
  deleteMedicine,
  updateMedicine,
  getPharmacyLocations,
  getMedicineSuggestions,
};
