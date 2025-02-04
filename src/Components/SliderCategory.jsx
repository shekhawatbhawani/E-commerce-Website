import React from 'react';

const SliderCategory = ({ img, title }) => {
  return (
    <div className='w-[120px] p-2'> {/* Increased width for better display */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={img}
          alt=""
          className="h-auto w-full hover:scale-90 transition-transform duration-300"
        />
      </div>
      <p className="text-base text-gray-600 hover:text-gray-800 cursor-pointer pt-2 hover:underline overflow-hidden whitespace-nowrap">
        {title}
      </p>
    </div>
  );
};

export default SliderCategory;
