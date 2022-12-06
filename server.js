const express = require("express");
const app = express();
const apiRouter = require("./routes");

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

app.get("*", (req, res) => {
  res.json({ msg: "Route not found" });
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Server is up and running");
});
