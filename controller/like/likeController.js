const userModel = require("../../models/userModel");

// 로그인한 유저에 데이터에서 좋아요 정보를 저장하는 컨트롤러
const LikeController = async (req, res) => {
  const { userId, hotelId } = req.query;
  const userData = await userModel.findOne({ userId: userId });

  if (!userData) return res.status(404).json({ message: "No user" });

  try {
    if (userData.likes.includes(hotelId)) {
      const index = userData.likes.indexOf(hotelId);
      userData.likes.splice(index, 1);
    } else {
      userData.likes.push(hotelId);
    }

    await userData.save();
  } catch (error) {
    return res.status(500).json(error);
  }

  res.status(200).json({
    data: userData,
    message: `Successfully updated likes for user: ${userId}`,
  });
};

module.exports = LikeController;
