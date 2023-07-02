import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const registerData = createAsyncThunk(
  "register/fetchData",
  async (data) => {
    // console.log(data);
    const response = await axios.post(
      "https://d240-103-138-68-174.ngrok-free.app/users/register",
      data
    );
    //   AsyncStorage.setItem("access_token", response.data.access_token);
    console.log(response.data, ">>>>>di slice register>>>>>>>>>>>>>>>>>>>>.");
    return response.data;
  }
);

const initialState = {
  value: 0,
  data: [],
  status: "idle",
  error: null,
};

export const RegisterSlice = createSlice({
  name: "LoginData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerData.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        state.data = action.payload;
      })
      .addCase(registerData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default RegisterSlice.reducer;
