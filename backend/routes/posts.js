const express = require("express");

const router = express.Router();

//GET all posts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all posts" });
});

//GET a single post
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single post" });
});

//POST a new post
router.post("/", (req, res) => {
  res.json({ mssg: "POST a new post" });
});

//DELETE  a post
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a post" });
});

//UPDATE a post
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a post" });
});

module.exports = router;
