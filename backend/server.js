require("dotenv").config();

const express = require("express");
const postRoutes = require("./routes/posts");

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

app.get("/");
//listen for requests
app.listen(process.env.PORT, () => {
  console.log("listeneing on port ", process.env.PORT);
});
