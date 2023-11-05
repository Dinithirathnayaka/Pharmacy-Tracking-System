const Post = require("../models/postModel");
const User = require("../models/userModel");
const multer = require("multer");
const mongoose = require("mongoose");

//get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ createdAt: -1 });
    let postnew = [];

    for (let index = 0; index < posts.length; index++) {
      const element = posts[index];
      const user = await User.findOne(element.created_by); // Use await here to ensure user data is fetched before continuing.

      // Combine user and post data into one object
      const combinedData = {
        post: element,
        user: user,
      };

      postnew.push(combinedData);
    }
    console.log(postnew);
    // res.status(200).json({ postnew });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
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
    const timestamp = Date.now(); // Get the current timestamp
    const extension = file.originalname.split(".").pop(); // Get the file extension

    // Construct the unique filename as timestamp + extension
    const uniqueFilename = `${timestamp}.${extension}`;

    cb(null, uniqueFilename);
  },
});

const upload = multer({
  storage: Storage,
}).single("image");

//create new post

const createPost = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "File upload error" });
    }

    try {
      // Create post with  description, and image data
      const imageUrl = `/uploads/${req.file.filename}`;

      // Create post with description, and image URL
      const post = await Post.create({
        // title: req.body.title,
        desc: req.body.desc,
        image: req.file.filename,
        created_by: req.body.created_by,
      });
      res.status(200).json(post);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
    }
  });
};

// const createPost = async (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       const newPost = new Post({
//         title: req.body.title,
//         desc: req.body.desc,
//         image: {
//           data: req.file.filename,
//           contentType: "image/png",
//         },
//       });
//       newPost
//         .save()
//         .then(() => res.send("successfully uploaded"))
//         .catch((err) => console.log(err));
//     }
//   });
// };

// const createPost = async (req, res) => {
//   upload(req, res, async (err) => {
//     try {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ error: "File upload error" });
//       } else {
//         const newPost = new Post({
//           title: req.body.title,
//           desc: req.body.desc,
//           image: {
//             data: req.file.filename,
//             contentType: req.file.mimetype,
//           },
//         });

//         await newPost.save();
//         res.status(200).json(post);
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Internal server error" });
//     }
//   });
// };

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

//like & dislike  a post
// const likePost = async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     if (!post.likes.includes(req.body.userId)) {
//       await post.updateOne({ $push: { likes: req.body.userId } });
//       res.status(200).json("The post has been liked");
//     } else {
//       await post.updateOne({ $pull: { likes: req.body.userId } });
//       res.status(200).json("The post has been disliked");
//     }
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

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
  // likePost,
};
