import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { information, setStatus } from "../../../../store/storeslice";

const StoreBillForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.stores);
  const [store, setStore] = useState({
    name: "",
    owner: "",
    address: "",
    contact: "",
    email: "",
  });

  const handleChange = (e) => {
    setStore({ ...store, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(information(store));
    setStore({
      name: "",
      owner: "",
      address: "",
      contact: "",
      email: "",
    });
  };
  useEffect(() => {
    if (status === "success") {
      dispatch(setStatus(null));
      navigate("/billmaking");
    }
  }, [status]);

  return (
    <>
      <Layout>
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
          <h2 className="text-2xl font-bold text-center mb-4">
            Store Information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Store Name */}
            <div>
              <label className="block font-medium">Store Name</label>
              <input
                type="text"
                name="name"
                value={store.name}
                onChange={handleChange}
                className="w-full border p-2 rounded-md focus:ring focus:ring-blue-200"
                required
              />
            </div>

            {/* Owner Name */}
            <div>
              <label className="block font-medium">Owner Name</label>
              <input
                type="text"
                name="owner"
                value={store.owner}
                onChange={handleChange}
                className="w-full border p-2 rounded-md focus:ring focus:ring-blue-200"
                required
              />
            </div>

            {/* Address */}
            <div>
              <label className="block font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={store.address}
                onChange={handleChange}
                className="w-full border p-2 rounded-md focus:ring focus:ring-blue-200"
                required
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block font-medium">Contact Number</label>
              <input
                type="text"
                name="contact"
                value={store.contact}
                onChange={handleChange}
                className="w-full border p-2 rounded-md focus:ring focus:ring-blue-200"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={store.email}
                onChange={handleChange}
                className="w-full border p-2 rounded-md focus:ring focus:ring-blue-200"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default StoreBillForm;
