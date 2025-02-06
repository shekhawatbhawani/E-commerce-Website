import React, { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState([false, false, false]);

  const handleToggle = (index) => {
    const updatedState = [...isOpen];
    updatedState[index] = !updatedState[index];
    setIsOpen(updatedState);
  };

  return (
    <div className="container  w-full max-w-md text-center mt-5">
      <div className="box bg-gray-200 shadow-md p-4 mb-4">
        <div className="flex justify-between items-center">
          <p className="font-semibold">Do You Accept All Major Credit Cards</p>
          <button
            className="text-lg font-bold text-gray-700"
            onClick={() => handleToggle(0)}
          >
            {isOpen[0] ? "-" : "+"}
          </button>
        </div>
        {isOpen[0] && (
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quis recusandae explicabo repellendus et eos error maiores quo, sed
            modi?
          </p>
        )}
      </div>

      <div className="box bg-gray-200 shadow-md p-4 mb-4">
        <div className="flex justify-between items-center">
          <p className="font-semibold">Do You Sport Local Farmer</p>
          <button
            className="text-lg font-bold text-gray-700"
            onClick={() => handleToggle(1)}
          >
            {isOpen[1] ? "-" : "+"}
          </button>
        </div>
        {isOpen[1] && (
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quis recusandae explicabo repellendus et eos error maiores quo, sed
            modi?
          </p>
        )}
      </div>

      <div className="box bg-gray-200 shadow-md p-4">
        <div className="flex justify-between items-center">
          <p className="font-semibold">Do You Sport Local Farmer</p>
          <button
            className="text-lg font-bold text-gray-700"
            onClick={() => handleToggle(2)}
          >
            {isOpen[2] ? "-" : "+"}
          </button>
        </div>
        {isOpen[2] && (
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quis recusandae explicabo repellendus et eos error maiores quo, sed
            modi?
          </p>
        )}
      </div>
    </div>
  );
};

export default Accordion;
