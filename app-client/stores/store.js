import {configureStore} from "@reduxjs/toolkit";

import VenueReducer from "../features/VenueData/venueSlice";
import photographReducer from "../features/PhotographData/photographSlice";
import cateringReducer from "../features/CateringData/cateringSlice";
import loginReducer from "../features/UserData/loginSlice";

export const store = configureStore({
  reducer: {
    venue: VenueReducer,
    photograph: photographReducer,
    catering: cateringReducer,
    users: loginReducer,
  },
});
