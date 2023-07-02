import {configureStore} from "@reduxjs/toolkit";

import VenueReducer from "../features/VenueData/venueSlice";
import photographReducer from "../features/PhotographData/photographSlice";
import cateringReducer from "../features/CateringData/cateringSlice";
import usersReducer from "../features/UserData/loginSlice";
import userRegisterReducer from "../features/RegisterData/registerSlice";

export const store = configureStore({
  reducer: {
    venue: VenueReducer,
    photograph: photographReducer,
    catering: cateringReducer,
    users: usersReducer,
    register: userRegisterReducer,
  },
});
