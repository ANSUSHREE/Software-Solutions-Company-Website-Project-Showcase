const express = require('express');
const router = express.Router();
const costEstimatorController = require('../controllers/CostestimatorController');

// Submit new cost estimate
router.post('/', costEstimatorController.submitEstimate);

// Get all cost estimates (for admin purposes)
router.get('/', costEstimatorController.getAllEstimates);

module.exports = router;