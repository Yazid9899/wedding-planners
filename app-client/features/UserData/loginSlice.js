import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../config/api";

export const loginData = createAsyncThunk("login/fetchData", async (data) => {
  console.log(data);
  const response = await axios.post(`${BASE_URL}/users/login`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  await AsyncStorage.setItem("access_token", access_token);
  console.log(body);
  console.log(response.data, ">>>>>di slice login>>>>>>>>>>>>>>>>>>>>.");
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

// Action creators are generated for each case reducer function
export const {} = loginSlice.actions;

export default loginSlice.reducer; // di import langsung menjadi namanya VenueReducer
