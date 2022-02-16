import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photoValue: false,
  videoValue: false,
  photoKey: "",
};

export const innerPageSlice = createSlice({
  name: "innerPage",
  initialState,
  reducers: {
    setPhotoOpen: (state, action) => {
      state.photoValue = true;
      state.photoKey = action.payload;
      document.body.style.overflow = "hidden";
    },
    setPhotoClose: (state) => {
      state.photoValue = false;
      document.body.style.overflow = "unset";
    },
    setVideoOpen: (state) => {
      state.videoValue = true;
      document.body.style.overflow = "hidden";
    },
    setVideoClose: (state) => {
      state.videoValue = false;
      document.body.style.overflow = "unset";
    },
  },
});

export const { setPhotoOpen, setPhotoClose, setVideoOpen, setVideoClose } =
  innerPageSlice.actions;

export default innerPageSlice.reducer;
