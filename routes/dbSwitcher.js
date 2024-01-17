require("dotenv").config();

const mongoose = require("mongoose");
const mongoUri = process.env.MONGO_URI;

const connectHotelDb = () => {
  try {
    const hotelDb = mongoose.createConnection(mongoUri, {
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
