import React, { useEffect, useState } from "react";
import ProductCard from "../product/componenets/ProductCard";
import BillLayout from "./components/BillLayout";
import Layout from "../../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { allProductdata } from "../../../../store/product";
import CustomersName from "./components/CustomersName";
import SearchBar from "./components/SearchBar";
import NoProductDisplayCard from "./components/NoProductDisplayCard";

const BillMaking = () => {
  const { customerName } = useSelector((state) => state.billData);

  const dispatch = useDispatch();
  const { allProduct } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(allProductdata());
  }, []);

  const [Searchvalue, SetSearchvalue] = useState("");

  return (
    <>
      <Layout>
        {!allProduct ? (
          <NoProductDisplayCard />
        ) : (
          <>
            <div className="w-[100vh]  items-start mb-1">
              <SearchBar SetSearchvalue={SetSearchvalue} />
            </div>
            <div className="w-full h-full flex flex-col-reverse md:flex-row bg-blue-300 px-5 ">
              <div className="flex flex-wrap gap-3 w-5/6">
                {!allProduct
                  ? ""
                  : allProduct
                      .filter((Product) =>
                        Product.name
                          .toLowerCase()
                          .includes(Searchvalue.toLowerCase())
                      )
                      .map((data, idx) => (
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
          </>
        )}
      </Layout>
      ;
    </>
  );
};

export default BillMaking;
