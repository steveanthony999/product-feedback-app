import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import feedbackService from './feedbackService';

const initialState = {
  feedbacks: [],
  feedback: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Create New Feedback
export const createFeedback = createAsyncThunk(
  'feedbacks/create',
  async (feedbackData, thunkAPI) => {
    try {
      return await feedbackService.createFeedback(feedbackData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get All Feedback
export const getFeedbacks = createAsyncThunk(
  'feedbacks/getAll',
  async (filteredItem, thunkAPI) => {
    try {
      return await feedbackService.getFeedbacks(filteredItem);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createFeedback.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createFeedback.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createFeedback.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getFeedbacks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeedbacks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.feedbacks = action.payload;
      })
      .addCase(getFeedbacks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = feedbackSlice.actions;
export default feedbackSlice.reducer;
