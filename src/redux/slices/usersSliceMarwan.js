// Marwan
// Task1: PUT /:id update user information using its id inclduing avatar_url -> data { first_name last_name username dob phone } (this reoute requires credentials sent in request)
// Task2: GET /:id get single user using its id

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// State:
const initialState = {
  user: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Task1
export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({ id, data, token }) => {
    try {
      const response = await axios.put(
        `https://friendy-social-bc47307e1168.herokuapp.com/users/${id}`,
        data,
        { 
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true // ----------------------------------------------Credentials
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// Task2:
export const fetchUserById = createAsyncThunk(
  'user/fetchUserById',
  async (id) => {
    try {
      const response = await axios.get(`https://friendy-social-bc47307e1168.herokuapp.com/users/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// Create user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Update user reducer
    builder.addCase(updateUser.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.status = 'idle';
      state.user = action.payload;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error.message;
    });

    // Fetch user by id reducer
    builder.addCase(fetchUserById.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.status = 'idle';
      state.user = action.payload;
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
export { updateUser, fetchUserById };
