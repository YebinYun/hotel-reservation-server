require("dotenv").config();

const mongoUri = process.env.MONGO_URI;
const Port = process.env.PORT;

const fs = require("fs");
const http = require("http");
const express = require("express");
const app = express();

const { urlencoded, json } = require("express");
const { connect } = require("mongoose");
const router = require("./routes/user.js");

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(express.static("public"));

app.use("/", router);

// app.use("/", (req, res) => {
//   res.sendFile(__dirname + "/~~~");
// });

// app.use("/cart", (req, res) => {
//   res.send("@@ 카트 페이지~!");
// });

connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));

app.listen(Port, () => console.log(`Server listening on port ${Port}`));
