import React from "react";
import bg from "../../../assets/3d-shap.png";
import LogoB from "../../../assets/title-icon.png";

const Ceo = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quia,
veritatis, voluptatem sit veniam id unde saepe corporis culpa ea
deserunt? Dicta modi veritatis hic natus aperiam doloremque architecto
mollitia!`;

const CeoName = "CEO Of BlissTech";

const Company = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quia,
veritatis, `;

const Description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quia,
veritatis, voluptatem sit veniam id unde saepe corporis culpa ea
deserunt? Dicta modi veritatis hic`;

function SectionC() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10 lg:p-20"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      {/* Left Image Section */}
      <div className="relative flex justify-center md:justify-start">
        <img
          src={bg}
          alt="Background"
          className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
        />
        <div className="absolute text-blue p-4 md:p-6 lg:p-8 rounded text-left top-20 md:top-32 left-4 md:left-6 lg:left-10">
          <p className="text-sm md:text-base lg:text-lg">{Ceo}</p>
          <h1 className="text-gray-700 font-semibold py-2 md:py-4">{CeoName}</h1>
        </div>
      </div>

      {/* Right Text Section */}
      <div className="flex flex-col justify-center p-4 md:p-6 lg:p-10">
        <div className="space-y-4">
          <img
            src={LogoB}
            className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 animate-pulse"
            alt="Logo"
          />
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-500">
            {Company}
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-justify text-gray-800">
            {Description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionC;
