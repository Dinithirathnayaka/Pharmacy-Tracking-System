const Post = require("../models/postModel");
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

//create new post
const createPost = async (req, res) => {
  const { title, desc } = req.body;

  //add doc to db
  try {
    const post = await Post.create({ title, desc });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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
