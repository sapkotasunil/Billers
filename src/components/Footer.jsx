import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-4 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">💰 Billers</div>

        {/* Quick Links */}
        <div className="flex gap-6 text-sm md:text-base mt-3 md:mt-0">
          <Link to="/stockadd" className="hover:text-yellow-300 transition">
            Add Stock
          </Link>
          <Link to="/billmaking" className="hover:text-yellow-300 transition">
            Create Bill
          </Link>
          <Link to="/history" className="hover:text-yellow-300 transition">
            History
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-200 mt-3 md:mt-0">
          © {new Date().getFullYear()} Billers. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
