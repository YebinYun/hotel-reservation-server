const mongoose = require("mongoose");
// Define Schemes
const userSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    userName: { type: String, required: true },
    password: { type: String, required: true },
    birthDay: { type: Date, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
