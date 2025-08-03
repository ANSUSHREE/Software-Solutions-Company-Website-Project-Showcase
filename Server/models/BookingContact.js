const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookingContactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  file: { type: String, default: null },
  status: { 
    type: String, 
    enum: ['new', 'contacted', 'archived'], 
    default: 'new' 
  }
}, { 
  timestamps: true
});

// Explicitly set the collection name here
module.exports = mongoose.model('BookingContact', bookingContactSchema, 'booking_contacts');