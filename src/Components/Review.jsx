import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";

const Review = () => {
  const location = useLocation();
  const { name, img1, cost, orderLocation, distance } = location.state;
  console.log(img1, name, cost, distance);

  let navigate = useNavigate();
  let handelSubmit = () => {
    navigate("/order-submitted");
  };

  let handelTotal = (Price) => {
    let total = parseInt(Price) + 15;
    return `₹${total}`;
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Card Layout */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 sm:p-8 lg:p-10">
        
        {/* Image Section */}
        <div className="w-full h-56 sm:h-72 lg:h-80 mb-6">
          <img
            className="object-cover w-full h-full rounded-lg shadow-md"
            src={img1}
            alt="Product"
          />
        </div>

        {/* Order Details Section */}
        <div className="w-full">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800">
            Order Summary
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos fugiat sint, aliquam nesciunt aliquid.
          </p>

          {/* Total Amount Section */}
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md mb-6">
            <p className="text-lg sm:text-xl font-semibold mb-4 text-gray-700">Total Amount</p>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <p>Item Price:</p>
              <p className="font-semibold text-right">{cost}</p>
              <p>Delivery:</p>
              <p className="font-semibold text-right">₹10</p>
              <p>Tax:</p>
              <p className="font-semibold text-right">₹5</p>
            </div>
            <hr className="my-4" />
            <div className="grid grid-cols-2 text-lg">
              <p className="text-gray-800">Total:</p>
              <p className="text-blue-600 font-bold text-right">{handelTotal(cost)}</p>
            </div>
          </div>

          {/* Payment Method Section */}
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md mb-6">
            <p className="text-lg sm:text-xl font-semibold mb-4 text-gray-700">Payment Method</p>
            <div className="space-y-3">
              <div>
                <input type="radio" id="cash" name="payment" className="mr-2" />
                <label htmlFor="cash" className="text-gray-600">Cash on Delivery</label>
              </div>
              <div>
                <input type="radio" id="online" name="payment" className="mr-2" />
                <label htmlFor="online" className="text-gray-600">Online Payment</label>
              </div>
              <div>
                <input type="radio" id="card" name="payment" className="mr-2" />
                <label htmlFor="card" className="text-gray-600">Credit/Debit Card</label>
              </div>
              <div>
                <input type="radio" id="paypal" name="payment" className="mr-2" />
                <label htmlFor="paypal" className="text-gray-600">PayPal</label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center sm:text-right">
            <button
              className="bg-blue-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
              onClick={handelSubmit}
            >
              Submit Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
