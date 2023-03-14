import { createSlice } from "@reduxjs/toolkit";

const registrSlice = createSlice({
  name: "registr",
  initialState: {
    login: []
  },
  reducers: {
    registrData(state, action) {
      state.login.push(action.payload);
    }
  }
});

export const { registrData } = registrSlice.actions;
export default registrSlice.reducer;
