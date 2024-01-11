const HotelModel = require("../../models/HotelModel");
const ListModel = require("../../models/ListModel");
const { connectHotelDb } = require("../../routes/dbSwitcher");

const hotelController = async (req, res) => {
  const { hotelDb } = connectHotelDb();
  await ListModel.find()
    .then((data) => {
      res.setHeader("Access-Control-Allow-origin", "*");
      res.setHeader("Access-Control-Allow-Credentials", "true");

      const a = hotelDb
        .collection("listingsAndReviews")
        .findOne({ _id })
        .limit(10)
        .then((result) => {
          res.status(200).json({
            resultCode: 1000,
            data: result,
          });
        })
        .catch((err) => {
          console.log("============================================>", err);
        });
    })
    .catch((err) => res.status(500).send(err));
};

module.exports = hotelController;
