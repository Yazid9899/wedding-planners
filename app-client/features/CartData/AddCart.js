import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AsyncStorage } from "react-native";

export const addCartData = createAsyncThunk("cart/addCart", async (data) => {
  console.log(data);
  //     const response = await axios.post(
  //       "https://c8d9-103-138-68-174.ngrok-free.app/carts",
  //       data,
  //       {AsyncStorage.getItem("access_token")}
  //     );
  //     //   AsyncStorage.setItem("access_token", response.data.access_token);
  //     console.log(response.data, ">>>>>di slice register>>>>>>>>>>>>>>>>>>>>.");
  //     return response.data;

  //   return response.data;
  const access_token = await AsyncStorage.getItem("access_token");
  console.log(access_token, "?????????????????????");

  // Menyiapkan objek headers dengan access_token
  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const response = await axios.post(
    "https://c8d9-103-138-68-174.ngrok-free.app/carts",
    data,
    { headers }
  );

  console.log(response.data, ">>>>>di slice register>>>>>>>>>>>>>>>>>>>>.");
  return response.data;
});

const initialState = {
  value: 0,
  data: [],
  status: "idle",
  error: null,
};

export const AddCartSlice = createSlice({
  name: "AddCartData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCartData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addCartData.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        state.data = action.payload;
      })
      .addCase(addCartData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default AddCartSlice.reducer;
