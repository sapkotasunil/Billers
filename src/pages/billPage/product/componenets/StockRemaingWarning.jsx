import React from "react";

const StockRemaingWarning = ({ product }) => {
  return (
    <div
      className="w-4/5 ml-3 mb-2 bg-blue-200 px-2 py-1 text-red-600 rounded-lg
     text-2xl font-sans"
    >
      <h1>
        *Product{" "}
        <span className="font-serif font-semibold -500 text-blue-500">
          {product.name}
        </span>{" "}
        has only{" "}
        <span className=" font-semibold -500 text-blue-500">
          {" "}
          {product.quantity}{" "}
        </span>{" "}
        item left. Please add stock in time.
      </h1>
    </div>
  );
};

export default StockRemaingWarning;
