const Doctor = require("../models/doctorModel");
const mongoose = require("mongoose");

//get all doctors
const getDoctors = async (req, res) => {
  const doctors = await Doctor.find({}).sort({ createdAt: -1 });

  res.status(200).json(doctors);
};

//get single doctor

const getDoctor = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such doctor" });
  }

  const doctor = await Doctor.findById(id);

  if (!doctor) {
    return res.status(404).json({ error: "No such doctor" });
  }
  res.status(200).json(doctor);
};

//create new doctor
const createDoctor = async (req, res) => {
  const { name, desc, tel } = req.body;

  //add doc to db
  try {
    const doctor = await Doctor.create({ name, desc, tel });
    res.status(200).json(doctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a doctor

const deleteDoctor = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such doctor" });
  }

  const doctor = await Doctor.findByIdAndDelete({ _id: id });

  if (!doctor) {
    return res.status(404).json({ error: "No such doctor" });
  }

  res.status(200).json(doctor);
};

//update a doctor

const updateDoctor = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such doctor" });
  }

  const doctor = await Doctor.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!doctor) {
    return res.status(404).json({ error: "No such doctor" });
  }
  res.status(200).json(doctor);
};

module.exports = {
  createDoctor,
  getDoctors,
  getDoctor,
  deleteDoctor,
  updateDoctor,
};
