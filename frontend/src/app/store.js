import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import feedbackReducer from '../features/feedbacks/feedbackSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    feedbacks: feedbackReducer,
  },
});
