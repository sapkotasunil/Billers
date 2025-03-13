import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="min-h-screen  bg-gray-100 flex flex-col ">
        {/* Hero Section */}
        <header className="bg-blue-600 text-white py-16 text-center h-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">
            Simplify Your Bills, Amplify Your Business
          </h1>
          <p className="mt-4 text-lg">
            Billing Without the Stress, Business Without Limits
          </p>
          <Link to={"/login"}>
            <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-200 transition">
              Get Started
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
              <h3 className="text-xl font-semibold text-blue-600">
                Secure Payments
              </h3>
              <p className="mt-2 text-gray-600">
                Seamless transactions with secure payment integrations.
              </p>
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
