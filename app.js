// require("dotenv").config();
// import("dotenv").config();
// const dotenv = require("dotenv").config();

require("dotenv").config();

const mongoUri = process.env.MONGO_URI;
const Port = process.env.PORT;

// import express, { urlencoded, json } from "express";
const express = require("express");
const { urlencoded, json } = require("express");
// const urlencoded = require("express");
// const json = require("express");
// import { connect } from "mongoose";
const { connect } = require("mongoose");
// import userRouter from "./routes/user.js";
const userRouter = require("./routes/user.js");

const app = express();

// const { PORT, MONGO_URI } = process.env;

// app.use(static("public"));
app.use(urlencoded({ extended: true }));
app.use(json());
// app.set("PORT", 5500);
const PORT = 3500;
app.use("/test", userRouter);

connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));

app.listen(PORT, () => console.log(`Server listening on port ${Port}`));
