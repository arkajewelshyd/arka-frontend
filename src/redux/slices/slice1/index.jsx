import { createSlice } from "@reduxjs/toolkit";

// Slices represent features or state sections in the application
export const slice1 = createSlice({
  name: "slice1",
  initialState: 0,
  reducers: {
    // Increment state by 1
    reducer1: (state) => state + 1,
    reducer2: (state, action) => action.payload,
  },
});

// Export actions for use in components
export const { reducer1, reducer2 } = slice1.actions;

// Export reducer for store setup
export default slice1.reducer;
//this is the new comment
