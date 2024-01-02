const UserModel = require("../../models/userModel");

const userController = async (req, res) => {
  // const { id } = req.params;

  // const User = await UserModel.find({});

  // console.log("User====>", User);

  // res.status(200).json(id);

  await UserModel.find()
    .then((user) => {
      if (!user.length) return res.status(404).send({ err: "User not found" });
      res.send(`find successfully: ${user}`);
    })
    .catch((err) => res.status(500).send(err));
};

module.exports = userController;
