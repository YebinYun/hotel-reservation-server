const LikeModel = require("../../models/likeModel");
const userModel = require("../../models/userModel");

const LikeController = async (req, res) => {
  const { userId } = req.query;

  await userModel
    .findOne({ _id: userId })
    .then(() => {
      res.setHeader("Access-Control-Allow-origin", "*");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      console.log("@@result =====> ", userId);
    })
    .catch((err) => {
      console.log("@@err =====> ", err);
    });
};

module.exports = LikeController;
