const userModel = require("../../models/userModel");

const LikeController = async (req, res) => {
  const { userId, hotelId } = req.query;
  const userData = await userModel.findOne({ _id: userId });

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

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  res.status(200).json({
    data: userData,
    message: `Successfully updated likes for user: ${userId}`,
  });
};

module.exports = LikeController;
