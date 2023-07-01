import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// DOCS: https://redux-toolkit.js.org/api/createAsyncThunk
export const fetchCatheringsData = createAsyncThunk(
  "photographies/fetchData",
  async () => {
    const response = await axios.get(
      "https://fde2-103-138-68-174.ngrok-free.app/catherings"
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

export const catheringsSlice = createSlice({
  name: "catheringsData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatheringsData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCatheringsData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCatheringsData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = catheringsSlice.actions;

export default catheringsSlice.reducer; // di import langsung menjadi namanya VenueReducer
