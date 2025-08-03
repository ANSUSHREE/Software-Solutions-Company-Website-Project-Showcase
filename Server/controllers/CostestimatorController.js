const CostEstimator = require('../models/Costestimator');

exports.submitEstimate = async (req, res) => {
  try {
    const formData = req.body;
    
    // Transform the data to match our schema
    const estimateData = {
      serviceType: formData.serviceType,
      ...formData,
      // Handle nested fields specifically if needed
      contactForm: formData.contactForm || {},
      timezoneSupport: formData.timezoneSupport || {},
      organizationalQuestions: formData.organizationalQuestions || {},
      otherOptions: formData.otherOptions || {}
    };

    const estimate = new CostEstimator(estimateData);
    await estimate.save();
    
    res.status(201).json({
      success: true,
      message: 'Estimate submitted successfully',
      data: estimate
    });
  } catch (error) {
    console.error('Error submitting estimate:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit estimate',
      error: error.message
    });
  }
};

exports.getAllEstimates = async (req, res) => {
  try {
    const estimates = await CostEstimator.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: estimates
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch estimates',
      error: error.message
    });
  }
};