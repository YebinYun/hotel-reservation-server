const mongoose = require("mongoose");
// Define Schemes
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
        type: String, // hotel objectId
        // type: mongoose.Types.ObjectId, // hotel objectId
        ref: "Like",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
