// models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  guests: [String],
  acceptCommunications: Boolean,
  selectedDate: Date,
  selectedTime: String,
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
