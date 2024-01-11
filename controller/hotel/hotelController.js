const HotelModel = require("../../models/HotelModel");
const ListModel = require("../../models/ListModel");
const { connectHotelDb } = require("../../routes/dbSwitcher");

const hotelController = async (req, res) => {
  // await HotelModel.find();
  // res.setHeader("Access-Control-Allow-origin", "*");
  // res.setHeader("Access-Control-Allow-Credentials", "true");
  // const { hotelDb } = connectHotelDb();
  // const a = hotelDb.collection("listingsAndReviews");
  // const b = a.findOne({ _id: "10006546" });
  // res.status(200).json(b);

  await HotelModel.find()
    // await ListModel.find()
    .then((data) => {
      res.setHeader("Access-Control-Allow-origin", "*");
      res.setHeader("Access-Control-Allow-Credentials", "true");

      console.log("req ===>", req);

      const { hotelDb } = connectHotelDb();

      const a = hotelDb.collection("listingsAndReviews");
      const b = a.findOne({ _id: "10006546" });

      console.log("@@@ hotelDb ===> ", hotelDb);
      console.log("@@@ a ===> ", a);
      // console.log("@@@ b ===> ", b);

      res.status(200).json(`find successfully: ${data}`);
    })
    .catch((err) => res.status(500).send(err));
};
module.exports = hotelController;
