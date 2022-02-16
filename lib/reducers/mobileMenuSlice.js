import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    setMenuOpen: (state) => {
      state.value = true;
    },
    setMenuClose: (state) => {
      state.value = false;
    },
  },
});

export const { setMenuOpen, setMenuClose } = mobileMenuSlice.actions;

export default mobileMenuSlice.reducer;
