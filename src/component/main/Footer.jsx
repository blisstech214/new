import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/newLogoa.png";

const Footer = () => {
  return (
    <div>
      <footer
        className="w-full bg-blue-900 text-white"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 py-10 md:px-16 lg:py-20">
          {/* Logo and Email Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="mb-6 md:mb-0">
              <img src={logo} alt="Logo" className="w-32 md:w-44 lg:w-52" />
            </div>

            {/* Email Input and Submit Button */}
            <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
              <input
                type="email"
                placeholder="Message"
                className="w-full md:w-auto px-4 py-2 rounded-md bg-white text-gray-700 focus:outline-none mb-4 md:mb-0"
              />
              <button className="w-full md:w-auto ml-0 md:ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white">
                Submit
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="text-center mb-6">
            <ul className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 text-base lg:text-lg">
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 md:space-x-6 mb-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="bg-blue-900">
        <p className="text-center text-white text-sm p-3">
          &copy; {new Date().getFullYear()} BlissTech. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
