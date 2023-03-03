const Post = require("../models/postModel");
const multer = require("multer");
const mongoose = require("mongoose");

//get all posts
const getPosts = async (req, res) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });

  res.status(200).json(posts);
};

//get single post

const getPost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such post" });
  }

  const post = await Post.findById(id);

  if (!post) {
    return res.status(404).json({ error: "No susch post" });
  }
  res.status(200).json(post);
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
}).single("testimage");

//create new post
const createPost = async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const newPost = new Post({
        title: req.body.title,
        desc: req.body.desc,
        image: {
          data: req.file.filename,
          contentType: "image/png",
        },
      });
      newPost
        .save()
        .then(() => res.send("successfully uploaded"))
        .catch((err) => console.log(err));
    }
  });
};

//delete a post

const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such post" });
  }

  const post = await Post.findByIdAndDelete({ _id: id });

  if (!post) {
    return res.status(404).json({ error: "No susch post" });
  }

  res.status(200).json(post);
};

//update a post

const updatePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such post" });
  }

  const post = await Post.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!post) {
    return res.status(404).json({ error: "No susch post" });
  }
  res.status(200).json(post);
};

module.exports = {
  createPost,
  getPosts,
  getPost,
  deletePost,
  updatePost,
};
