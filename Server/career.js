const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  resumeLink: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Career', careerSchema);
