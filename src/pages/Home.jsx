import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="min-h-screen  bg-gray-100 flex flex-col ">
        {/* Hero Section */}
        <header className="bg-blue-300 text-blue-600 py-16 text-center h-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">
            Simplify Your Bills, Amplify Your Business
          </h1>
          <p className="mt-4 text-lg text-green-600">
            Billing Without the Stress, Business Without Limits
          </p>
          <Link to={"/login"}>
            <button
              className="mt-6 px-6 py-3 relative overflow-hidden bg-white text-blue-600 font-semibold 
                    rounded-md flex items-center gap-2 border-2 
                    transition-all duration-300 ease-in-out transform hover:scale-105 
                    group"
            >
              <span
                className="absolute inset-0 bg-green-500 w-0 transition-all duration-400 ease-in-out 
                   group-hover:w-full"
              ></span>
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
                Get Started
                <IoArrowForward className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </Link>
        </header>

        {/* Features Section */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Why Choose Us?
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
              <h3 className="text-xl font-semibold text-blue-600">
                Fast & Easy
              </h3>
              <p className="mt-2 text-gray-600">
                Generate invoices in just a few clicks.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
              <h3 className="text-xl font-semibold text-blue-600">Simple UI</h3>
              <p className="mt-2 text-gray-600">Easy to use and Understand</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
              <h3 className="text-xl font-semibold text-blue-600">
                Customizable
              </h3>
              <p className="mt-2 text-gray-600">
                Personalize invoices with your brand identity.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
