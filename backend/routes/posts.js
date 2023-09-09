const express = require("express");
const {
  createPost,
  getPosts,
  getPost,
  deletePost,
  updatePost,
  likePost,
} = require("../controllers/postController");
// const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

//require auth for all post post routes
// router.use(requireAuth);

//GET all posts
router.get("/", getPosts);

//GET a single post
router.get("/:id", getPost);

//POST a new post
router.post("/", createPost);

//DELETE  a post
router.delete("/:id", deletePost);

//LIKE a post
// router.put("/:id/like", likePost);

//UPDATE a post
router.patch("/:id", updatePost);

module.exports = router;
