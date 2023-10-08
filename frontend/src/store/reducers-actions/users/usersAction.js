import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  CLEAR_ERRORS,
} from "../../constants";

import {
  loginUserApi,
  registerUserApi,
  fetchAllUsersApi,
} from "../../../helpers/axiosHelper";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await loginUserApi(email, password);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data.admin });
    sessionStorage.setItem("userInfo", JSON.stringify(data.admin));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const { data } = await registerUserApi(name, email, password);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data.admin });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    sessionStorage.setItem("userInfo", JSON.stringify(data.admin));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllUsers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ALL_USERS_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const { data } = await fetchAllUsersApi(userInfo.token);
    dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
  } catch (error) {
    dispatch({
      type: ALL_USERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  sessionStorage.clear();
  localStorage.clear();
  dispatch({ type: USER_LOGOUT });
  document.location.href = "/";
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
