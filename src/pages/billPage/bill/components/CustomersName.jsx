import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCustomerName } from "../../../../../store/billdata";
import { useNavigate } from "react-router-dom";

const CustomersName = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openinput, setOpeninput] = useState(false);
  const [customerName, setcustomerName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCustomerName(customerName));
    setOpeninput(false);
    setcustomerName("");
  };
  const handleChange = (e) => {
    setcustomerName(e.target.value);
  };
  const handlePopup = (e) => {
    setOpeninput(true);
  };
  return (
    <>
      {!openinput ? (
        <div
          onClick={handlePopup}
          className="cursor-pointer font-semibold  hover:bg-yellow-400 h-40 w-40 rounded-full text-2xl flex items-center bg-yellow-300 justify-center border-solid border-2 border-green-500 "
        >
          Create Bill +
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="px-2 py-3 border-solid border-2 border-green-500 w-fit rounded-lg"
          action=""
        >
          <h1 className="text-2xl font-semibold ">Enter customer Name:</h1>
          <input
            value={customerName}
            onChange={handleChange}
            type="text"
            className="h-8 w-60 rounded-lg"
          />{" "}
          <br />
          <button className="bg-green-600 px-5 py-1 rounded-lg mt-2 hover:bg-green-500 ">
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default CustomersName;
