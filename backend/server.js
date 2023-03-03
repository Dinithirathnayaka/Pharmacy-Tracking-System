require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const postRoutes = require("./routes/posts");
const medicineRoutes = require("./routes/medicines");
const doctorRoutes = require("./routes/doctors");
// const multer = require("multer");

//express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
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
