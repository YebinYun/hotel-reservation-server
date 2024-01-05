const UserModel = require("../../models/userModel");

const userController = async (req, res) => {
  await UserModel.find()
    .then((user) => {
      if (!user.length) return res.status(404).send({ err: "User not found" });
      res.setHeader("Access-Control-Allow-origin", "*");
      res.setHeader("Access-Control-Allow-Credentials", "true");

      res.status(200).send(`find successfully: ${user}`);
    })
    .catch((err) => res.status(500).send(err));
};

module.exports = userController;
