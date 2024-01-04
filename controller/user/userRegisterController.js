const UserModel = require("../../models/userModel");
const bcrypt = require("bcrypt");

const userRegisterController = async (req, res) => {
  console.log("req==========>", req.body);

  const { userName, userId, birthDay, email, password, phoneNumber } = req.body;

  // 나중에 bcrypt 이용해서 암호화 하겠음!! 일단 암호화없이 진행!
  // console.log("req", req);

  if (!userName || !userId || !password) {
    res.setHeader(header);
    return res.status(200).send({
      resultCode: 9999,
      data: null,
      message: "필수 입력값을 확인해주세요.",
    });
  } else {
    const existingUser = await UserModel.findOne({ userId: userId });

    if (!existingUser) {
      try {
        const mySalt = 10;

        bcrypt.genSalt(mySalt, function (err, salt) {
          bcrypt.hash(password, salt, function (err, hash) {
            if (hash) {
              console.log("hash", hash);

              UserModel.create({
                userName: userName,
                userId: userId,
                birthDay: birthDay,
                email: email,
                password: hash,
                phoneNumber: req.body.phoneNumber,
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
                    message: "저장중 에러 발생했습니다.",
                    resultCode: 9999,
                    data: err,
                  });
                });
            }
          });
        });
      } catch (err) {
        console.log("err => ", err);
      }
    } else {
      res.status(200).send({
        message: "벌써 가입해놨어요",
        resultCode: 9999,
        data: existingUser,
      });
    }
  }
  // try {
  //   // const createUser = await UserModel.create({
  //   await UserModel.create({
  //     userName: userName,
  //     userId: userId,
  //     birthDay: birthDay,
  //     email: email,
  //     password: password,
  //     phoneNumber: req.body.phoneNumber,
  //   })
  //     .then((newUser) => {
  //       if (newUser) {
  //         res.status(200).send({
  //           message: "가입이 완료 되었습니다.",
  //           resultCode: 200,
  //           data: newUser,
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       res.status(401).send({
  //         message: "저장중 에러 발생했습니다.",
  //         resultCode: 401,
  //         data: err,
  //       });
  //     });
  // } catch (err) {
  //   console.log("err => ", err);
  // }

  // // ec 콜솔 접속하면 cli 에서 mongodb 라는 라이브러리 다운로드. 그리고 mongodb 라이브러리를 설치해서 db 생성 저장.
  // // 그래서 mongodb 라던지 mysql이라던지 하는 서버를 독립적으로 구축하기도 함.
  // // 일반 개인 프로젝트의 경우 3개(db, fe, be)한개에 다

  // // await UserModel.create({
  // //   userName: userName,
  // //   userId: userId,
  // //   birthDay: birthDay,
  // //   email: email,
  // //   password: password,
  // //   phoneNumber: req.body.phoneNumber,
  // // })
  // //   .then((newUser) => {
  // //     if (newUser) {
  // //       res.status(200).send({
  // //         message: "ok",
  // //         resultCode: 200,
  // //         data: newUser,
  // //       });
  // //     }
  // //   })
  // //   .catch((err) => {
  // //     res.status(401).send({
  // //       message: "저장중 에러 발생했습니다.",
  // //       resultCode: 401,
  // //       data: null,
  // //     });
  // //   });

  // // // Create new User document
  // // router.post("/", (req, res) => {
  // //   User.create(req.body)
  // //     .then((todo) => res.send(todo))
  // //     .catch((err) => res.status(500).send(err));
  // // });

  // // .then((user) => {
  // //   console.log("user", user);

  // // if (!user.length) return res.status(404).send({ err: "User not found" });
  // res.setHeader("Access-Control-Allow-origin", "*");
  // res.setHeader("Access-Control-Allow-Credentials", "true");

  // //     res.status(200).send(`find successfully: ${user}`);
  // //   })
  // //   .catch((err) => res.status(500).send(err));

  // res.status(200).send(req.body);
};

module.exports = userRegisterController;
