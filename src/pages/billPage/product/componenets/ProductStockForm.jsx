import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, setStatus } from "../../../../../store/product";

const ProductStockForm = ({ close }) => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.product);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
  };
  useEffect(() => {
    if (status === "success") {
      close();
      dispatch(setStatus(null));
    }
  }, [status]);

  return (
    <div
      className="fixed inset-0 bg-black  bg-opacity-30 flex justify-center items-center"
      onClick={close} // Clicking outside will close the form
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevent click from bubbling up
        className="max-w-md min-w-[30vw] mx-auto p-6 bg-white shadow-lg rounded-lg"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-green-500">
            Add Product Stock
          </h2>
          <button onClick={close} className="text-green-500">
            <ImCross />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Name */}
          <div>
            <label className="block font-medium">Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="w-full border p-2 rounded-md focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* Product Photo */}
          <div>
            <label className="block font-medium">Product Image URL</label>
            <input
              type="text"
              name="image"
              value={product.image}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block font-medium">Price (Rs.)</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full border p-2 rounded-md focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block font-medium">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
              className="w-full border p-2 rounded-md focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductStockForm;
