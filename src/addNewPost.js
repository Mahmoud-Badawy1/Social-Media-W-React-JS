// postsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  status: 'idle',
  error: null,
};

export const addPost = createAsyncThunk(
  'posts/addPost',
  async ({ created_by, content, images }, { rejectWithValue }) => {
    try {
      // Make the POST request to the API
      const response = await axios.post(
        'https://friendy-social-bc47307e1168.herokuapp.com/addPost',
        { created_by, content, images },
        { withCredentials: true } // Send credentials along with the request
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addPost.fulfilled, (state) => {
        state.status = 'idle';
      })
      .addCase(addPost.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.payload.message;
      });
  },
});

export default postsSlice.reducer;
