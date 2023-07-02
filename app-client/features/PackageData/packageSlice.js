import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// DOCS: https://redux-toolkit.js.org/api/createAsyncThunk
export const fetchProductsData = createAsyncThunk(
  "products/fetchData",
  async () => {
    const response = await axios.get(
      " https://c8d9-103-138-68-174.ngrok-free.app/products"
    );
    //  console.log(response.data, ">>>>>di slice catherings>>>>>>>>>>>>>>>>>>>>.");
    return response.data;
  }
);

const initialState = {
  value: 0,
  data: [],
  status: "idle",
  error: null,
};

export const productsSlice = createSlice({
  name: "productsData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProductsData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = productsSlice.actions;

export default productsSlice.reducer; // di import langsung menjadi namanya VenueReducer
