import { configureStore } from "@reduxjs/toolkit";
import registrSlice from "./registrSlice";

export const store = configureStore({
  reducer: {
    login: registrSlice
  }
});
