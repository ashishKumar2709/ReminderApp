import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import decode from "jwt-decode";
import * as api from "../components/Api.js";

export const loginUser = createAsyncThunk(
  "/auth/login",
  async ({ loginFormData, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.signIn(loginFormData);
      console.log(response);
      navigate("/");
      return response.data;
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);
export const registerUser = createAsyncThunk(
  "/auth/register",
  async ({ regFormData, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.signUp(regFormData);
      console.log(response);
      navigate("/");
      return response.data;
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  user: null,
  loading: false,
  error: "",
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginGoogleUser: (state, action) => {
      console.log(action.payload);
      const token = action.payload.token;
      const result = decode(token);
      console.log(result, token);
      localStorage.setItem("profile", JSON.stringify({ result, token }));
      state.user = action.payload;
    },
    logOutUser: (state, action) => {
      localStorage.clear();
      state.user = null;
      state.error = null;
    },
    resetError: (state, action) => {
      state.error = null;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      console.log("Pending");
      state.loading = true;
    },

    [loginUser.fulfilled]: (state, action) => {
      console.log(action);
      console.log("Data received" + JSON.stringify(action.payload));
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      console.log(action);
      state.user = action.payload;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.log(action.payload, state.error);
    },
    [registerUser.pending]: (state, action) => {
      console.log("Pending");
      state.loading = true;
    },

    [registerUser.fulfilled]: (state, action) => {
      console.log(action);
      console.log("Data received" + JSON.stringify(action.payload));
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [registerUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.log(action);
    },
  },
});
export const { loginGoogleUser, logOutUser, resetError } = authSlice.actions;
export default authSlice.reducer;
