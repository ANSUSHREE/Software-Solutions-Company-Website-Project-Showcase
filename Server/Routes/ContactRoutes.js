// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(200).json({ message: 'Form submitted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to submit form.' });
  }
});

module.exports = router; // ✅ must export router
