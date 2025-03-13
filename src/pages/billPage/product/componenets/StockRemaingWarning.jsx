import React from "react";

const StockRemaingWarning = ({ product }) => {
  return (
    <div
      className="w-4/5 ml-3 mb-2 bg-blue-200 px-2 py-1 text-red-600 rounded-lg
     text-2xl"
    >
      <h1>
        *Product {product.name} has only {product.quantity} item left. Please
        add stock in time.
      </h1>
    </div>
  );
};

export default StockRemaingWarning;
