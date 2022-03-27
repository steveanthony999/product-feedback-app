const asyncHandler = require('express-async-handler');

const Feedback = require('../models/feedbackModel');

// @desc    Get All Feedback
// @route   GET /api/feedbacks
// @access  Public
const getFeedbacks = asyncHandler(async (req, res) => {
  const feedbacks = await Feedback.find({});

  res.status(200).json(feedbacks);
});

// @desc    Get Feedback
// @route   GET /api/feedbacks/:id
// @access  Public
const getFeedback = asyncHandler(async (req, res) => {
  const feedback = await Feedback.findById(req.params.id); // Gets feedback from url

  if (!feedback) {
    res.status(404);

    throw new Error('Feedback not found');
  }

  res.status(200).json(feedback);
});

module.exports = { getFeedbacks, getFeedback };
