import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from '.';

const initialState = {
  user: { name: null, email: null },
  token: null,
  error: null,
  isLoggedIn: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending](state) {
      return { ...state, isLoading: true };
    },
    [authOperations.register.fulfilled](state, { payload }) {
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isLoggedIn: true,
        isLoading: false,
      };
    },
    [authOperations.register.rejected](state, { payload }) {
      return { ...state, error: payload, isLoading: false };
    },

    [authOperations.login.pending](state) {
      return { ...state, isLoading: true };
    },
    [authOperations.login.fulfilled](state, { payload }) {
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isLoggedIn: true,
        isLoading: false,
      };
    },
    [authOperations.login.rejected](state, { payload }) {
      return { ...state, error: payload, isLoading: false };
    },

    [authOperations.logout.pending](state) {
      return { ...state, isLoading: true };
    },
    [authOperations.logout.fulfilled]() {
      return initialState;
    },
    [authOperations.logout.rejected](state, { payload }) {
      return { ...state, error: payload, isLoading: false };
    },

    [authOperations.getCurrentUser.pending](state) {
      return { ...state, isLoading: true };
    },
    [authOperations.getCurrentUser.fulfilled](state, { payload }) {
      return {
        ...state,
        user: payload,
        isLoggedIn: true,
      };
    },
    [authOperations.getCurrentUser.rejected](state, { payload }) {
      return { ...state, error: payload, isLoading: false };
    },
  },
});

export const authReducer = authSlice.reducer;
