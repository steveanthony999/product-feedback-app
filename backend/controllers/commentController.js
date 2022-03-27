const asyncHandler = require('express-async-handler');

// const User = require('../models/userModel');
const Feedback = require('../models/feedbackModel');
const Comment = require('../models/commentModel');

// @desc    Get Comments for a Feedback Item
// @route   GET /api/feedbacks/:feedbackId/comments
// @access  Public
const getComments = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  //   const user = await User.findById(req.user.id);

  //   if (!user) {
  //     res.status(401);

  //     throw new Error('User not found');
  //   }
  const feedback = await Feedback.findById(req.params.feedbackId);

  //   if (feedback.user.toString() !== req.user.id) {
  //     res.status(401);

  //     throw new Error('User not authorized');
  //   }

  const comments = await Comment.find({ feedback: req.params.feedbackId });

  res.status(200).json(comments);
});

// @desc    Create ticket note
// @route   POST /api/tickets/:ticketId/notes
// @access  Private
// const addNote = asyncHandler(async (req, res) => {
// Get user using the id in the JWT
//   const user = await User.findById(req.user.id);

//   if (!user) {
//     res.status(401);

//     throw new Error('User not found');
//   }

//   const ticket = await Ticket.findById(req.params.ticketId);

//   if (ticket.user.toString() !== req.user.id) {
//     res.status(401);

//     throw new Error('User not authorized');
//   }

//   const note = await Note.create({
//     text: req.body.text,
//     isStaff: false,
//     ticket: req.params.ticketId,
//     user: req.user.id,
//   });

//   res.status(200).json(note);
// });

module.exports = {
  getComments,
  //   addNote,
};
