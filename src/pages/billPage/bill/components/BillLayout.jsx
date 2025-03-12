import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { informationf } from "../../../../../store/storeslice";
import { allBillData } from "../../../../../store/billHistory";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { setCustomerName } from "../../../../../store/billdata";

const BillLayout = ({ customerName }) => {
  const dispatch = useDispatch();
  const { informationFetch } = useSelector((state) => state.stores);
  const { products } = useSelector((state) => state.billData);
  const [Checkout, setCheckout] = useState(false);
  const anotherBillHandler = () => {
    dispatch(setCustomerName(null));
  };

  const date = new Date().toLocaleDateString();
  const billRef = useRef(); // Reference to capture the bill section

  useEffect(() => {
    if (!informationFetch) {
      dispatch(informationf());
    }
  }, []);

  const totalAmount = (products || []).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const submitHandler = () => {
    dispatch(allBillData({ customerName, products, totalAmount, date }));
    setCheckout(true);
  };

  //  Function to Export PDF
  const exportToPDF = () => {
    const input = billRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190; // PDF width
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save(`Bill_${customerName}.pdf`);
    });
  };

  return (
    <div className="w-fit mx-auto p-6 bg-white shadow-lg rounded-lg border fixed ml-8">
      {/* Bill Section to Capture */}
      <div ref={billRef}>
        {/* Header */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-green-500">
            {informationFetch?.name}
          </h1>
          <p className="text-sm text-gray-600">{informationFetch?.address}</p>
        </div>
        <div className="flex justify-between px-3">
          <div className="text-center flex items-end">
            <p className="text-sm text-gray-600">Date: {date}</p>
          </div>
          <div className="flex flex-col font-semibold justify-end">
            <h1>Proprietor: {informationFetch?.owner}</h1>
            <h1>Contact No: {informationFetch?.contact}</h1>
          </div>
        </div>

        {/* Customer Details */}
        <div className="mt-4 border-t pt-2">
          <h2 className="text-lg font-semibold">Bill To:</h2>
          <p className="text-gray-700">{customerName}</p>
        </div>

        {/* Bill Table */}
        <div className="mt-4">
          {products.length === 0 ? (
            <p className="text-center text-gray-500 mt-4">
              No products added to the bill.
            </p>
          ) : (
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
                {products
                  .filter((item) => item.quantity > 0) // Filters out products with quantity 0
                  .map((item, index) => (
                    <tr key={index} className="">
                      <td className="border px-2 py-1 ">{item.name}</td>
                      <td className="border px-2 py-1">Rs. {item.price}</td>
                      <td className="border px-2 py-1">{item.quantity}</td>
                      <td className="border px-2 py-1">
                        Rs. {item.price * item.quantity}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Total Amount */}
        <div className="flex justify-between items-center mt-4 border-t ">
          <h2 className="text-lg font-semibold">Grand Total:</h2>
          <h2 className="text-xl font-bold">Rs. {totalAmount}</h2>
        </div>
        <div className="mt-4 text-center text-gray-600 text-sm border-t py-3  flex justify-between">
          <p>Thank you for your purchase!</p>
        </div>
      </div>
      {/* Footer */}
      <div className="mt-4 text-center text-gray-600 text-sm   flex justify-between">
        <div>
          {Checkout == false ? (
            <button
              onClick={submitHandler}
              className="text-black cursor-pointer bg-green-500 px-3 py-1 rounded-md font-semibold max-h-7 hover:bg-green-400"
            >
              Checkout
            </button>
          ) : (
            <>
              <button
                onClick={exportToPDF}
                className="ml-3 text-black cursor-pointer bg-blue-500 px-3 py-1 rounded-md font-semibold max-h-7 hover:bg-blue-400"
              >
                Export PDF
              </button>
              <button
                onClick={anotherBillHandler}
                className="ml-3 text-black cursor-pointer bg-green-500 px-3 py-1 rounded-md font-semibold max-h-7 hover:bg-blue-400"
              >
                Create Another Bill +
              </button>
            </>
          )}
        </div>
      </div>
      <h1 className="text-red-400 mt-2">* Add 0 item to remove items</h1>
    </div>
  );
};

export default BillLayout;
