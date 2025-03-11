import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editProduct } from "../../../../../../store/product";

const ButtonPopup = ({ closeInputHndler, types, productName }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    closeInputHndler();
    dispatch(editProduct(productName, value, types));
  };
  const inputHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className="h-fit w-fit px-3 py-1 border-solid border-blue-500 border-2 rounded-lg ">
        <form
          onSubmit={submitHandler}
          className="flex flex-col justify-center gap-3"
          action=""
        >
          <h1 className="font-semibold">{types}</h1>
          <input
            onChange={inputHandler}
            value={value}
            className="w-16 h-7 px-1 border-solid border-green-500 border-2 rounded-lg"
            type="number"
          />
          <button className="cursor-pointer bg-green-500 px-2 py-1 rounded-md font-semibold  hover:bg-green-400">
            Save
          </button>
          <button
            onClick={closeInputHndler}
            className="cursor-pointer bg-red-500 px-2 py-1 rounded-md font-semibold  hover:bg-red-400"
          >
            cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default ButtonPopup;
