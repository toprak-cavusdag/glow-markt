import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';

export const user = configureStore({
  reducer: {
    user: userReducer,
  },
});
