import React, { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import ProductStockForm from "./ProductStockForm";

const AddProduct = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("Popup state changed:", open);
  }, [open]);

  const closePopup = () => setOpen(false);
  const openPopup = () => setOpen(true);

  return (
    <div
      onClick={openPopup}
      className="cursor-pointer w-[307.2px] h-[460.2px] flex flex-col items-center justify-center border-2 border-gray-600 rounded-md bg-green-300 px-3 py-1 space-y-3"
    >
      <h1 className="text-8xl font-semibold">
        <FiPlus />
      </h1>
      <h1 className="text-center text-4xl font-semibold">
        Add <br /> Product
      </h1>
      {open && <ProductStockForm close={closePopup} open={open} />}
    </div>
  );
};

export default AddProduct;
