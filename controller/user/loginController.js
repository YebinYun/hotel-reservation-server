const userModel = require("../../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// 로그인 컨트롤러
const loginController = async (req, res) => {
  const { userId, password } = req.body;

  const existing = await userModel.findOne({
    userId: userId,
  });

  if (existing) {
    bcrypt.compare(password, existing.password, (err, result) => {
      if (result) {
        jwt.sign(
          { userId: userId },
          "Hello!",
          { expiresIn: 60 * 1000 * 10 },
          function (err, token) {
            res.status(200).json({
              resultCode: 200,
              data: {
                userName: existing.userName,
                userId: existing.userId,
                likes: existing.likes,
                token: token,
                password: null,
              },
            });
          }
        );
      } else {
        return res.status(404).send({
          message: "로그인 실패",
          resultCode: 9999,
          data: null,
        });
      }
    });
  }
};

module.exports = loginController;
