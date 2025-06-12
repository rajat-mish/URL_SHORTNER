import { createSlice} from '@reduxjs/toolkit';
import axios from '../../utils/axiosinstance';



// Initial state
const initialState = {
  user: null,
  isAuthenticated: false,

};

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
 
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;