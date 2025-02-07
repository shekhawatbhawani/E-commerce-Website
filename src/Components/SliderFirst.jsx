import React from "react";
import { useNavigate } from "react-router-dom";

const SliderFirst = ({ img1 ,img2 , img3, img4, name, cost, location, distance ,desc }) => {
  console.log(desc);
  
  let navigate = useNavigate();

  let handelOrder = () => {
    navigate("/order", {
      state: {
        img,
        name,
        cost,
        location,
        distance,
      },
    });
  };

  let handleItem = () => {
    navigate("/ttt", {
      state: {
        img1,
        img2,
        img3,
        img4,
        name,
        cost,
        location,
        distance,
        desc,
      },
    });
  };

  let handelAddToCard = () => {};

  return (
    <div className="rounded-lg sm:w-full overflow-hidden shadow-lg bg-white p-4 max-w-[300px] m-auto transition-all duration-500 hover:scale-105">
      <div
        className="w-full h-48 overflow-hidden rounded-lg"
        onClick={handleItem}
      >
        <img src={img1} alt="Product Image" className=" object-cover w-full" />
      </div>
      <h1 className="text-xl font-bold mt-4">{name}</h1>
      <p className="text-gray-600 mt-2 font-bold">{cost}</p>
      <div className="flex justify-between">
        <p className="text-gray-500 text-lg mt-1">{location}</p>
        <p className="text-gray-500 text-lg mt-1">{distance}</p>
      </div>
      <div className="flex gap-2 mt-4 justify-between">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={handelOrder}
        >
          Order
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
          onClick={handelAddToCard}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SliderFirst;