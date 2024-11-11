import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./slices/slice1";

export const store = configureStore({
  reducer: {
    slice1: slice1Reducer,
  },
});
