import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Accordion from "./Accordion";
const CardDetails = () => {
  
    let navigate = useNavigate()
  
    const location = useLocation();
    const { img1, img2, img3, img4 , name, cost, location: orderLocation, distance , desc } = location.state;

 console.log(desc);
 
  
    let handelOrder = () => {
      navigate("/order", {
        state: {
          img1,
          name,
          cost,
          orderLocation,
          distance,
        },
      });
    };
  let [image1, setImg1] = useState(img1)
  let [image2, setImg2] = useState(img2)
  let [image3, setImg3] = useState(img3)
  let [image4, setImg4] = useState(img4)
  let [image5, setImg5] = useState("https://images.pexels.com/photos/30540398/pexels-photo-30540398/free-photo-of-stylish-woman-holding-dessert-in-studio-setting.jpeg?auto=compress&cs=tinysrgb&w=600")
  let [mainImg , setMainImg] = useState(img1)

  let handelImage = (e)=>{
      setMainImg(e.target.src)
  }




  return (
    <div className="p-5 sm:p-10 flex flex-col lg:flex-row gap-6">
      {/* Image Card */}
      <div>
        <div className="flex flex-col-reverse sm:flex-row gap-5">
          {/* Thumbnails */}
          <div className="flex sm:flex-col gap-3">
            <img
              src={image1}
              alt=""
              className="h-20 w-20 mt-3 rounded-2xl shadow-lg object-cover"
              onClick={handelImage}
            />
            <img
              src={image2}
              alt=""
              className="h-20 w-20 mt-3 rounded-2xl shadow-lg object-cover"
              onClick={handelImage}
            />
            <img
              src={image3}
              className="h-20 w-20 mt-3 rounded-2xl shadow-lg object-cover"
              onClick={handelImage}
              alt=""
            />
            <img
              src={image4}
              alt=""
              className="h-20 w-20 mt-3 rounded-2xl shadow-lg object-cover"
              onClick={handelImage}
            />
            <img
              src={image5}
              className="h-20 w-20 mt-3 rounded-2xl shadow-lg object-cover"
              onClick={handelImage}
              alt=""
            />
          </div>

          {/* Main Image */}
          <div className="w-full sm:w-[400px] h-[250px] sm:h-[450px]">
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
        <h1 className="text-xl p-2 sm:text-4xl w-lg font-semibold mb-3">{name}</h1>
        <p className="w-xl p-2">{desc}</p>
        <p className="text-lg p-2 sm:text-xl font-medium">
          <span className="font-semibold">MRP: </span>
          <span className="text-red-500">₹ {cost}</span>
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
