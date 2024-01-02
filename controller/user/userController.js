const mongoose = require("mongoose");
// const User = mongoose.model("user", userSchema);
const User = require("../../models/userModel");

const userController = async (req, res) => {
  const { id } = req.params;
  const a = await User.find({});
  console.log("a", a);
  res.status(200).json(id);
};

module.exports = userController;
