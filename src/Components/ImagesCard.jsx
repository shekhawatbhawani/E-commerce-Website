import React from 'react';
import personal_care from '../assets/Images/personal_care.webp';
import oils from '../assets/Images/oils.webp';
import teas from '../assets/Images/teas.webp';
import herbs from '../assets/Images/herbs.webp';

const ImagesCard = () => {
  return (
    <div className="p-14 flex flex-col md:flex-row gap-8 justify-between">
      {/* Personal Care Section */}
      <div className="relative group mb-4 flex-1 h-[400px] overflow-hidden rounded-4xl shadow-lg">
        <img
          src={personal_care}
          alt="Personal Care"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <p className="absolute bottom-8 left-8 text-pink-700 text-lg font-bold bg-white bg-opacity-50 px-4 py-2 rounded-lg">
          Personal Care
        </p>
      </div>

      {/* Oils, Teas, and Herbs Section */}
      <div className="grid grid-cols-1 gap-4 flex-1">
        <div className="grid grid-cols-2 gap-4">
          {/* Oils */}
          <div className="relative group h-[200px] overflow-hidden rounded-4xl shadow-md">
            <img
              src={oils}
              alt="Oils"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <p className="absolute bottom-4 left-4 text-pink-700 text-lg font-bold bg-white bg-opacity-50 px-4 py-1 rounded-lg">
              Oils
            </p>
          </div>

          {/* Teas */}
          <div className="relative group h-[200px] overflow-hidden rounded-4xl shadow-md">
            <img
              src={teas}
              alt="Teas"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <p className="absolute bottom-4 left-4 text-pink-700 text-lg font-bold bg-white bg-opacity-50 px-4 py-1 rounded-lg">
              Teas
            </p>
          </div>
        </div>

        {/* Herbs */}
        <div className="relative group h-[200px] overflow-hidden rounded-4xl shadow-md">
          <img
            src={herbs}
            alt="Herbs"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <p className="absolute bottom-4 left-4 text-pink-700 text-lg font-bold bg-white bg-opacity-50 px-4 py-2 rounded-lg">
            Herbs
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImagesCard;