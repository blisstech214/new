
import React from "react";
import bg from "../../../assets/popup-photo.jpg";
import LogoB from "../../../assets/title-icon.png";
import buttonImg from "../../../assets/video-icon.png";

const CeoName = "Hello";
const Company = "We don’t hide, we stand tall in front of challenges";
const Description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quia,
veritatis, voluptatem sit veniam id unde saepe corporis culpa ea
deserunt? Dicta modi veritatis hic natus aperiam doloremque architecto
mollitia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quia,
veritatis, voluptatem sit veniam id unde saepe corporis culpa ea
deserunt? Dicta modi veritatis hic natus aperiam doloremque architecto
mollitia!`;

function SectionOne() {
  return (
    <div className="px-4 md:px-12 lg:px-28">
      <div className="text-left mb-8 px-6 space-y-8 md:space-y-14 ">
        <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4">About Us</h1>
        <h2 className="text-lg md:text-xl font-semibold text-gray-600">
          Get To Know Us
        </h2>
        <hr className="w-24 md:w-52 border-t-2 border-gray-300" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="flex items-center p-4 md:p-8">
          <div className="text-black space-y-4">
            <img src={LogoB} className="animate-pulse w-12 mb-4" alt="Logo" />
            <h1 className="text-lg md:text-xl text-gray-500">{CeoName}</h1>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold py-4">
              {Company}
            </h1>
            <p className="text-sm md:text-base text-gray-500">{Description}</p>

            <button className="flex items-center space-x-2 text-blue-500 hover:text-blue-700">
              <img src={buttonImg} alt="Video Icon" className="w-12 h-12 md:w-16 md:h-16" />
              <span className="text-sm md:text-lg">Click Here</span>
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src={bg}
            alt="Background"
            className="w-full h-64 md:h-[500px] object-cover shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
