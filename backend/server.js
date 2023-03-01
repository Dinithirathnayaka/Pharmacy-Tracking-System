require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const postRoutes = require("./routes/posts");
const medicineRoutes = require("./routes/medicines");
const doctorRoutes = require("./routes/doctors");
const multer = require("multer");

//express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//upload images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

//routes
app.use("/api/posts", postRoutes);
app.use("/api/medicines", medicineRoutes);
app.use("/api/doctors", doctorRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & listeneing on port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
