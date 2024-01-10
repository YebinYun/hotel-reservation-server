const { default: mongoose } = require("mongoose");

const connectHotelDb = () => {
  try {
    const hotelDb = mongoose.createConnection(
      "mongodb+srv://yebind_db:420KiTh4j8juzRQS@cluster0.c1xv4jl.mongodb.net/sample_airbnb",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    return { hotelDb };
  } catch (error) {
    console.error(`Error:${error.message}`);
    process.exit(1);
  }
};

module.exports = { connectHotelDb };
