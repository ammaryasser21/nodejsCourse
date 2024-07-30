const express = require("express");
const app = express();
const courses = require("./routes/courses");

app.use(express.json());

app.use("/api/courses", courses);

app.use((req, res) => {
  res.status(404).json({ error: "Resource not found" });
});

app.listen(4000, () => {
  console.log("listening on port: 4000");
});
