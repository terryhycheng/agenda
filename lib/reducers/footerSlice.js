import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {
    setLoadingState: (state) => {
      state.isLoading ? (state.isLoading = false) : (state.isLoading = true);
      console.log(state.isLoading, "reducer");
    },
  },
});

export const { setLoadingState } = footerSlice.actions;

export default footerSlice.reducer;
