import React from "react";
import StockQuantityCardButtons from "./stockQuantityCard/StockQuantityCardButtons";

const StockQutityCard = ({ data }) => {
  return (
    <div className="w-[250px] h-fit border-2 border-gray-600 bg-white shadow-lg rounded-lg p-4 space-y-4">
      {/* Product Image */}
      <div className="w-full h-[200px] rounded-md overflow-hidden bg-gray-200 flex justify-center items-center">
        <img
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          src={data.image ? data.image : "logo.png"}
          alt="Loading..."
          onError={(e) => (e.target.src = "logo.png")}
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col items-center space-y-">
        <h1 className="text-xl font-bold text-gray-800">{data.name}</h1>
        <p className="text-lg font-semibold text-yellow-600">
          Price: {data.price}
        </p>
        <div className="text-sm font-semibold text-green-600">
          {data.quantity >= 0 ? (
            <p>Available Stock: {data.quantity}</p>
          ) : (
            <p>Over sold stock: {Math.abs(data.quantity)}</p>
          )}
        </div>
        <br />
        <div className="flex w-full justify-between px-2">
          <StockQuantityCardButtons
            types={"Add Stock"}
            productName={data.name}
            dataQuantity={data.Quantity}
          />
          <StockQuantityCardButtons
            types={"Edit Price"}
            productName={data.name}
          />
        </div>
      </div>
    </div>
  );
};

export default StockQutityCard;
