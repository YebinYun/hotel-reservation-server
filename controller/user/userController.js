const UserModel = require("../../models/userModel");

const userController = async (req, res) => {
  await UserModel.find()
    .then((user) => {
      if (!user.length) return res.status(404).send({ err: "User not found" });
      res.send(`find successfully: ${user}`);
    })
    .catch((err) => res.status(500).send(err));

  // res.send("@@ 유저 페이지");
};

module.exports = userController;
