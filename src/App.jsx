import React from "react";
import ProductCard from "./pages/billPage/product/componenets/ProductCard";
import BillLayout from "./pages/billPage/bill/components/BillLayout";
import AddProduct from "./pages/billPage/product/componenets/AddProduct";
import ProductStockForm from "./pages/billPage/product/componenets/ProductStockForm";
import StoreBillForm from "./pages/store/components/StoreBillForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BillMaking from "./pages/billPage/bill/BillMaking";
import StockAdd from "./pages/billPage/product/componenets/StockAdd";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import History from "./pages/History";
import { Provider } from "react-redux";
import store from "../store/store";
import CustomersName from "./pages/billPage/bill/components/CustomersName";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-500 to-green-500 min-h-screen h-full w-full overflow-x-hidden">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/storebillform" element={<StoreBillForm />} />
            <Route path="/billmaking" element={<BillMaking />} />
            <Route path="/stockadd" element={<StockAdd />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
