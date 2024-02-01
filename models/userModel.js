const mongoose = require("mongoose");

// DB에 저장된 유저정보와 그 안에 좋아요 정보
const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "아이디가 필요합니다."],
      unique: true,
    },
    userName: { type: String, required: [true, "이름이 필요합니다."] },
    password: { type: String, required: [true, "비밀번호가 필요합니다."] },
    birthDay: { type: Date },
    phoneNumber: { type: String },
    email: { type: String },
    likes: [
      {
        type: String,
        ref: "Like",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
