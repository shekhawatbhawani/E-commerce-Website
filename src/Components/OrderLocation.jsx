import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const OrderLocation = () => {
  const location = useLocation();
  const { img1, name, cost, location: orderLocation, distance } = location.state;
  console.log(img1, name, cost, distance);

  let navigate = useNavigate();
  let handelSave = () => {
    navigate("/review", {
      state: {
        img1,
        name,
        cost,
        orderLocation,
        distance,
      },
    });
  };

  return (
    <div className="py-6 px-4 sm:px-6 md:px-10 lg:px-12 max-w-2xl mx-auto bg-white shadow-lg rounded-lg my-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Shipping Information
      </h2>

      <form action="/submit" method="post">
        {/* Form Inputs */}
        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 shadow-sm"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="PIN Code"
              min={0}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 shadow-sm"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Phone Number"
              min={0}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 shadow-sm"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="State"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 shadow-sm"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="City"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 shadow-sm"
            />
          </div>
          <div>
            <textarea
              placeholder="Full Address"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 shadow-sm resize-none"
              rows="3"
            />
          </div>
        </div>

        {/* Radio Buttons */}
        <div className="mt-5 space-y-2">
          <p className="text-gray-600">Address Type:</p>
          <div className="flex gap-4 items-center">
            <div className="flex items-center">
              <input
                type="radio"
                id="office"
                name="addressType"
                className="mr-2"
              />
              <label
                htmlFor="office"
                className="text-sm font-medium text-gray-700"
              >
                Office
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="home"
                name="addressType"
                className="mr-2"
              />
              <label
                htmlFor="home"
                className="text-sm font-medium text-gray-700"
              >
                Home
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="other"
                name="addressType"
                className="mr-2"
              />
              <label
                htmlFor="other"
                className="text-sm font-medium text-gray-700"
              >
                Other
              </label>
            </div>
          </div>
        </div>

        {/* Save & Continue Button */}
        <div className="mt-8">
          <button
            className="w-full bg-gradient-to-r from-green-400 to-green-500 text-white py-3 rounded-xl shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300"
            onClick={handelSave}
            type="submit"
          >
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderLocation;
