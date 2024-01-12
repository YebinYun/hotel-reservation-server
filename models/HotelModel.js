require("dotenv").config();

const mongoose = require("mongoose");
// const mongoUri2 = process.env.AIRBNB_URI;
// const conn2 = mongoose.createConnection(mongoUri2);
// mongoose.connect(mongoUri2, {
//   useNewUrlParser: true,
// });

const hotelSchema = new mongoose.Schema(
  {
    hotelName: String,
    hotelLocation: String,
    likes: [mongoose.Types.ObjectId],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Hotel", hotelSchema);
