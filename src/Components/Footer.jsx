import React from "react";
import {
  FaSquareWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8 text-start">
      <div className="container mx-auto px-1">
        <div className="flex flex-wrap  justify-between">
          {/* container 1 */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
            <div className="mb-4">
              <img
                src="https://imgs.search.brave.com/TbhAbF78_yHtfA1iiIo8vbbfweNVmYwjaSjRredzMak/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzVh/MmFhODA4OTBiYWRl/OTA1ZWMwM2I2My8x/NzE0NDMzMzkzNTky/LUFBVjZQUjRLUTA0/OVNDTlRBOEdGL0xZ/QkwrT3JpZ2luYWwr/bG9nbytQTkcucG5n"
                alt="Logo"
                className="w-32 h-auto"
              />
            </div>
            <p className="p-2">Ancient Wisdom, Modern Health.</p>
            <p className="p-2">📍 Address: 1234 Wellness Lane, Serene City, WA 98012</p>
            <p className="p-2">📞 Phone: (425) 555-1234</p>
            <p className="p-2">✉️ Email: contact@patanjaliayurvedus.com</p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4 text-2xl">
              <FaSquareWhatsapp />
              <FaInstagram />
              <FaFacebook />
              <FaTwitter />
            </div>
            <p className="mt-4">Our stores on other platforms</p>
          </div>

          {/* container 2 */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
            <h1 className="font-bold text-xl mb-4">SHOP</h1>
            <ul>
              <li>Best Selling</li>
              <li>Personal Care</li>
              <li>Food Products</li>
              <li>Home Care</li>
              <li>Medicines</li>
            </ul>
          </div>

          {/* container 3 */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
            <h1 className="font-bold text-xl mb-4">POLICIES</h1>
            <ul>
              <li>Return Policy</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* container 4 */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
            <h1 className="font-bold text-xl mb-4">CUSTOMER SUPPORT</h1>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Order Tracking</li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="text-center mt-8">
          <p>Copyright © 2023 Patanjali Ayurved US</p>
          <p>• Made with ♥️ in Seattle</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
