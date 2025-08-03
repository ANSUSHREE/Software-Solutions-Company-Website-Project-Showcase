const Contact = require('../models/BookingContact'); // Import your model

// Your provided controller code goes here
module.exports = {
  createContact: async (req, res) => {
    try {
      const contact = new Contact(req.body);
      await contact.save();
      res.status(201).json({ success: true, data: contact });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },
  getContacts: async (req, res) => {
    try {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      res.status(200).json({ success: true, data: contacts });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
};