const ListModel = require("../../models/ListModel");

const hotelController = async (req, res) => {
  await ListModel.find()
    .limit(100)
    .then((data) => {
      res.setHeader("Access-Control-Allow-origin", "*");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.status(200).json(data);
    })
    .catch((err) => res.status(500).send(err));
};

module.exports = hotelController;
