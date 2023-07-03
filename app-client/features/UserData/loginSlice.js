import AsyncStorage from "@react-native-async-storage/async-storage";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../config/api";

export const loginData = createAsyncThunk("login/fetchData", async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/login`, data);
    // console.log(response.data, "KASGDKUAGSKUDGASKUDGAS");
    await AsyncStorage.setItem("access_token", response.data.access_token);
    // console.log(await AsyncStorage.getItem("access_token"), "INI ACCESS TOKEN");
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
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
