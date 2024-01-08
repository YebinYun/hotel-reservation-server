const userModel = require("../../models/userModel");
const hotelList = require("../../controller/like/hotelList.json"); // 경로는 실제 경로로 수정해주세요

const LikeController = async (req, res) => {
  const { userId, likeHotelId } = req.query;
  const userData = await userModel.findOne({ _id: userId });

  if (!userData) return res.status(404).json({ message: "No user" });

  const selectedHotel = hotelList.find((hotel) => hotel.hotelID === likeHotelId);

  if (!selectedHotel) return res.status(404).json({ message: "No hotel found" });

  try {
    if (userData.likes.includes(likeHotelId)) {
      const index = userData.likes.indexOf(likeHotelId);
      userData.likes.splice(index, 1);
    } else {
      userData.likes.push(likeHotelId);
    }

    await userData.save();
  } catch (error) {
    console.error("Error in LikeController:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  res.status(200).json({ message: `Successfully updated likes for user: ${userId}` });
};

module.exports = LikeController;
