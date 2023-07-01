import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// DOCS: https://redux-toolkit.js.org/api/createAsyncThunk
export const fetchVenueData = createAsyncThunk("venue/fetchData", async () => {
  const response = await axios.get(
    "https://fde2-103-138-68-174.ngrok-free.app/venues"
  );
  //   console.log(response.data, ">>>>>di slice venue>>>>>>>>>>>>>>>>>>>>.");

  return response.data;
});

const initialState = {
  value: 0,
  data: [],
  status: "idle",
  error: null,
};

export const venueSlice = createSlice({
  name: "vanueData",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVenueData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchVenueData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchVenueData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = venueSlice.actions;

export default venueSlice.reducer; // di import langsung menjadi namanya VenueReducer
