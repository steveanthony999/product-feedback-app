const express = require('express');
const router = express.Router();
const {
  getFeedbacks,
  getFeedback,
} = require('../controllers/feedbackController');

// Reroute into comment router
const commentRouter = require('./commentRoutes');
router.use('/:feedbackId/comments', commentRouter);

router.route('/').get(getFeedbacks);

router.route('/:id').get(getFeedback);
//   .delete(protect, deleteTicket)
//   .put(protect, updateTicket);

module.exports = router;
