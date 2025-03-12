import React from "react";
import Layout from "../components/Layout";
import BillLayout from "./billPage/bill/components/BillLayout";

const History = () => {
  // fixing historyData is an array to prevent errors
  const historyData =
    JSON.parse(localStorage.getItem("historyBillDatas")) || [];

  return (
    <>
      <Layout>
        {historyData.length === 0 ? (
          <p className="text-center text-gray-500">
            No bill history available.
          </p>
        ) : (
          historyData
            .filter((data) => data !== null) //remove null values
            .map((data, idx) => (
              <div key={idx} className="w-screen flex-col items-center my-2">
                <div className="w-3/4 h-16 flex justify-between px-3 items-center rounded-lg text-2xl bg-blue-500">
                  <h1>{data?.date}</h1>
                  <div className="flex justify-between  gap-4 w-96">
                    <h1>{data?.customerName}</h1>
                    <h1>Total Amount: {data?.totalAmount}</h1>
                  </div>
                  <h1 className="text-xl rounded-md bg-green-300 px-3 font-semibold cursor-pointer">
                    View Bill
                  </h1>
                </div>
              </div>
            ))
        )}
      </Layout>
    </>
  );
};

export default History;
