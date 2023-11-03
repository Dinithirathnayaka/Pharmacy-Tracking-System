const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    // title: {
    //   type: String,
    //   required: true,
    // },

    desc: {
      type: String,
      required: true,
    },

    image: {
      type: String,
    },
    createdBy: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
