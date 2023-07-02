import { configureStore } from "@reduxjs/toolkit";

import VenueReducer from "../features/VenueData/venueSlice";
import photographReducer from "../features/PhotographData/photographSlice";
import cateringReducer from "../features/CateringData/cateringSlice";
import productReducer from "../features/PackageData/packageSlice";
import detailProductReducer from "../features/PackageData/PackageDetail";

export const store = configureStore({
  reducer: {
    venue: VenueReducer,
    photograph: photographReducer,
    catering: cateringReducer,
    product: productReducer,
    detailProduct: detailProductReducer,
  },
});
