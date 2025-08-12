const mongoose = require('mongoose');

const careerApplicationSchema = new mongoose.Schema({
    name: String,
    email: String,
    position: String,
    message: String,
    resumePath: String,
}, { timestamps: true });

module.exports = mongoose.model('CareerApplication', careerApplicationSchema);
