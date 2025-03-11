import { createSlice } from "@reduxjs/toolkit";

const billData = createSlice({
  name: "billData",
  initialState: {
    customerName: null,
    products: [],
    totalAmount: null,
    date: null,
  },
  reducers: {
    setCustomerName(state, action) {
      state.customerName = action.payload;
    },
    setProducts(state, action) {
      state.products = [...state.products, action.payload];
    },
    setTotalAmount(state, action) {
      state.totalAmount = action.payload;
    },
    setDate(state, action) {
      state.date = action.payload;
    },
  },
});

export const { setCustomerName, setDate, setProducts, setTotalAmount } =
  billData.actions;
export default billData.reducer;

export function CustomerName(name) {
  return (dispatch) => {
    dispatch(setCustomerName(name));
  };
}
