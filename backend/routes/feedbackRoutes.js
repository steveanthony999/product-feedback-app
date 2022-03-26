const express = require('express');
const router = express.Router();
const { getFeedbacks } = require('../controllers/feedbackController');

router.route('/').get(getTickets);

module.exports = router;
