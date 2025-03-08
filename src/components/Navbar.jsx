import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="  w-full py-4 px-6  bg-gradient-to-r from-blue-600 to-green-500 mb-5 text-white shadow-md flex justify-between pb-3 items-center">
      {/* Logo */}
      <Link to={"/"}>
        <div className="text-3xl font-bold tracking-wide">💰 Billers</div>
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-6 text-lg">
        <Link
          to="/stockadd"
          className="hover:text-yellow-300 transition duration-300"
        >
          Add Stock
        </Link>
        <Link
          to="/billmaking"
          className="hover:text-yellow-300 transition duration-300"
        >
          Create Bill
        </Link>
        <Link
          to="/history"
          className="hover:text-yellow-300 transition duration-300"
        >
          History
        </Link>
        <Link to="/" className="hover:text-yellow-300 transition duration-300">
          Log out
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
