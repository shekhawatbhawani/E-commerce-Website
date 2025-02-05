import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useState } from 'react';
import NavLogo from "../assets/Images/NavLogo.webp"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className='bg-gray-800 text-white flex justify-between p-3'>
        <div className='flex gap-3 items-center'>
          <img
            src={NavLogo}
            alt=""
            className='h-14 w-14 rounded-full'
          />
          <h1 className='text-2xl p-2'>Ayurveda</h1>
        </div>
        <button
          onClick={toggleMenu}
          type="button"
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className='hidden md:block'>
          <ul className='flex gap-7 text-xl text-center items-center p-3'>
            <li className='hover:underline hover:text-red-200'>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className='hover:underline hover:text-red-200'>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className='hover:underline hover:text-red-200'>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className='hover:underline hover:text-red-200'>
              <NavLink to="/login">Login/Signup</NavLink>
            </li>
            <li className='hover:underline hover:text-red-200'>
              <NavLink to="/cart" className="flex gap-2">
                Cart <FaShoppingCart className='pt-2 h-full text-lg' />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-pink-600 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-50`}
      >
        <ul className='flex flex-col gap-7 text-xl'>
          <li className='hover:underline hover:text-red-200 hover:bg-gray-600 p-5 hover:rounded-xl'>
            <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
          </li>
          <li className='hover:underline hover:text-red-200 hover:bg-gray-600 p-5 hover:rounded-xl'>
            <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
          </li>
          <li className='hover:underline hover:text-red-200 hover:bg-gray-600 p-5 hover:rounded-xl'>
            <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
          </li>
          <li className='hover:underline hover:text-red-200 hover:bg-gray-600 p-5 hover:rounded-xl'>
            <NavLink to="/login" onClick={toggleMenu}>Login/Signup</NavLink>
          </li>
          <li className='hover:underline hover:text-red-200 hover:bg-gray-600 p-5 hover:rounded-xl'>
            <NavLink to="/cart" className="flex gap-2 " onClick={toggleMenu}>
              Cart <FaShoppingCart className='pt-2 h-full text-lg' />
            </NavLink>
          </li>
        </ul>
           {/* Cancel Button */}
           <button
          onClick={toggleMenu}
          className="absolute top-3 right-3 text-white hover:text-red-200"
          aria-label="Close menu"
        >
          <MdCancel className="w-6 h-6" />
        </button>
      </div>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;