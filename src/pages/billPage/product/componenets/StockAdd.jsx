import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import Layout from "../../../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { allProductdata } from "../../../../../store/product";
import StockQutityCard from "./StockQuntityCard";
import StockRemaingWarning from "./StockRemaingWarning";
import SearchBar from "../../bill/components/SearchBar";

const StockAdd = () => {
  const { allProduct, status } = useSelector((state) => state.product);
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allProductdata());
  }, [status]);
  return (
    <Layout>
      <div>
        {!allProduct
          ? ""
          : allProduct
              .filter(
                (product) => product.quantity < 10 && product.quantity > 0
              )
              .map((product, idx) => (
                <StockRemaingWarning key={idx} product={product} />
              ))}
      </div>
      <div className="mb-1">
        <SearchBar SetSearchvalue={setSearchValue} />
      </div>
      <div className="flex gap-3 flex-wrap px-3">
        <AddProduct />
        {!allProduct
          ? ""
          : allProduct
              .filter((product) =>
                product.name.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((data, idx) => (
                <StockQutityCard
                  searchValue={searchValue}
                  key={idx}
                  data={data}
                />
              ))}
      </div>
    </Layout>
  );
};

export default StockAdd;
