const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const medicineSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: false,
    },

    desc: {
      type: String,
      required: true,
    },

    quantity: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Medicine", medicineSchema);
