require("dotenv").config();

const mongoose = require("mongoose");
const mongoUri2 = process.env.AIRBNB_URI;

const connectHotelDb = () => {
  try {
    const hotelDb = mongoose.createConnection(mongoUri2, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    return { hotelDb };
  } catch (error) {
    console.error(`Error:${error.message}`);
    process.exit(1);
  }
};

module.exports = { connectHotelDb };
