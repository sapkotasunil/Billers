import { createSlice } from "@reduxjs/toolkit";
import username from "../global/logedUser";

const productSlice = createSlice({
  name: "product",
  initialState: {
    status: null,
    productData: null,
    allProduct: null,
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    setProductData(state, action) {
      state.productData = action.payload;
    },
    setAllProduct(state, action) {
      state.allProduct = action.payload;
    },
  },
});

export const { setAllProduct, setStatus, setProductData } =
  productSlice.actions;
export default productSlice.reducer;

export function addProduct(data) {
  return function addProductThunk(dispatch) {
    dispatch(setProductData(data));
    let productDatas =
      JSON.parse(localStorage.getItem(`${username}productData`)) || [];
    if (!Array.isArray(productDatas)) {
      productDatas = [];
    }
    productDatas.unshift(data);
    localStorage.setItem(
      `${username}productData`,
      JSON.stringify(productDatas)
    );
    dispatch(setStatus("success"));
  };
}
export function allProductdata() {
  return function allProductdataThunk(dispatch) {
    dispatch(
      setAllProduct(JSON.parse(localStorage.getItem(`${username}productData`)))
    );
  };
}

export function editProduct(productName, value, types) {
  return function editProductThunk(dispatch) {
    let productDatas =
      JSON.parse(localStorage.getItem(`${username}productData`)) || [];
    const index = productDatas.findIndex((item) => item.name == productName);
    if (types == "Add Stock") {
      let oldStock = parseInt(productDatas[index].quantity);
      let newStock = parseInt(value);
      productDatas[index].quantity = oldStock + newStock;
    } else {
      productDatas[index].price = value;
    }
    localStorage.setItem(
      `${username}productData`,
      JSON.stringify(productDatas)
    );
    console.log(productDatas);

    dispatch(setAllProduct(productDatas));
    dispatch(setStatus("success"));
  };
}
export function editProductAfterCheckout(soldProducts) {
  return function editProductThunk(dispatch) {
    let productDatas =
      JSON.parse(localStorage.getItem(`${username}productData`)) || [];

    soldProducts.forEach((soldItem) => {
      const index = productDatas.findIndex(
        (item) => item.name === soldItem.name
      );
      if (index !== -1) {
        let oldStock = parseInt(productDatas[index].quantity);
        let sellStock = parseInt(soldItem.quantity);
        productDatas[index].quantity = oldStock - sellStock; // Ensuring stock doesn't go negative
      }
    });

    localStorage.setItem(
      `${username}productData`,
      JSON.stringify(productDatas)
    );

    dispatch(setAllProduct(productDatas));
    dispatch(setStatus("success"));
  };
}
