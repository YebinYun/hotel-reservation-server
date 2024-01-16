require("dotenv").config(".env");

const mongoUri = process.env.MONGO_URI;
const Port = process.env.PORT;

const cors = require("cors");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const { urlencoded, json } = require("express");
const { connect } = require("mongoose");
const router = require("./routes/route.js");

app.use(cookieParser(process.env.COOKIE_SELECT));
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

app.get("/", (req, res) => {
  res.send(`Server listening on port ${Port}`);
});
