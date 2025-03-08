import React from "react";

const StockQutityCard = ({ data }) => {
  return (
    <div className="w-[300px] h-fit border-2 border-gray-600 bg-white shadow-lg rounded-lg p-4 space-y-4">
      {/* Product Image */}
      <div className="w-full h-[250px] rounded-md overflow-hidden bg-gray-200 flex justify-center items-center">
        <img
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          src={data.image}
          alt="Samsung TV"
          onError={(e) =>
            (e.target.src =
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2kFKIsg6Ec7sPXCrwusiUyLhFrcKtB9YDQ&s")
          }
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-xl font-bold text-gray-800">{data.name}</h1>
        <p className="text-lg font-semibold text-yellow-600">
          Price: {data.price}
        </p>
        <p className="text-gray-700 font-medium">
          Quantity Available:{" "}
          <span className="font-semibold">{data.quantity}</span>
        </p>
      </div>
    </div>
  );
};

export default StockQutityCard;
