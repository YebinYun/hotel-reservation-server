const userModel = require("../../models/userModel");
const bcrypt = require("bcrypt");

const authController = async (req, res) => {
  const { userId, password } = req.body;

  const existing = await userModel.findOne({
    userId: userId,
  });

  if (existing) {
    bcrypt.compare(password, existing.password, (err, result) => {
      if (result) {
        return res.status(200).send({
          message: "로그인 성공",
          resultCode: 200,
          data: null,
        });
      } else {
        return res.status(200).send({
          message: "로그인 실패",
          resultCode: 9999,
          data: null,
        });
      }
    });
  }
};

module.exports = authController;
