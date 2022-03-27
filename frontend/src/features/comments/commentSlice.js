import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import commentService from './commentService';

const initialState = {
  comments: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Get feedback comments
export const getComments = createAsyncThunk(
  'comments/getAll',
  async (feedbackId, thunkAPI) => {
    try {
      return await commentService.getComments(feedbackId);
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

// Create a ticket note
// export const createNote = createAsyncThunk(
//   'notes/create',
//   async ({ noteText, ticketId }, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token;
//       return await noteService.createNote(noteText, ticketId, token);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();

//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: { reset: (state) => initialState },
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.notes = action.payload;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = commentSlice.actions;
export default commentSlice.reducer;
