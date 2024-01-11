const mongoose = require("mongoose");
const { connectHotelDb } = require("../routes/dbSwitcher");

const hotelInfo = mongoose.connection.useDb("example_airbnb");

const listSchema = new mongoose.Schema(
  {
    _id: mongoose.Types.ObjectId,
    listing_url: String,
    name: String,
    summary: String,
    space: String,
    description: String,
    neighborhood_overview: String,
    notes: String,
    transit: String,
    access: String,
    interaction: String,
    house_rules: String,
    property_type: String,
    room_type: String,
    bed_type: String,
    minimum_nights: String,
    maximum_nights: String,
    cancellation_policy: String,
    last_scraped: {
      $date: Date,
    },
    calendar_last_scraped: {
      $date: Date,
    },
    first_review: {
      $date: Date,
    },
    last_review: {
      $date: Date,
    },
    accommodates: Number,
    bedrooms: Number,
    beds: Number,
    number_of_reviews: Number,
    bathrooms: {
      $numberDecimal: String,
    },
    amenities: [String],
    price: {
      $numberDecimal: String,
    },
    security_deposit: {
      $numberDecimal: String,
    },
    cleaning_fee: {
      $numberDecimal: String,
    },
    extra_people: {
      $numberDecimal: String,
    },
    guests_included: {
      $numberDecimal: String,
    },
    images: {
      thumbnail_url: String,
      medium_url: String,
      picture_url: String,
      xl_picture_url: String,
    },
    host: {
      host_id: String,
      host_url: String,
      host_name: String,
      host_location: String,
      host_about: String,
      host_response_time: String,
      host_thumbnail_url: String,
      host_picture_url: String,
      host_neighbourhood: String,
      host_response_rate: Number,
      host_is_superhost: Boolean,
      host_has_profile_pic: Boolean,
      host_identity_verified: Boolean,
      host_listings_count: Number,
      host_total_listings_count: Number,
      host_verifications: [String],
    },
    address: {
      street: String,
      suburb: String,
      government_area: String,
      market: String,
      country: String,
      country_code: String,
      location: {
        type: String,
        coordinates: [Number],
        is_location_exact: Boolean,
      },
    },
    availability: {
      availability_30: Number,
      availability_60: Number,
      availability_90: Number,
      availability_365: Number,
    },
    review_scores: {
      review_scores_accuracy: Number,
      review_scores_cleanliness: Number,
      review_scores_checkin: Number,
      review_scores_communication: Number,
      review_scores_location: Number,
      review_scores_value: Number,
      review_scores_rating: Number,
    },
    reviews: [
      {
        _id: String,
        date: {
          $date: Date,
        },
        listing_id: String,
        reviewer_id: String,
        reviewer_name: String,
        comments: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = hotelInfo.model("reviewsAndListings", listSchema);
