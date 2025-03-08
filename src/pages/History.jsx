import React from "react";
import Layout from "../components/Layout";

const History = () => {
  return (
    <>
      <Layout>
        <div className="w-screen flex-col items-center">
          <div className=" w-3/4 h-16 flex justify-between px-3 items-center rounded-lg text-2xl bg-blue-500">
            <h1>Date:2080/11/12</h1>
            <h1>sunil sapkota</h1>
            <h1>Amount:12000</h1>
            <h1 className="text-xl rounded-md bg-green-300 px-3 font-semibold">
              view bill
            </h1>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default History;
