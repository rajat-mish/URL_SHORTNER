// import { createSlice} from '@reduxjs/toolkit';
// import axios from '../../utils/axiosinstance';



// // Initial state
// const initialState = {
//   user: null,
//   isAuthenticated: false,

// };

// // Slice
// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.user = action.payload;
//       state.isAuthenticated = true;
//     },
//     logout: (state) => {
//       state.user = null;
//       state.isAuthenticated = false;
//     },
//   },
 
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;




// store/slice/authSlice.js



import { createSlice } from '@reduxjs/toolkit';
import { logoutUser } from '../../api/user.api.js';

// Remove the createAsyncThunk import and implementation
// since it's causing issues with Vite

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    logoutStart(state) {
      state.loading = true;
    },
    logoutSuccess(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
    },
    logoutFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    }
  }
});

// Export actions
export const { 
  login, 
  logout, 
  logoutStart,
  logoutSuccess,
  logoutFailed,
  clearError 
} = authSlice.actions;

// Create a thunk-like function without using createAsyncThunk
export const logoutUserThunk = () => async (dispatch) => {
  try {
    dispatch(logoutStart());
    await logoutUser();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailed(error.message));
  }
};

export default authSlice.reducer;