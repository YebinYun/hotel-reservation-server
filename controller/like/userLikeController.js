const userModel = require("../../models/userModel");

const userLikeController = async (req, res) => {
  const { hotelId, userId } = req.body;

  console.log(userId);
  console.log(hotelId);

  axios
    .get("/likes?userId=659babc1ae480a83518e7db8")
    .then(function (res) {
      // 성공 핸들링
      console.log(res);
    })
    .catch(function (err) {
      // 에러 핸들링
      console.log(err);
    });
};

module.exports = userLikeController;
