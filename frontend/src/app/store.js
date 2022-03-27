import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import feedbackReducer from '../features/feedbacks/feedbackSlice';
import commentReducer from '../features/comments/commentSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    feedbacks: feedbackReducer,
    comments: commentReducer,
  },
});
