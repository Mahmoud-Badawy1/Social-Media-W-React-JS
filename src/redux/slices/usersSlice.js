import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  users: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  user: null // Add a user field to store the logged-in user's data
};
const baseURL = 'https://friendy-social-bc47307e1168.herokuapp.com';

// Async thunk for registering a new user
export const registerUser = createAsyncThunk(
  'users/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}/users`, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for logging in a user
export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}/login`, credentials, {
        withCredentials: true // Set withCredentials to true for sending cookies with the request
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for logging in a user
export const logoutUser = createAsyncThunk(
  'users/logoutUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}/logout`, credentials, {
        withCredentials: true // Set withCredentials to true for sending cookies with the request
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for getting all users
export const getAllUsers = createAsyncThunk(
  'users/getAllUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}/users`, {
        withCredentials: true // Set withCredentials to true for sending cookies with the request
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for updating a user
export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({ id, userData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${baseURL}/users/${id}`, userData, {
        withCredentials: true
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for deleting a user
export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${baseURL}/users/${id}`, {
        withCredentials: true
      });
      return id; // Return the deleted user's id
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for getting a single user
export const getUser = createAsyncThunk(
  'users/getUser',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}/users/${id}`, {
        withCredentials: true
      });
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
    // Example synchronous reducer: reset user state
    resetUserState: (state) => {
      state.user = null;
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
     
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users.push(action.payload);
        toast.success('User registered successfully!');
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
        toast.error('Failed to register user: ' + action.payload.message);
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        toast.success('User logedin successfully!');
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
        toast.error('Failed to login user: ' + action.payload.message);
      })
      .addCase(logoutUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        toast.success('User logedout successfully!');
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
        toast.error('Failed to logout user: ' + action.payload.message);
      })
      .addCase(getAllUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
        toast.success('Users got successfully!');
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
        toast.error('Failed to get all users: ' + action.payload.message);
      })
      .addCase(updateUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.users.findIndex(user => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
        toast.success('User updated successfully!');
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
        toast.error('Failed to update the user: ' + action.payload.message);
      })
      .addCase(deleteUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = state.users.filter(user => user.id !== action.payload);
        toast.success('User deleted successfully!');
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
        toast.error('Failed to delete this user: ' + action.payload.message);
      })
      .addCase(getUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        toast.success('User got successfully!');
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
        toast.error('Failed to get user: ' + action.payload.message);
      });
  }
});

export const { resetUserState } = usersSlice.actions;

export default usersSlice.reducer;

// import axios from 'axios';
// import { toast } from 'react-toastify'; // Import the toast library

// const baseURL = 'https://friendy-social-bc47307e1168.herokuapp.com';

// const registerUser = async (userData) => {
//   try {
//     const response = await axios.post(`${baseURL}/users`, userData);
//     console.log('User registered successfully:', response.data);
//     // Handle success
//     toast.success('User registered successfully!'); // Show success message
//     // Redirect to the login page (assuming you have a route set up for this)
//     window.location.href = '/login';
//   } catch (error) {
//     console.error('Error registering user:', error.response.data);
//     // Handle error
//     // Show error message using toast
//     toast.error('Failed to register user: ' + error.response.data.message);
//   }
// };

// // Example usage:
// const newUser = {
//   first_name: 'John',
//   last_name: 'Doe',
//   username: 'johndoe',
//   email: 'john.doe@example.com',
//   password: 'password123',
//   dob: '1990-01-01',
//   phone: '1234567890',
//   confirm_password: 'password123',
//   avatar_url: 'https://example.com/avatar.jpg' // Optional field
// };

// registerUser(newUser);
