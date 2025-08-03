const Career = require('../models/Career');

exports.submitCareerForm = async (req, res) => {
  try {
    const career = new Career(req.body);
    await career.save();
    res.status(201).json({ message: 'Application submitted successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
