const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    hotelId: { type: mongoose.Types.ObjectId, ref: "Hotel", require: true },
    userId: [{ type: mongoose.Types.ObjectId, ref: "User", require: true }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Like", likeSchema);

// 상품 Schema
// 상품 Schema 안에
// hearts 항목이 있어야 되고. Array로..
// 그 Array에 userId를 넣음.
