const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    hotelId: { type: mongoose.Types.ObjectId, ref: "HotelList", require: true },
    userId: [{ type: mongoose.Types.ObjectId, ref: "User", require: true }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Like", likeSchema);
