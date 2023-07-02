import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// DOCS: https://redux-toolkit.js.org/api/createAsyncThunk
export const fetchPhotographData = createAsyncThunk(
  "photographies/fetchData",
  async () => {
    const response = await axios.get(
      "https://fde2-103-138-68-174.ngrok-free.app/photographies"
    );
    //  console.log(response.data, ">>>>>di slice photo>>>>>>>>>>>>>>>>>>>>.");
    return response.data;
  }
);

const initialState = {
  value: 0,
  data: [],
  status: "idle",
  error: null,
};

export const photographSlice = createSlice({
  name: "photographData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotographData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPhotographData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchPhotographData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = photographSlice.actions;

export default photographSlice.reducer; // di import langsung menjadi namanya VenueReducer
