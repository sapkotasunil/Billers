import React from "react";

const SearchBar = ({ SetSearchvalue }) => {
  return (
    <>
      <div className="flex  relative w-full max-w-lg mx-5">
        <input
          onChange={(e) => {
            SetSearchvalue(e.target.value);
          }}
          type="text"
          placeholder="Search products..."
          className="w-full px-5 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
        <button className="absolute right-3 top-2/4 -translate-y-2/4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
          🔍
        </button>
      </div>
    </>
  );
};

export default SearchBar;
