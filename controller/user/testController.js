const Test = require("../../models/TestModel.js");

const testController = async (req, res) => {
  await Test.findOne({ userId: "yebin" })

    .then((user) => {
      if (user.length) return res.status(404).send({ err: "User not found" });
      res.status(200).send(`find successfully: ${user}`);
    })
    .catch((err) => res.status(500).send(err));

  // res.send("@@ 유저 페이지");
};

module.exports = testController;
