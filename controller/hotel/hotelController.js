const HotelModel = require("../../models/HotelModel");
const ListModel = require("../../models/ListModel");
// const { connectHotelDb } = require("../../routes/dbSwitcher");

const hotelController = async (req, res) => {
  // const { hotelDb } = connectHotelDb();

  await ListModel.find()
    .limit(100)
    .then((data) => {
      res.setHeader("Access-Control-Allow-origin", "*");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      // const a = hotelDb
      //   .collection("listingsAndReviews")
      //   .find({ $and: [{ beds: { $gt: 3 } }] })
      //   // .find({})
      //   // .find()
      //   // .limit(5)
      //   // .toArray()

      //   .then((result) => {
      //     res.status(200).json({
      //       resultCode: 1000,
      //       data: result,
      //       // picture_url: result.images.picture_url, // 호텔 사진
      //       // name: result.name, // 호텔 이름
      //       // score: result.review_scores.review_scores_rating, // 호텔 점수
      //       // price: result.price, // 호텔 가격
      //       // address: result.address.location.coordinates, // 위치 (위도, 경도)
      //     });
      //   })
      //   .catch((err) => {
      //     console.log("=====>", err);
      //   });
      res.status(200).json(data);
    })
    .catch((err) => res.status(500).send(err));
};

module.exports = hotelController;
