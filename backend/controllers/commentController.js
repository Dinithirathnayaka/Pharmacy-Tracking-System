const Comment = require("../models/commentModel");
const multer = require("multer");
const mongoose = require("mongoose");

//GET all comments
const getComments = async (req, res) => {
  const comments = await Post.find({}).sort({ createdAt: -1 });

  res.status(200).json(comments);
};

//GET single comment
const getComment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such comment" });
  }

  const comment = await Post.findById(id);

  if (!comment) {
    return res.status(404).json({ error: "No susch comment" });
  }
  res.status(200).json(comment);
};

//storage
const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single("commentimage");

//Create a new comment
const createComment = async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const newComment = new Comment({
        desc: req.body.desc,
        image: {
          data: req.file.filename,
          contentType: "image/png",
        },
      });
      newComment
        .save()
        .then(() => res.send("successfully uploaded"))
        .catch((err) => console.log(err));
    }
  });
};

//DELETE a comment
const deleteComment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such comment" });
  }

  const comment = await Comment.findByIdAndDelete({ _id: id });

  if (!comment) {
    return res.status(404).json({ error: "No susch comment" });
  }

  res.status(200).json(comment);
};

//UPDATE a single comment
const updateComment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such comment" });
  }

  const comment = await Comment.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!comment) {
    return res.status(404).json({ error: "No susch comment" });
  }
  res.status(200).json(comment);
};

module.exports = {
  createComment,
  getComments,
  getComment,
  deleteComment,
  updateComment,
};
