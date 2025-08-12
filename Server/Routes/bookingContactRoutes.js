const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactBookingController') // Make sure path is correct
const upload = require('../config/multer')

// For JSON data (without file upload)
// router.post('/', contactController.createContact);

// if using file uploads
router.post('/', upload.single('file'), contactController.createContact);

router.get('/', contactController.getContacts);

module.exports = router;