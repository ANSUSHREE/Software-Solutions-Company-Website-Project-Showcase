const express = require('express');
const multer = require('multer');
const CareerApplication = require('../models/CareerApplication');
const router = express.Router();
const path = require('path');

// File upload config
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// POST API to handle form data
router.post('/', upload.single('file'), async (req, res) => {
    try {
        const { name, email, position, message } = req.body;
        const resumePath = req.file?.path || '';

        const newApp = new CareerApplication({
            name, email, position, message, resumePath
        });

        await newApp.save();
        res.status(201).json({ message: "Application submitted successfully." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
