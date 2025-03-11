import React, { useEffect, useState } from "react";
import ProductCard from "../product/componenets/ProductCard";
import BillLayout from "./components/BillLayout";
import Layout from "../../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { allProductdata } from "../../../../store/product";
import CustomersName from "./components/CustomersName";

const BillMaking = () => {
  const { customerName } = useSelector((state) => state.billData);
  const { status } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const { allProduct } = useSelector((state) => state.product);
  console.log(allProduct);

  useEffect(() => {
    dispatch(allProductdata());
  }, []);

  return (
    <>
      <Layout>
        <div className="w-full h-full flex bg-gradient-to-r from-yellow-500 to-green-500 px-5 ">
          <div className="flex flex-wrap gap-3 w-4/6">
            {!allProduct
              ? ""
              : allProduct.map((data, idx) => (
                  <ProductCard key={idx} data={data} />
                ))}
          </div>
          <div className="w-2/6 ">
            {customerName !== null ? (
              <BillLayout customerName={customerName} />
            ) : (
              <CustomersName />
            )}
          </div>
        </div>
      </Layout>
      ;
    </>
  );
};

export default BillMaking;
