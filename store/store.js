import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import product from "./product";
import storeslice from "./storeslice";
import billData from "./billdata";

const store = configureStore({
  reducer: {
    auth: authSlice,
    product: product,
    stores: storeslice,
    billData: billData,
  },
});
export default store;
