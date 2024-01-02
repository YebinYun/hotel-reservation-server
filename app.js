require("dotenv").config();

const mongoUri = process.env.MONGO_URI;
const Port = process.env.PORT;

const express = require("express");
const { urlencoded, json } = require("express");
const { connect } = require("mongoose");
const userRouter = require("./routes/user.js");
const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use("/test", userRouter);

connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));

app.listen(Port, () => console.log(`Server listening on port ${Port}`));
