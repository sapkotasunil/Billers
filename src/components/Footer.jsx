import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-2 w-screen fixed bottom-0">
      <div className="container mx-auto flex  items-center  px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">💰 Billers</div>

        {/* Copyright */}
        <div className="text-sm mt-4 md:mt-0 text-gray-200 ml-[36vw]">
          © {new Date().getFullYear()} Billers. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
