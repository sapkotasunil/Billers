import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { informationf } from "../../../../../store/storeslice";
import { allBillData } from "../../../../../store/billHistory";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { NullBillDatas, setCustomerName } from "../../../../../store/billdata";
import { editProductAfterCheckout } from "../../../../../store/product";
import NepaliDate from "nepali-datetime";

const BillLayout = ({ customerName }) => {
  const dispatch = useDispatch();
  const { informationFetch } = useSelector((state) => state.stores);
  const { products } = useSelector((state) => state.billData);
  const [Checkout, setCheckout] = useState(false);
  const anotherBillHandler = () => {
    dispatch(setCustomerName(null));
    dispatch(NullBillDatas());
    try {
      localStorage.removeItem("checkouted");
    } catch (error) {
      console.log("error");
    }
  };
  const [date, setDate] = useState("");
  useEffect(() => {
    const now = new NepaliDate(); // Get current Nepali date
    setDate(now.format("YYYY-MM-DD")); // Format as YYYY-MM-DD
  }, []);

  const billRef = useRef(); // Reference to capture the bill section

  useEffect(() => {
    if (!informationFetch) {
      dispatch(informationf());
    }
  }, [informationFetch, products, dispatch, customerName]);

  const totalAmount = (products || []).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const submitHandler = () => {
    dispatch(allBillData({ customerName, products, totalAmount, date }));
    dispatch(editProductAfterCheckout(products));
    localStorage.setItem("checkouted", JSON.stringify("checkouted"));
    setCheckout(true);
  };

  const checkoutActive = JSON.parse(localStorage.getItem("checkouted"));

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
    <div className="w-fit mx-auto border-l-2 py-2 px-6 min-w-[325px] bg-white shadow-lg rounded-lg   border  ">
      {/* Bill Section to Capture */}
      <div ref={billRef}>
        {/* Header */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-green-500">
            {informationFetch?.name}
          </h1>
          <p className="text-sm text-gray-600">{informationFetch?.address}</p>
        </div>
        <div className="flex justify-between px-1 gap-4">
          <div className="text-center flex items-end">
            <p className="text-sm text-gray-600">Date: {date}</p>
          </div>
          <div className="flex  flex-col mt-2 font-semibold justify-end">
            <h1>proprietor: {informationFetch?.owner}</h1>
            <h1>Contact No: {informationFetch?.contact}</h1>
          </div>
        </div>

        {/* Customer Details */}
        <div className="mt-2 border-t pt-2 flex  items-center">
          <h2 className="text-lg font-semibold">Name: </h2>
          <p className="text-gray-700 ml-1"> {customerName}</p>
        </div>

        {/* Bill Table */}
        <div className="mt-2">
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
                    <td className="border px-2 text-center py-1">
                      {item.quantity}
                    </td>
                    <td className="border px-2 py-1">
                      Rs. {item.price * item.quantity}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
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
          {Checkout == false && !checkoutActive ? (
            <div>
              <button
                onClick={submitHandler}
                className="text-black cursor-pointer bg-green-500 px-3 py-1 rounded-md font-semibold max-h-7 hover:bg-green-400"
              >
                Checkout
              </button>
              <button
                onClick={anotherBillHandler}
                className="ml-3 text-black cursor-pointer bg-green-500 px-3 py-1 rounded-md font-semibold max-h-7 hover:bg-blue-400"
              >
                Cancel
              </button>
            </div>
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
