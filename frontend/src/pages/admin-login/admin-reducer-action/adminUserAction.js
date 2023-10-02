import {
  getAdminUser,
  getAllAdminUser,
  loginAdminUser,
} from "../../../helper/axiosHelper";
import { setAdminUsers, setAllAdminUser } from "./adminUsersSlice";

export const loginAdminUserAction = (data) => async (dispatch) => {
  // call the api
  // get accessJWT, refreshJWT, STATUS, USER, MESSAGE
  const { status, message, user, accessJWT, refreshJWT } = await loginAdminUser(
    data
  );

  // store jwt in sessionStorage (accessJWT) or localStorage (refreshJWT)
  // update the store state
  if (status === "success") {
    // accessJWT in sessionStorage
    sessionStorage.setItem("accessJWT", accessJWT);
    // refreshJWT in localStorage
    localStorage.setItem("refreshJWT", refreshJWT);
    dispatch(setAdminUsers(user));
  }
};

export const logoutUserAction = () => (dispatch) => {
  dispatch(setAdminUsers({}));
  sessionStorage.removeItem("accessJWT");
  localStorage.removeItem("refreshJWT");
};

// fetch user and mount in the redux store
export const getAdminUserAction = (token) => async (dispatch) => {
  const { status, user } = await getAdminUser(token);

  status === "success" && dispatch(setAdminUsers(user));
};

// fetch all user and mount in the redux store
export const getAllAdminUserAction = () => async (dispatch) => {
  const { status, users } = await getAllAdminUser();

  status === "success" && dispatch(setAllAdminUser(users));
};
