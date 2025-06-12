import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
//import urlReducer from './slice/urlSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
   
  },
 
});

