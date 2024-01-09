const LikeModel = require("../../models/likeModel");
const axios = require("axios");

const userLikeController = async (req, res) => {
  const { hotelId, userId } = req.body;

  axios.get(`/likes?userId=${userId}&hotelId=${hotelId}`);

  LikeModel.create({
    hotelId: hotelId,
    userId: userId,
  })

    .then((res) => {
      if (res) {
        console.log("res", res);
        return res.status(200).send({
          message: "좋아요 클릭 성공",
          resultCode: 200,
          data: res,
        });
      }
    })
    .catch((err) => {
      return res.status(200).send({
        message: "좋아요 실패.",
        resultCode: 9999,
        data: err,
      });
    });
};

module.exports = userLikeController;
