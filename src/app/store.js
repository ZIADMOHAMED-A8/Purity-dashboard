import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import registerSlice from "../features/auth/registerSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    register:registerSlice
  },
});
