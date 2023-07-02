import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginData = createAsyncThunk("login/fetchData", async (data) => {
  // console.log(data);
  const response = await axios.post(
    "https://c8d9-103-138-68-174.ngrok-free.app/users/login",
    data
  );
  AsyncStorage.setItem("access_token", response.data.access_token);
  console.log(
    response.data.access_token,
    ">>>>>di slice login>>>>>>>>>>>>>>>>>>>>."
  );
  return response.data;
});

const initialState = {
  value: 0,
  access_token: "",
  status: "idle",
  error: null,
};

export const loginSlice = createSlice({
  name: "LoginData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginData.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        state.access_token = action.payload;
      })
      .addCase(loginData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default loginSlice.reducer;
