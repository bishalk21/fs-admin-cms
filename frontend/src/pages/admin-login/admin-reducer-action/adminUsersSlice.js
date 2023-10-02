import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminUsers: {},
  allAdminUsers: [],
};

const adminUsersSlice = createSlice({
  name: "adminUsers",
  initialState,
  reducers: {
    setAdminUsers: (state, { payload }) => {
      // or {payload} = action.payload
      state.adminUsers = payload;
    },
    setAllAdminUser: (state, { payload }) => {
      state.allAdminUsers = payload;
    },
  },
});

export const { setAdminUsers, setAllAdminUser } = adminUsersSlice.actions;
export default adminUsersSlice.reducer;
