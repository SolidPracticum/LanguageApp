import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {},
  reducers: {
    Root: () => {}
  }
});

export const rootSliceAction = rootSlice.actions;
export const rootSliceReducer = rootSlice.reducer;
