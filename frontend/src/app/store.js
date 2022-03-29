import { configureStore } from '@reduxjs/toolkit';
import feedbackReducer from '../features/feedbacks/feedbackSlice';
import commentReducer from '../features/comments/commentSlice';

export const store = configureStore({
  reducer: {
    feedbacks: feedbackReducer,
    comments: commentReducer,
  },
});
