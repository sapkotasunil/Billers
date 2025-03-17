import React, { useState } from "react";
import Layout from "../components/Layout";
import HistoryBillLayout from "./store/components/HistoryBillLayout";

const History = () => {
  let { username } = JSON.parse(localStorage.getItem("logged")) || null;

  const [selectedBill, setSelectedBill] = useState(null);
  const closeBillLayout = () => {
    setSelectedBill(null);
  };

  // Get data from localStorage and ensure it's a valid array
  const historyData =
    JSON.parse(localStorage.getItem(`${username}historyBillDatas`)) || [];

  if (!Array.isArray(historyData)) {
    return (
      <Layout>
        <p className="text-center text-red-500">Invalid bill history data.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      {historyData.length === 0 ? (
        <p className="text-center text-gray-500">No bill history available.</p>
      ) : (
        historyData
          .filter((data) => data !== null) // Remove null values
          .map((data, idx) => (
            <div key={idx} className="w-screen flex flex-col items-center my-2">
              <div className="w-3/4 h-16 flex justify-between px-3 items-center rounded-lg text-2xl bg-blue-200">
                <h1>{data?.date}</h1>
                <div className="flex justify-between gap-4 w-96">
                  <h1>{data?.customerName}</h1>
                  <h1>Total Amount: {data?.totalAmount}</h1>
                </div>
                <button
                  onClick={() =>
                    setSelectedBill(selectedBill === idx ? null : idx)
                  }
                  className="text-xl rounded-md bg-green-500 px-3 font-semibold cursor-pointer"
                >
                  {selectedBill === idx ? "Close Bill" : "View Bill"}
                </button>
              </div>

              {/* Show bill details if selected */}
              {selectedBill === idx && (
                <HistoryBillLayout
                  customerName={data?.customerName}
                  date={data?.date}
                  products={data?.products}
                  closeBillLayout={closeBillLayout}
                />
              )}
            </div>
          ))
      )}
    </Layout>
  );
};

export default History;
