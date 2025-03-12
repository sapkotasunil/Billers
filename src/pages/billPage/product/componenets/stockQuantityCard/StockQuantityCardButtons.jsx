import React, { useState } from "react";
import ButtonPopup from "./ButtonPopup";

const StockQuantityCardButtons = ({ productName, types, dta }) => {
  const [openInput, setOpenInput] = useState(false);
  const openInputHndler = () => {
    setOpenInput(true);
  };
  const closeInputHndler = () => {
    setOpenInput(false);
  };
  return (
    <>
      {!openInput ? (
        <button
          onClick={openInputHndler}
          className="cursor-pointer h-fit bg-green-500 px-3 py-1 rounded-md font-semibold max-h-7  hover:bg-green-400"
        >
          {types}
        </button>
      ) : (
        <ButtonPopup
          closeInputHndler={closeInputHndler}
          types={types}
          productName={productName}
        />
      )}
    </>
  );
};

export default StockQuantityCardButtons;
