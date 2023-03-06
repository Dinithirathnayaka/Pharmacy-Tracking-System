const express = require("express");
const {
  getComments,
  getComment,
  createComment,
  deleteComment,
  updateComment,
} = require("../controllers/commentController");

const router = express.Router();

//GET all comments
router.get("/", getComments);

//GET single comment
router.get("/:id", getComment);

//Create a new comment
router.post("/", createComment);

//DELETE a comment
router.delete("/:id", deleteComment);

//UPDATE a single comment
router.patch("/:id", updateComment);

module.exports = router;
