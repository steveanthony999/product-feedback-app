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
    status: {
      type: String,
      enum: ['Suggestion', 'Planned', 'In-Progress', 'Live'],
      default: 'Suggestion',
    },
    description: {
      type: String,
      required: [true, 'Please enter a description'],
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    commentLength: {
      type: Number,
      default: 0,
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
