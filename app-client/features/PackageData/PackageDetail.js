import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// DOCS: https://redux-toolkit.js.org/api/createAsyncThunk
export const fetchDetailProductsData = createAsyncThunk(
  "productsDetail/fetchDataDetail",
  async ({ eoId }) => {
    console.log(eoId, "di slice dtl");
    try {
      const response = await axios.get(
        `https://c8d9-103-138-68-174.ngrok-free.app/products/${eoId}`
      );
      console.log(
        response.data,
        ">>>>>di slice catherings>>>>>>>>>>>>>>>>>>>>."
      );
      return response.data;
    } catch (error) {
      console.log(error, "ini erorrrrrrrrrrrr");
    }
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
        console.log(action.error.message, "error");
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = detailProductsSlice.actions;

export default detailProductsSlice.reducer; // di import langsung menjadi namanya VenueReducer
