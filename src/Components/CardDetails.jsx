import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Accordion from "./Accordion";
const CardDetails = () => {
  let [img1, setImg1] = useState("https://images.pexels.com/photos/30507116/pexels-photo-30507116/free-photo-of-cozy-cafe-scene-with-cappuccino-and-book.jpeg?auto=compress&cs=tinysrgb&w=600")
  let [img2, setImg2] = useState("https://images.pexels.com/photos/30562458/pexels-photo-30562458/free-photo-of-woman-enjoying-watermelon-on-a-summer-day.jpeg?auto=compress&cs=tinysrgb&w=600")
  let [img3, setImg3] = useState("https://images.pexels.com/photos/30538480/pexels-photo-30538480/free-photo-of-fresh-summer-fruits-on-a-checkered-tablecloth.jpeg?auto=compress&cs=tinysrgb&w=600")
  let [img4, setImg4] = useState("https://images.pexels.com/photos/30540388/pexels-photo-30540388/free-photo-of-close-up-of-fresh-lychee-fruits-on-branch.jpeg?auto=compress&cs=tinysrgb&w=600")
  let [img5, setImg5] = useState("https://images.pexels.com/photos/30540398/pexels-photo-30540398/free-photo-of-stylish-woman-holding-dessert-in-studio-setting.jpeg?auto=compress&cs=tinysrgb&w=600")
  let [mainImg , setMainImg] = useState("https://images.pexels.com/photos/30562458/pexels-photo-30562458/free-photo-of-woman-enjoying-watermelon-on-a-summer-day.jpeg?auto=compress&cs=tinysrgb&w=600")

  let handelImage = (e)=>{
      setMainImg(e.target.src)
  }

  let navigate = useNavigate()

  
  let handelOrder = ()=>{
  navigate("/order")
}





  return (
    <div className="p-5 sm:p-10 flex flex-col lg:flex-row gap-6">
      {/* Image Card */}
      <div>
        <div className="flex flex-col-reverse sm:flex-row gap-5">
          {/* Thumbnails */}
          <div className="flex sm:flex-col gap-3">
            <img
              src={img1}
              alt=""
              className="h-20 w-20 mt-3 rounded-2xl shadow-lg object-cover"
              onClick={handelImage}
            />
            <img
              src={img2}
              alt=""
              className="h-20 w-20 mt-3 rounded-2xl shadow-lg object-cover"
              onClick={handelImage}
            />
            <img
              src={img3}
              className="h-20 w-20 mt-3 rounded-2xl shadow-lg object-cover"
              onClick={handelImage}
              alt=""
            />
            <img
              src={img4}
              alt=""
              className="h-20 w-20 mt-3 rounded-2xl shadow-lg object-cover"
              onClick={handelImage}
            />
            <img
              src={img5}
              className="h-20 w-20 mt-3 rounded-2xl shadow-lg object-cover"
              onClick={handelImage}
              alt=""
            />
          </div>

          {/* Main Image */}
          <div className="w-full sm:w-[450px] h-[300px] sm:h-[450px]">
            <img
              src={mainImg}
              className="w-full h-full object-cover rounded-lg"
              alt=""
            />
              <div className="flex justify-between gap-4 mt-4">
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-2xl shadow-md w-sm hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transform transition duration-300 ease-in-out hover:scale-105" onClick={handelOrder}>
            Order
          </button>
          <button className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-2xl w-sm shadow-md hover:from-green-600 hover:to-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 transform transition duration-300 ease-in-out hover:scale-105">
            Add to Cart
          </button>
        </div>
          </div>
        </div>
        
      
      </div>

      {/* Content Card */}
      <div className="flex flex-col">
        <h1 className="text-xl p-2 sm:text-5xl font-semibold mb-3">Septilin Syrup</h1>
        <p className="w-xl p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dolorum. Obcaecati rem nesciunt impedit necessitatibus culpa</p>
        <p className="text-lg p-2 sm:text-xl font-medium">
          <span className="font-semibold">MRP: </span>
          <span className="text-red-500">₹ 200.00</span>
        </p>
        <p className="text-sm p-2 sm:text-base text-gray-600 mt-2">
          Inclusive of all taxes. Shipping calculated at checkout.
        </p>
        <div className="max-w-xl">
        <Accordion/>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
