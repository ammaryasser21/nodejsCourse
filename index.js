const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const coursesRouter = require("./Routes/courses.route");
const usersRouter = require("./Routes/users.route");
const httpStatusText = require("./Utilities/httpStatusText");
require("dotenv").config();

const URL = process.env.MONGODB_URI;
mongoose.connect(URL).then(() => {
  console.log("mongoDB connected successfully");
}); 

app.use(cors());
app.use(express.json());

app.use("/api/courses", coursesRouter);
app.use("/api/users", usersRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Resource not found" });
});
 
//global Middleware for not found routes
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: httpStatusText.ERROR,
    message: "this resource is not available",
  });
});

//Error Handler for 404 responses
app.use((error, req, res, next) => {
  res
    .status(error.statusCode || 500)
    .json({
      status: error.statusText || httpStatusText.ERROR,
      message: error.message,
      code: error.statusCode || 500,
      data: null,
    });
});

app.listen(4000, () => {
  console.log("listening on port: 4000");
});
