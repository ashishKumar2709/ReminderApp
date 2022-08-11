import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "../components/Api.js";

export const getReminders = createAsyncThunk("/get", async (navigate) => {
  try {
    const response = await API.fetchReminders();
    console.log(response);
    navigate("/");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const setReminder = createAsyncThunk("/set", async (newReminder) => {
  try {
    const response = await API.createReminder(newReminder);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const editReminder = createAsyncThunk(
  "/edit",
  async ({ currentId, reminderUpdate }) => {
    console.log(currentId);
    try {
      const response = await API.updateReminder(currentId, reminderUpdate);
      console.log(response);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const removeReminder = createAsyncThunk("/remove", async (id) => {
  try {
    const response = await API.deleteReminder(id);
    console.log(response);

    return { data: response.data, id };
  } catch (error) {
    console.log(error);
  }
});
const initialState = {
  reminders: [],
  loading: false,
  error: "",
};
const reminderSlice = createSlice({
  name: "reminders",
  initialState,
  extraReducers: {
    [getReminders.pending]: (state, action) => {
      console.log("loading...");
      state.loading = true;
    },
    [getReminders.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.reminders = action.payload;
    },
    [getReminders.rejected]: (state, action) => {
      console.log(action.payload);
      state.error = action.payload.message;
    },
    [setReminder.pending]: (state, action) => {
      console.log("loading...");
      state.loading = true;
    },
    [setReminder.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.reminders = [...state.reminders, action.payload];
    },
    [setReminder.rejected]: (state, action) => {
      console.log(action.payload);
      state.error = action.payload.message;
    },
    [removeReminder.pending]: (state, action) => {
      console.log("loading...");
      state.loading = true;
    },
    [removeReminder.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      const newReminders = state.reminders.filter(
        (ele) => ele._id !== action.payload.id
      );
      state.reminders = newReminders;
    },
    [removeReminder.rejected]: (state, action) => {
      console.log(action.payload);
      state.error = action.payload.message;
    },
    [editReminder.pending]: (state, action) => {
      console.log("loading...");
      state.loading = true;
    },
    [editReminder.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.reminders = state.reminders.map((ele) =>
        ele._id === action.payload._id ? action.payload : ele
      );
    },
    [editReminder.rejected]: (state, action) => {
      console.log(action.payload);
      state.error = action.payload.message;
    },
  },
});

export default reminderSlice.reducer;
