const UserModel = require("../../models/userModel");
const bcrypt = require("bcrypt");

// 회원가입 컨트롤러
const userRegisterController = async (req, res) => {
  const { userName, userId, birthDay, email, password, phoneNumber } = req.body;

  // 아이디 공백 방지 (입력값 : 이름, 아이디, 비밀번호)
  if (!userName || !userId || !password) {
    return res.status(200).send({
      resultCode: 9999,
      data: null,
      message: "빈칸에 입력값을 확인해주세요.",
    });
  } else {
    // 아이디 중복 방지 (이름, 비밀번호 : 중복 O / 아이디 : 중복 X)
    const existingUser = await UserModel.findOne({ userId: userId });

    if (!existingUser) {
      try {
        const mySalt = 10;
        bcrypt.genSalt(mySalt, function (err, salt) {
          bcrypt.hash(password, salt, async function (err, hash) {
            if (hash) {
              await UserModel.create({
                userName: userName,
                userId: userId,
                birthDay: birthDay,
                email: email,
                password: hash,
                phoneNumber: phoneNumber,
              })
                .then((newUser) => {
                  if (newUser) {
                    return res.status(200).send({
                      message: "가입이 완료 되었습니다.",
                      resultCode: 200,
                      data: newUser,
                    });
                  }
                })
                .catch((err) => {
                  return res.status(200).send({
                    message: "가입 중 에러가 발생했습니다.",
                    resultCode: 9999,
                    data: err,
                  });
                });
            }
          });
        });
      } catch (err) {
        throw new Error(err);
      }
      // 유저아이디랑 동일한 아이디로 가입을 할 경우
    } else {
      res.status(200).send({
        message: "회원가입이 된 정보입니다.",
        resultCode: 9999,
        data: existingUser,
      });
    }
  }
};

module.exports = userRegisterController;
