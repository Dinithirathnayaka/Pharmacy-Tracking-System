require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const postRoutes = require("./routes/posts");
const medicineRoutes = require("./routes/medicines");
const commentRoutes = require("./routes/comments");
const userRoutes = require("./routes/users");

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
app.use("/api/comments/", commentRoutes);
app.use("/api/user/", userRoutes);
app.use("/uploads", express.static("uploads"));

// Set the strictQuery option to false to prevent the deprecation warning
mongoose.set("strictQuery", false);

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
