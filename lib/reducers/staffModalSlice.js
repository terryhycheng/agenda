import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  staff: "",
};

export const staffModalSlice = createSlice({
  name: "staffModal",
  initialState,
  reducers: {
    setModalOpen: (state, action) => {
      state.value = true;
      state.staff = action.payload;
      document.body.style.overflow = "hidden";
    },
    setModalClose: (state) => {
      state.value = false;
      document.body.style.overflow = "unset";
    },
  },
});

export const { setModalOpen, setModalClose } = staffModalSlice.actions;

export default staffModalSlice.reducer;
