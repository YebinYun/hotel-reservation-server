const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    hotelName: String,
    hotelLocation: String,
    likes: [mongoose.Types.ObjectId], // 요건 옵션.. ㅋ
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Hotel", hotelSchema);

// 상품 Schema
// 상품 Schema 안에
// hearts 항목이 있어야 되고. Array로..
// 그 Array에 userId를 넣음.
