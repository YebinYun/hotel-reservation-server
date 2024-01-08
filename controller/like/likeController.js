const LikeModel = require("../../models/likeModel");
const userModel = require("../../models/userModel");

const LikeController = async (req, res) => {
  const { userId } = req.query;

  const userData = await userModel.findOne({ _id: userId });

  if (!userData) return res.status(404).json({ message: "no user" });

  try {
    if (userData.likes.includes("a1")) {
      const index = userData.likes.indexOf("a1");
      userData.splice(index, 1);
      userData.save().then().catch();
    } else {
      userData.likes.push();
      userData.save().then().catch();
    }
  } catch (error) {}

  await userModel
    .findOne({ _id: userId })
    .then(() => {
      res.setHeader("Access-Control-Allow-origin", "*");
      res.setHeader("Access-Control-Allow-Credentials", "true");

      res.status(200).send(`find successfully: ${userId}`);
    })
    .catch((err) => {
      res.status(500).send(err);
      console.log("@@err =====> ", err);
    });
};

module.exports = LikeController;
