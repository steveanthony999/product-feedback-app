const express = require('express');
const router = express.Router();
const { getFeedbacks } = require('../controllers/feedbackController');

router.route('/').get(getFeedbacks);

// router.route('/:id');
//   .get(protect, getTicket)
//   .delete(protect, deleteTicket)
//   .put(protect, updateTicket);

module.exports = router;
