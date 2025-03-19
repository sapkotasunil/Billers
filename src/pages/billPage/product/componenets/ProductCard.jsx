import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { billDatas } from "../../../../../store/billdata";

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const [productNumber, setProductNumber] = useState(0);
  const [product, setProduct] = useState({
    name: data.name,
    price: data.price,
    quantity: 0,
  });

  useEffect(() => {
    setProduct((prev) => ({ ...prev, quantity: productNumber }));
  }, [productNumber]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(billDatas(product));
    setProductNumber(0);
  };

  return (
    <div className="w-[200px] lg:w-[16vw] h-auto border border-gray-400 max-h-[341.2px] bg-white shadow-md rounded-lg p-3 space-y-2 transition-all">
      {/* Product Image */}
      <div className="w-full h-[150px] rounded-md overflow-hidden bg-gray-200 flex justify-center items-center">
        <img
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          src={data.image ? data.image : "logo.png"}
          alt={data.name}
          onError={(e) => (e.target.src = "logo.png")}
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-sm md:text-md font-semibold text-gray-800">
          {data.name}
        </h1>
        <p className="text-sm font-semibold text-yellow-600">
          Rs. {data.price}
        </p>
        <div className="text-sm font-semibold text-green-600">
          {data.quantity >= 0 ? (
            <p>Available Stock: {data.quantity}</p>
          ) : (
            <p>OverSold stock: {Math.abs(data.quantity)}</p>
          )}
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center justify-between border border-gray-400 rounded-md overflow-hidden">
        <button
          className="w-12 h-10 bg-red-500 text-white text-lg font-bold hover:bg-red-600 transition"
          onClick={() => setProductNumber((prev) => Math.max(0, prev - 1))}
        >
          -
        </button>
        <input
          type="number"
          className="w-full h-10 bg-gray-100 text-center text-md font-semibold border-none outline-none 
             [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none 
             [&::-moz-appearance]:textfield"
          value={productNumber}
          placeholder="0"
          onChange={(e) => setProductNumber(Number(e.target.value))}
        />

        <button
          className="w-12 h-10 bg-green-500 text-white text-lg font-bold hover:bg-green-600 transition"
          onClick={() => setProductNumber((prev) => prev + 1)}
        >
          +
        </button>
      </div>

      {/* Add Button */}
      <button
        onClick={submitHandler}
        className="w-full h-10 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition"
      >
        Add
      </button>
    </div>
  );
};

export default ProductCard;
