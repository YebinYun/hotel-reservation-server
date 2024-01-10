const { connectHotelDb } = require("../../routes/dbSwithcer");

module.exports = async (req, res) => {
  const { hotelDb } = connectHotelDb();

  const a = hotelDb.collection("listingsAndReviews");

  const b = a.findOne({ _id: "10009999" });

  res.status(200).json(b);
};
