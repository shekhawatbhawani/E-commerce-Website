import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Accordion from "./Accordion";
// Import Slider Cards
import SliderFirst from "./SliderFirst";
// Import Slider Card Data
import { sliderData } from "../Constant/sliderData";
// Import Slider
import Slider from "react-slick";
// Import Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardDetails = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const { img1, img2, img3, img4, name, cost, location: orderLocation, distance, desc } = location.state || {};

  let [mainImg, setMainImg] = useState(img1 || "https://via.placeholder.com/400"); // Fallback to a placeholder image

  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2, // Show 2 slides at 800px
          slidesToScroll: 1, // Scroll 1 slide at a time
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let handleOrder = () => {

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

  let handleImage = (e) => {
    setMainImg(e.target.src);
  };

  return (
    <>
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row gap-6">
      {/* Image Section */}
      <div className="flex flex-col lg:w-1/2">
        <div className="flex flex-col-reverse sm:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex sm:flex-col gap-2 sm:gap-3">
            <img
              src={img1}
              alt="Thumbnail 1"
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl shadow-lg object-cover cursor-pointer"
              onClick={handleImage}
            />
            <img
              src={img2}
              alt="Thumbnail 2"
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl shadow-lg object-cover cursor-pointer"
              onClick={handleImage}
            />
            <img
              src={img3}
              alt="Thumbnail 3"
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl shadow-lg object-cover cursor-pointer"
              onClick={handleImage}
            />
            <img
              src={img4}
              alt="Thumbnail 4"
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl shadow-lg object-cover cursor-pointer"
              onClick={handleImage}
            />
          </div>

          {/* Main Image */}
          <div className="w-full sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px]">
            <img
              src={mainImg}
              className="w-full h-full object-cover rounded-lg"
              alt="Main"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-4 mt-4">
          <button
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-2xl w-full shadow-md hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transform transition duration-300 ease-in-out hover:scale-105"
            onClick={handleOrder}
          >
            Order
          </button>
          <button className="bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-2xl shadow-md hover:from-green-600 hover:to-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 transform transition duration-300 ease-in-out hover:scale-105 w-full">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:w-1/2">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-3">{name}</h1>
        <p className="text-base md:text-lg mb-3">{desc}</p>
        <p className="text-base md:text-lg font-medium mb-2">
          <span className="font-semibold">MRP: </span>
          <span className="text-red-500">₹ {cost}</span>
        </p>
        <p className="text-sm md:text-base text-gray-600 mt-1 mb-4">
          Inclusive of all taxes. Shipping calculated at checkout.
        </p>

        <div className="max-w-xl">
          <Accordion />
        </div>
      </div>

    </div>

          {/* Slider Cards */}
          <div className="py-10 px-10 m-auto">
        <Slider {...settings}>
          {sliderData.map((e, i) => {
            return (
              <SliderFirst
                key={i}
                img1={e.img1}
                img2={e.img2}
                img3={e.img3}
                img4={e.img4}
                name={e.title}
                cost={e.cost}
                desc = {e.description}
                location={e.location}
                distance={e.distance}
              />
            );
          })}
        </Slider>
      </div>


    </>
  );
};

export default CardDetails;
