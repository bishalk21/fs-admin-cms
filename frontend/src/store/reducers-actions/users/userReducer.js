import { createSlice } from "@reduxjs/toolkit";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  ALL_USERS_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  CLEAR_ERRORS,
} from "../../constants";

// Initial states
const initialLoginState = {
  loading: false,
  userInfo: null,
  isAuthenticated: false,
  error: null,
};

const initialRegisterState = {
  loading: false,
  userInfo: null,
  error: null,
};

const initialAllUsersState = {
  loading: false,
  users: [],
  error: null,
};

// Login Slice
const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    [USER_LOGIN_REQUEST]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [USER_LOGIN_SUCCESS]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    [USER_LOGIN_FAIL]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [USER_LOGOUT]: (state) => {
      state.loading = false;
      state.userInfo = null;
      state.isAuthenticated = false;
    },
    [CLEAR_ERRORS]: (state) => {
      state.error = null;
    },
  },
});

// Register Slice
const registerSlice = createSlice({
  name: "register",
  initialState: initialRegisterState,
  reducers: {
    [USER_REGISTER_REQUEST]: (state) => {
      state.loading = true;
    },
    [USER_REGISTER_SUCCESS]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    [USER_REGISTER_FAIL]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [USER_LOGOUT]: (state) => {
      state.loading = false;
      state.userInfo = null;
    },
    [CLEAR_ERRORS]: (state) => {
      state.error = null;
    },
  },
});

// AllUsers Slice
const allUsersSlice = createSlice({
  name: "allUsers",
  initialState: initialAllUsersState,
  reducers: {
    [ALL_USERS_REQUEST]: (state) => {
      state.loading = true;
    },
    [ALL_USERS_SUCCESS]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [ALL_USERS_FAIL]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [CLEAR_ERRORS]: (state) => {
      state.error = null;
    },
  },
});

// Exporting actions and reducers
export const loginActions = loginSlice.actions;
export const registerActions = registerSlice.actions;
export const allUsersActions = allUsersSlice.actions;

export const userLoginReducer = loginSlice.reducer;
export const userRegisterReducer = registerSlice.reducer;
export const allUsersReducer = allUsersSlice.reducer;
