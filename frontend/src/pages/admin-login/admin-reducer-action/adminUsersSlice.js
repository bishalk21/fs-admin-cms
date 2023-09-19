import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminUsers: [],
};

const adminUsersSlice = createSlice({
  name: "adminUsers",
  initialState,
  reducers: {
    setAdminUsers: (state, { payload }) => {
      // or {payload} = action.payload
      state.adminUsers = payload;
    },
  },
});

export const { setAdminUsers } = adminUsersSlice.actions;
export default adminUsersSlice.reducer;
