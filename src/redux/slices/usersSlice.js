// src/redux/slices/usersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

// Async thunk for registering a new user
export const registerUser = createAsyncThunk(
  'users/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://friendy-social-bc47307e1168.herokuapp.com/users', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Add any synchronous reducers here
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users.push(action.payload);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      });
  }
});

export default usersSlice.reducer;
