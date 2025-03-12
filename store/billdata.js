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
      const newProduct = action.payload;
      const existingProductIndex = state.products.findIndex(
        (item) => item.name === newProduct.name
      );

      if (existingProductIndex !== -1) {
        // If product exists, update the quantity
        state.products[existingProductIndex].quantity = newProduct.quantity;
      } else {
        // Otherwise, add a new product
        state.products.push(newProduct);
      }
    },
  },
  setTotalAmount(state, action) {
    state.totalAmount = action.payload;
  },
  setDate(state, action) {
    state.date = action.payload;
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
    console.log(product);
  };
}
