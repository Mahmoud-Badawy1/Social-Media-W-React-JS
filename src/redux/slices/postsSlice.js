import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

// Centralized API configuration
const axiosInstance = axios.create({
  baseURL: 'https://friendy-social-bc47307e1168.herokuapp.com',
  withCredentials: true,
});

const initialState = {
  posts: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Async thunk for fetching all posts
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/posts');
      return response.data;
    } catch (error) {
      const errorMessage = error.response && error.response.data && error.response.data.message
                        ? error.response.data.message
                        : 'Failed to fetch posts. Please try again later.';
      return rejectWithValue({ message: errorMessage });
    }
  }
);

// Async thunk for adding a new post
export const addPost = createAsyncThunk(
  'posts/addPost',
  async ({ created_by, content, images }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/posts', { created_by, content, images });
      toast.success('Post added successfully!');
      return response.data;
    } catch (error) {
      const errorMessage = error.response && error.response.data && error.response.data.message
                        ? error.response.data.message
                        : 'Failed to add the post. Please try again later.';
      toast.error(errorMessage);
      return rejectWithValue({ message: errorMessage });
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
        toast.error('Failed to fetch posts: ' + action.payload.message);
      })
      .addCase(addPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
        // Toast error is handled in the addPost async thunk
      });
  },
});

export default postsSlice.reducer;
