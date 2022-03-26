const mongoose = require('mongoose');

const feedbackSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    category: {
      type: String,
      required: [true, 'Please select a category'],
      enum: ['UI', 'UX', 'Enhancement', 'Bug', 'Feature'],
    },
    description: {
      type: String,
      required: [true, 'Please enter a description'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Feedback', feedbackSchema);

// productRequests [
//     {
//       "id": 1, -- Mongo already includes this
//       "title": "Add tags for solutions",
//       "category": "enhancement",
//       "upvotes": 112,
//       "status": "suggestion",
//       "description": "Easier to search for solutions based on a specific stack.",
//       "comments": [
