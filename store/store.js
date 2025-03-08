import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import product from "./product";
import storeslice from "./storeslice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    product: product,
    stores: storeslice,
  },
});
export default store;
