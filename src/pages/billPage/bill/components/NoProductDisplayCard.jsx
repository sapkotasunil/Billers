import React from "react";
import { Link } from "react-router-dom";

const NoProductDisplayCard = () => {
  return (
    <Link to={"/stockadd"}>
      <div className="px-5 flex-col flex w-screen h-[85vh] justify-center items-center">
        <h1 className="text-2xl text-blue-600 font-bold">
          No any product Available. Add product to Start
        </h1>
        <div className="px-2 py-1 mt-2 font-semibold  cursor-pointer w-fit text-2xl bg-green-500 hover:bg-green-400 rounded-xl ">
          Add Product +
        </div>
      </div>
    </Link>
  );
};

export default NoProductDisplayCard;
