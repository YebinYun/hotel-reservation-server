const UserModel = require("../../models/userModel");

const userRegisterController = async (req, res) => {
  const { userName, userId, birthDay, email, password } = req.body;

  // 나중에 bcrypt 이용해서 암호화 하겠음!! 일단 암호화없이 진행!

  console.log("====>", userName);
  console.log("====>", userId);
  console.log("====>", birthDay);
  console.log("====>", email);
  console.log("====>", password);

  // await UserModel.create({
  //   userName: userName,
  //   userId: userId,
  //   birthDay: birthDay,
  //   email: email,
  //   password: password
  // })
  //   .then((user) => {
  //     console.log("user", user);

  //     if (!user.length) return res.status(404).send({ err: "User not found" });
  //     res.setHeader("Access-Control-Allow-origin", "*");
  //     res.setHeader("Access-Control-Allow-Credentials", "true");

  //     res.status(200).send(`find successfully: ${user}`);
  //   })
  //   .catch((err) => res.status(500).send(err));

  // res.send("@@ 유저 페이지");
};

module.exports = userRegisterController;
