import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import AddProduct from "./AddProduct";
import Layout from "../../../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { allProductdata } from "../../../../../store/product";
import StockQutityCard from "./StockQuntityCard";

const StockAdd = () => {
  const { allProduct, status } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allProductdata());
  }, [status]);
  return (
    <Layout>
      <div className="flex gap-3 flex-wrap px-3">
        <AddProduct />
        {!allProduct
          ? ""
          : allProduct.map((data, idx) => (
              <StockQutityCard key={idx} data={data} />
            ))}
      </div>
    </Layout>
  );
};

export default StockAdd;
