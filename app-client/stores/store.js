import { configureStore } from "@reduxjs/toolkit";

import VenueReducer from "../features/VenueData/venueSlice";
import photographReducer from "../features/PhotographData/photographSlice";
import cateringReducer from "../features/CateringData/cateringSlice";

import inputDateBudgetReducer from "../features/inputDateBudget/dateBudgetSlice";

export const store = configureStore({
  reducer: {
    venue: VenueReducer,
    photograph: photographReducer,
    catering: cateringReducer,
    inputDateBudget: inputDateBudgetReducer,
  },
});
