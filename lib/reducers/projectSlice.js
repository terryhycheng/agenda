import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterValue: "",
  isChangeValue: false,
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filterValue = action.payload;
    },
  },
});

export const { setFilter } = projectSlice.actions;

export default projectSlice.reducer;
