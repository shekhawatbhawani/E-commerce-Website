import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        {/* Success Icon */}
        <div className="mb-6">
          <svg
            className="w-16 h-16 mx-auto text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Success Message */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Order Submitted Successfully!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been successfully placed and will be processed shortly.
        </p>

        {/* Back to Home Button */}
        <button
          onClick={() => navigate('/')} // Navigate to the home page
          className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;