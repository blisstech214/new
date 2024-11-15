import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Map from "../../../assets/world-map.png";

function SectionD() {
  return (
    <div
      className="flex items-center justify-center p-4 md:p-6 lg:p-8"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl">
        {/* World map image */}
        <img
          src={Map}
          alt="World Map"
          className="w-full object-cover h-auto" // Adjust to maintain aspect ratio
        />

        {/* Info box */}
        <div className="absolute top-44 inset-x-0 mx-auto w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 bg-white border-x-4 border-colorA p-4 sm:p-6 md:p-8 shadow-xl space-y-4 transform -translate-y-1/2">
          <h1 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="mr-2 animate-pulse text-blue-600"
            />
            Bliss Technology
          </h1>

          {/* Address and Contact Info */}
          <ul className="list-none flex flex-col sm:flex-row justify-between text-center md:text-left gap-2 sm:gap-4">
            <li className="flex-1 text-xs sm:text-sm md:text-base">
              Vandematram Road, Ahmedabad, Gujarat, India 382461
            </li>
            <li className="flex-1 text-xs sm:text-sm md:text-base">
              +91-7014258775
            </li>
          </ul>

          <ul className="list-none flex flex-col sm:flex-row justify-between text-center md:text-left gap-2 sm:gap-4 mt-2">
            <li className="flex-1 text-xs sm:text-sm md:text-base">
              Ahmedabad, Gujarat
            </li>
            <li className="flex-1 text-xs sm:text-sm md:text-base">
              blisstech214@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SectionD;
