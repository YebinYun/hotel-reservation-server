const mongoose = require('mongoose');

// Define Schemes
const heartSchema = new mongoose.Schema({
  hotelId: { type: String, required: true, unique: true },
  dateAdded: { type: String, required: true },
  userId: { 
    type: mongoose.Types.ObjectId,
    required: true,
    references: [{
        type: mongoose.Schema.Types.Mixed,
        refPath: 'User'
    }]
},
{
  timestamps: true
});

// Create Model & Export
module.exports = mongoose.model('Heart', heartSchema);