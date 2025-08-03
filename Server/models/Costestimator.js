const mongoose = require('mongoose');

const costEstimatorSchema = new mongoose.Schema({
  serviceType: { type: String, required: true },
  developmentStage: String,
  hasTechTeam: [String],
  longTermPartner: [String],
  teamSize: [String],
  budgetRange: String,
  needDesignHelp: String,
  cloudSupport: String,
  contactForm: {
    name: String,
    email: String
  },
  productIdea: String,
  teamLocation: [String],
  expertiseNeeded: [String],
  projectTimeline: String,
  timezoneSupport: {
    name: String,
    email: String,
    details: String
  },
  projectScope: [String],
  organizationalQuestions: {
    companyType: String,
    projectDeadline: String,
    budgetLimits: String,
    partnerPriorities: [String]
  },
  otherOptions: mongoose.Schema.Types.Mixed,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CostEstimator', costEstimatorSchema);