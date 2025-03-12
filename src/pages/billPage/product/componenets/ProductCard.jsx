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

  // Update product.quantity when productNumber changes
  useEffect(() => {
    setProduct((prev) => ({ ...prev, quantity: productNumber }));
  }, [productNumber]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(billDatas(product));
    setProductNumber(0);
  };

  return (
    <div className="w-[300px] h-fit border-2 border-gray-600 bg-white shadow-lg rounded-lg p-4 space-y-4">
      {/* Product Image */}
      <div className="w-full h-[250px] rounded-md overflow-hidden bg-gray-200 flex justify-center items-center">
        <img
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          src={data.image}
          alt={data.name}
          onError={(e) =>
            (e.target.src =
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2kFKIsg6Ec7sPXCrwusiUyLhFrcKtB9YDQ&s")
          }
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-bold text-gray-800">{data.name}</h1>
        <p className="text-lg font-semibold text-yellow-600">
          Rs. {data.price}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center justify-between border-2 border-gray-600 rounded-md overflow-hidden">
        <button
          className="w-16 h-12 bg-red-500 text-white text-2xl font-bold hover:bg-red-600 transition"
          onClick={() => setProductNumber((prev) => Math.max(0, prev - 1))}
        >
          -
        </button>
        <input
          type="number"
          className="w-full h-12 bg-gray-100 text-center text-xl font-semibold border-none outline-none"
          value={productNumber}
          onChange={(e) => setProductNumber(Number(e.target.value))}
        />
        <button
          className="w-16 h-12 bg-green-500 text-white text-2xl font-bold hover:bg-green-600 transition"
          onClick={() => setProductNumber((prev) => prev + 1)}
        >
          +
        </button>
      </div>

      {/* Add Button */}
      <button
        onClick={submitHandler}
        className="w-full h-12 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition"
      >
        Add
      </button>
    </div>
  );
};

export default ProductCard;
