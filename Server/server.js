const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const careerRoutes = require('./routes/careerRoutes');
const contactRoutes = require('./routes/contactRoutes');
const bookingRoutes = require('./Routes/bookingRoutes'); // ✅ NEW
const bookingcontactRoutes = require('./Routes/bookingContactRoutes');
const costestimatorRouts = require('./Routes/costestimatorRoutes');

dotenv.config();
const app = express();

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/career', careerRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/booking', bookingRoutes); 
app.use('/api/bookingContact', bookingcontactRoutes);
app.use('/api/Costestimator',costestimatorRouts);   


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(5000, () => console.log("Server running on http://localhost:5000"));
    })
    .catch(err => console.error("MongoDB connection error:", err));
