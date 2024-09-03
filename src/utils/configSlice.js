import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    showSidenav: false,
  },
  reducers: {
    openSideNav: (state, action) => {
      state.showSidenav = true;
    },
    closeSideNav: (state, action) => {
      state.showSidenav = false;
    }
  },
});

export const { openSideNav, closeSideNav } = configSlice.actions;
export default configSlice.reducer;
