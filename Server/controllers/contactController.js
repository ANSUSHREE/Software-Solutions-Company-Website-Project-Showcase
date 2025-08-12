const Contact = require('../models/Contact');

exports.submitContactForm = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Message received successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
