import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./authSlice.js";
import reminderReducer from "./reminderSlice.js";
export const store = configureStore({
  reducer: {
    user: userReducer,
    reminders: reminderReducer,
  },
});
