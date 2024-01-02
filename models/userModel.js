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

// // Create new user document
// userSchema.static.create = function (payload) {
//   // this === Model
//   const userModel = new this(payload);
//   // return Promise
//   return userModel.save();
// };

// //Find All
// userSchema.static.findAll = function () {
//   return this.find({});
// };

// //Update
// userSchema.static.updateAll = function () {
//   return this.findOneAndUpdate(
//     {
//       userId: userId,
//       userName: userName,
//       password: password,
//       birthDay: birthDay,
//       phoneNumber: phoneNumber,
//       email: email,
//     },
//     payload,
//     { new: true }
//   );
// };

// //Delete
// userSchema.static.deleteAll = function () {
//   return this.remove({
//     userId: userId,
//     userName: userName,
//     password: password,
//     birthDay: birthDay,
//     phoneNumber: phoneNumber,
//     email: email,
//   });
// };

// Create Model & Export
module.exports = mongoose.model("user", userSchema);
