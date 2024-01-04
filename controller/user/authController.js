const userModel = require("../../models/userModel");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
  const { userId, password } = req.body;

  console.log("userId", userId);
  console.log("password", password);

  const existing = await userModel.findOne({
    userId: userId,
  });

  if (existing) {
    bcrypt.compare(password, existing.password, function (err, result) {
      if (result) {
        return res.status(200).send({
          message: "로그인 ok",
          resultCode: 200,
          data: null,
        });
      } else {
        return res.status(200).send({
          message: "로그인 NO",
          resultCode: 9999,
          data: null,
        });
      }
    });
  }
};

module.exports = loginController;
