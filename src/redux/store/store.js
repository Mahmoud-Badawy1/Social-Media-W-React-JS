// src/redux/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../slices/usersSlice';
import postsReducer from '../slices/postsSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    posts : postsReducer,
  }
});

export default store;
