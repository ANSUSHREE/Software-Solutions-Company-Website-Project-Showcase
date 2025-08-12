const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/', async (req, res) => {
  try{
  await bookingController.createBooking(req, res);
  }
   catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to Book slot.' });
  }
});

module.exports = router;
