const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema(
  {
    userId: { type: String, unique: true, ref: "user" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("session", sessionSchema);
