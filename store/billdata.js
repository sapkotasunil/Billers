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
      if (Array.isArray(action.payload)) {
        // If an empty array is dispatched, reset the products list
        state.products = [];
      } else {
        const newProduct = action.payload;
        const existingProductIndex = state.products.findIndex(
          (item) => item.name === newProduct.name
        );

        if (existingProductIndex !== -1) {
          state.products[existingProductIndex].quantity = newProduct.quantity;
        } else {
          state.products.push(newProduct);
        }
      }
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

export function billDatas(product) {
  return function billDatasThunk(dispatch) {
    dispatch(setProducts(product));
    console.log("bill data", product);
  };
}
export function NullBillDatas() {
  return function NullBillDatasThunk(dispatch) {
    dispatch(setProducts([]));
  };
}
