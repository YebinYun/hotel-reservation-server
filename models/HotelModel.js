require("dotenv").config();

const mongoose = require("mongoose");

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
