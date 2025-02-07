// Import React
import React from "react";
// Import Slider Cards
import SliderFirst from "./SliderFirst";
// Import Slider Card Data
import { sliderData } from "../Constant/sliderData";

// Import Category Data

import { dataCategory } from "../Constant/sliderData";

// Import Brands Data

import { companyIcons } from "../Constant/sliderData";

// Import Slider
import Slider from "react-slick";
// Import Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Header Image

import headerImage from "../assets/Images/headerImage.png";
import heading3img from "../assets/Images/headerimg3.webp";
import heading4img from "../assets/Images/headerimg4.webp";
import heading5img from "../assets/Images/headerimg5.webp";
import heading6img from "../assets/Images/headerimg6.webp";
let imgArr = [headerImage, heading3img, heading4img, heading5img, heading6img];

// Import Video GIF
import GIFVideo from "../assets/Images/GIFVideo.mp4";

//  Import Slider Category
import SliderCategory from "./SliderCategory";
import ImagesCard from "./ImagesCard";
import HeaderSliderImage from "./HeaderSliderImage";
import Brands from "./Brands";

const Body = () => {
  //   Slider Settings
  var settings = {
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
  var settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };
  return (
    <>
      {/* Header Image  */}
      <div className="p-10">
        {
          <Slider {...settings2}>
            {imgArr.map((e, i) => {
              return <HeaderSliderImage key={i} img={e} />;
            })}
          </Slider>
        }
      </div>

      {/* Heading First */}
      <h1 className="text-3xl text-center mt-10 bg-gray-300 p-3 font-bolder shadow-lg">
        Trending Products
      </h1>
      {/* Slider Cards */}
      <div className="py-10 px-2">
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

      {/* Video  */}
      <div className="flex w-[96%] justify-center items-center bg-gray-100 py-4 relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
        <video
          src={GIFVideo}
          className="w-full max-w-6xl h-auto min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] rounded-xl shadow-lg object-cover"
          autoPlay
          loop
          muted
        ></video>

        <div className="absolute inset-0 flex justify-center items-center opacity-50">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md max-w-xs sm:max-w-sm md:max-w-md text-center">
            <h1 className="text-lg sm:text-xl font-semibold mb-2">
              PLANT SEEDS OF HEALTH
            </h1>
            <p className="text-sm sm:text-base mb-4">
              Introducing organic herb and vegetable seed packets, grown at our
              partner farm in Southern Oregon. Every seed purchase supports
              regenerative agriculture and restoration of wild spaces.
            </p>
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition">
              SHOP SEEDS NOW
            </button>
          </div>
        </div>
      </div>

      {/* Heading First */}
      <h1 className="text-3xl text-center mt-10 bg-gray-300 p-3 font-bolder shadow-lg">
        Trending Categories
      </h1>
      {/* Category cards */}
      <div className="flex justify-center gap-16  py-14 bg-white mt-10 flex-wrap">
        {dataCategory.map((e, i) => {
          return <SliderCategory key={i} img={e.img} title={e.title} />;
        })}
      </div>

      {/* Images card */}

      <ImagesCard />

      {/* Brands  */}

      <div className="flex flex-wrap p-5 gap-10 justify-center">
        {companyIcons.map((e, i) => {
          return <Brands img={e.iconUrl} name={e.name} key={i} />;
        })}
      </div>
    </>
  );
};

export default Body;
