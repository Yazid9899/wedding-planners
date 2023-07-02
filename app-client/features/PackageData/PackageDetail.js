import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// DOCS: https://redux-toolkit.js.org/api/createAsyncThunk
export const fetchDetailProductsData = createAsyncThunk(
  "products/fetchDataDetail",
  async ({ eoId }) => {
    console.log(eoId, "di slice dtl");
    const response = await axios.get(
      `https://c9d4-103-138-68-174.ngrok-free.app/products/${eoId}`
    );
    console.log(response.data, ">>>>>di slice catherings>>>>>>>>>>>>>>>>>>>>.");
    return response.data;
  }
);

const initialState = {
  value: 0,
  data: [],
  status: "idle",
  error: null,
};

export const detailProductsSlice = createSlice({
  name: "detailProductsData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetailProductsData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDetailProductsData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        console.log(action.payload, "=========================");
      })
      .addCase(fetchDetailProductsData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = detailProductsSlice.actions;

export default detailProductsSlice.reducer; // di import langsung menjadi namanya VenueReducer
