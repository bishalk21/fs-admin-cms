// systemSlice.js
import { createSlice } from "@reduxjs/toolkit";

const systemSlice = createSlice({
  name: "system",
  initialState: {
    isSideMenuOpen: false,
  },
  reducers: {
    openSideMenu: (state) => {
      state.isSideMenuOpen = true;
    },
    closeSideMenu: (state) => {
      state.isSideMenuOpen = false;
    },
  },
});

export const { openSideMenu, closeSideMenu } = systemSlice.actions;

export default systemSlice.reducer;
