require("dotenv").config();

const mongoUri = process.env.MONGO_URI;
const Port = process.env.PORT;

const cors = require("cors");
const express = require("express");
const app = express();

const { urlencoded, json } = require("express");
const { connect } = require("mongoose");
const router = require("./routes/route.js");

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(express.static("public"));
app.use(cors());
app.use("/", router);

connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));

app.listen(Port, () => console.log(`Server listening on port ${Port}`));
