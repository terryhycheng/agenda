import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // If it equals to 0, the news will in "Latest -> Oldest" order.
  value: 0,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    sorting: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { sorting } = newsSlice.actions;

export default newsSlice.reducer;
