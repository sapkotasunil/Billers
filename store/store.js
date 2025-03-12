import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import product from "./product";
import storeslice from "./storeslice";
import billData from "./billdata";
import historySlice from "./billHistory"; // Corrected import

const store = configureStore({
  reducer: {
    auth: authSlice,
    product: product,
    stores: storeslice,
    billData: billData,
    history: historySlice, // Using the correct imported variable
  },
});

export default store;
