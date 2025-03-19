import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCustomerName } from "../../store/billdata";

const Navbar = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    localStorage.removeItem("logged");
    dispatch(setCustomerName(null));
  };
  return (
    <nav className=" overflow-hidden  w-full py-4 px-3  bg-gradient-to-r from-yellow-400 to-green-500 mb-5 text-white shadow-md flex justify-between pb-3 items-center">
      {/* Logo */}
      <Link to={"/"}>
        <div className="px-3">
          <img
            className=" h-12 w-30 scale-150"
            src="navbarLogo.png"
            alt="error"
          />
        </div>
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
        <Link
          to="/"
          onClick={logoutHandler}
          className="hover:text-yellow-300 transition duration-300"
        >
          Log out
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
