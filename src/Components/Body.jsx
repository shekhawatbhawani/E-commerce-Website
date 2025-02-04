// Import React
import React from "react";
// Import Slider Cards
import SliderFirst from "./SliderFirst";
// Import Slider Card Data
import { sliderData } from "../Constant/sliderData";

// Import Category Data 

import { dataCategory } from "../Constant/sliderData";

// Import Slider
import Slider from "react-slick";
// Import Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Header Image

import headerImage from "../assets/Images/headerImage.png";
import heading3img from "../assets/Images/headerimg3.webp"
let imgArr = [headerImage  , heading3img, ]

// Import Video GIF  
import GIFVideo from '../assets/Images/GIFVideo.mp4';  

//  Import Slider Category  
import SliderCategory from "./SliderCategory";
import ImagesCard from "./ImagesCard";
import HeaderSliderImage from "./HeaderSliderImage";





const Body = () => {
  //   Slider Settings
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
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
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  
  };
  return (
    <>
      {/* Header Image  */}
     

        {
            <Slider {...settings2}>
                {imgArr.map((e, i) => {
                    return (
                        <HeaderSliderImage key={i} img={e} />
                    )
                })}
            </Slider>
        }

    

      {/* Heading First */}
        <h1 className="text-3xl text-center mt-10 bg-gray-300 p-3 font-bolder shadow-lg">Trending Products</h1>
      {/* Slider Cards */}
      <div className="p-10">
        <Slider {...settings}>
          {sliderData.map((e, i) => {
            return (
              <SliderFirst
                key={i}
                img={e.img}
                name={e.title}
                cost={e.cost}
                location={e.location}
                distance={e.distance}
              />
            );
          })}
        </Slider>
      </div>

      {/* Video  */}

      <div className="flex justify-center items-center bg-gray-100 py-4 relative">
  <video
    src={GIFVideo}
    className="w-full max-w-6xl h-auto rounded-xl shadow-lg"
    autoPlay
    loop
    muted
  ></video>

  <div className="absolute bottom-22 left-22 bg-white opacity-50 p-6 rounded-xl shadow-md max-w-xs">
    <h1 className="text-xl font-semibold mb-2">PLANT SEEDS OF HEALTH</h1>
    <p className="text-sm mb-4">
      Introducing organic herb and vegetable seed packets, grown at our partner farm in Southern Oregon. Every seed purchase supports regenerative agriculture and restoration of wild spaces.
    </p>
    <button className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition">
      SHOP SEEDS NOW
    </button>
  </div>
</div>

    {/* Category cards */}
      <div className="flex justify-center gap-25 p-8 py-14 bg-white mt-10 flex-wrap">
      {
            dataCategory.map((e,i)=>{
                return (
                    <SliderCategory key={i} img={e.img} title={e.title}/>
                )
            })
        }
      </div>

      {/* Images card */}

      <ImagesCard/>
    </>
  );
};

export default Body;
