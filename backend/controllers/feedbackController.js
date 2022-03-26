const asyncHandler = require('express-async-handler');

const Feedback = require('../models/feedbackModel');

// @desc    Get All Feedback
// @route   GET /api/feedbacks
// @access  Public
const getFeedbacks = asyncHandler(async (req, res) => {
  const feedbacks = await Feedback.find({});

  res.status(200).json(feedbacks);
});

module.exports = { getFeedbacks };
