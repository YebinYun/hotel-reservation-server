require("dotenv").config();

const mongoUri = process.env.MONGO_URI;
const Port = process.env.PORT;

const fs = require("fs");
const express = require("express");
const app = express();
const http = require("http");

const { urlencoded, json } = require("express");
const { connect } = require("mongoose");
const userRouter = require("./routes/user.js");
var router = express.Router();

app.use(urlencoded({ extended: true }));
app.use(json());

// app.use("/", (req, res) => {
//   res.sendFile(__dirname + "../practice/src/app/layout/");
// });

// app.use("/script", express / static(__dirname + "/script"));

app.use("/", userRouter);

// app.use("/user", (req, res) => {
//   res.send("@@ 유저 페이지");
// });

app.use("/cart", (req, res) => {
  res.send("@@ 카트 페이지");
});

connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));

app.listen(Port, () => console.log(`Server listening on port ${Port}`));
