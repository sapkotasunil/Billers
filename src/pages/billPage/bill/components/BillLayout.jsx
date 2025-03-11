import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { informationf } from "../../../../../store/storeslice";

const BillLayout = ({ customerName }) => {
  const dispatch = useDispatch();
  const { informationFetch, status } = useSelector((state) => state.stores);
  console.log(customerName);
  const date = new Date().toLocaleDateString();
  useEffect(() => {
    dispatch(informationf());
  }, [status]);

  const billData = {
    company: "Sunil Store Pvt. Ltd.",
    address: "Ghodaghodi, Kailali, Nepal",
    customer: "John Doe",
    items: [
      { name: "Laptop", price: 50000, quantity: 1 },
      { name: "Mouse", price: 1000, quantity: 2 },
      { name: "Keyboard", price: 2000, quantity: 1 },
      { name: "Keyboard", price: 2000, quantity: 1 },
      { name: "Keyboard", price: 2000, quantity: 1 },
      { name: "Keyboard", price: 2000, quantity: 1 },
      { name: "Keyboard", price: 2000, quantity: 1 },
    ],
  };
  const totalAmount = billData.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="w-fit mx-auto p-6 bg-white shadow-lg rounded-lg border fixed ml-8">
      {/* Header */}
      <div className=" flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">{informationFetch?.name}</h1>
        <p className="text-sm text-gray-600">{informationFetch?.address}</p>
      </div>
      <div className="flex justify-between px-3">
        <div className="text-center flex items-end">
          <p className="text-sm text-gray-600">Date: {date}</p>
        </div>

        <div className="flex flex-col font-semibold justify-end">
          <h1>propraiter:{informationFetch?.owner}</h1>
          <h1>Contact no:{informationFetch?.contact}</h1>
        </div>
      </div>

      {/* Customer Details */}
      <div className="mt-4 border-t pt-2">
        <h2 className="text-lg font-semibold">Bill To:</h2>
        <p className="text-gray-700">{customerName}</p>
      </div>

      {/* Bill Table */}
      <div className="mt-4">
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Item</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {billData.items.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">Rs. {item.price}</td>
                <td className="border p-2">{item.quantity}</td>
                <td className="border p-2">Rs. {item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total Amount */}
      <div className="flex justify-between items-center mt-4 border-t pt-2">
        <h2 className="text-lg font-semibold">Grand Total:</h2>
        <h2 className="text-xl font-bold">Rs. {totalAmount}</h2>
      </div>

      {/* Footer */}
      <div className="mt-4 text-center text-gray-600 text-sm border-t pt-2">
        <p>Thank you for your purchase!</p>
      </div>
    </div>
  );
};

export default BillLayout;
