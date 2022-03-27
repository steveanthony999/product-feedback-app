const mongoose = require('mongoose');

const commentsSchema = mongoose.Schema(
  {
    feedback: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Feedback',
    },
    content: {
      type: String,
      required: [true, 'Please add a comment'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Comment', commentsSchema);

// {
//     "id": 1,
//     "content": "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
//     "user": {
//       "image": "./assets/user-images/image-suzanne.jpg",
//       "name": "Suzanne Chang",
//       "username": "upbeat1811"
//     }
//   },
