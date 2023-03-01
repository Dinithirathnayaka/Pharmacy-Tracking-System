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
  const { name, desc, quantity } = req.body;

  //add doc to db
  try {
    const medicine = await Medicine.create({ name, desc, quantity });
    res.status(200).json(medicine);
  } catch (error) {
    res.status(400).json({ error: error.message });
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

module.exports = {
  createMedicine,
  getMedicines,
  getMedicine,
  deleteMedicine,
  updateMedicine,
};
