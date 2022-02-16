import { configureStore } from "@reduxjs/toolkit";
import mobileMenuReducer from "./reducers/mobileMenuSlice";
import staffModalReducer from "./reducers/staffModalSlice";
import newsReducer from "./reducers/newsSlice";
import projectReducer from "./reducers/projectSlice";
import innerPageReducer from "./reducers/innerPageSlice";

export const store = configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer,
    staffModal: staffModalReducer,
    news: newsReducer,
    project: projectReducer,
    innerPage: innerPageReducer,
  },
});
