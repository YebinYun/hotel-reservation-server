const userModel = require("../../models/userModel");
const axios = require("axios");

const userLikeController = async (req, res) => {
  const { hotelId, userId } = req.body;

  console.log(userId);
  console.log(hotelId);

  axios
    .get(`/likes?userId=${userId}&hotelId=${hotelId}`)
    .then(function (res) {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
};

module.exports = userLikeController;
