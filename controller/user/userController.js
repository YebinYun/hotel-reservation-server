const UserModel = require("../../models/userModel");

const userController = async (req, res) => {
  await UserModel.find()
    .then((user) => {
      console.log("user", user);

      if (!user.length) return res.status(404).send({ err: "User not found" });
      res.setHeader("Access-Control-Allow-origin", "*");
      res.setHeader("Access-Control-Allow-Credentials", "true");

      res.status(200).send(`find successfully: ${user}`);
    })
    .catch((err) => res.status(500).send(err));
};

// const getUser = await UserModel.create({
//   userName: userName,
//   userId: userId,
//   birthDay: birthDay,
//   email: email,
//   password: password,
//   phoneNumber: phoneNumber,
// })
//   .then((newUser) => {
//     if (newUser) {
//       res.status(200).send({
//         message: "ok",
//         resultCode: 200,
//         data: newUser,
//       });
//     }
//   })
//   .catch((err) => {
//     res.status(401).send({
//       message: err,
//       resultCode: 401,
//       data: null,
//     });
//   });

module.exports = userController;
