
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import pad from "../../../assets/slider-m-1.png";

function SectionA() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row items-center md:items-start px-6 md:px-16 lg:px-24 pt-20 md:pt-36 lg:pt-52"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="p-5 overflow-hidden text-center  pt-20 md:text-left">
        <section className="space-y-8">
          <h2
            className="text-sm md:text-xl lg:text-2xl font-medium text-colorA"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
          </h2>
          <h1
            className="text-xl md:text-4xl lg:text-5xl font-medium text-black"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Bringing Limitless Ideas to <br className="hidden md:block" /> 
            Successful Solutions...
          </h1>
          <button
            className="px-10 py-3 md:px-16 md:py-5 text-sm md:text-base font-semibold rounded-full border-4 border-blue-200 text-white bg-gradient-to-r from-sky-400 to-purple-400 hover:bg-gradient-to-r hover:from-sky-500 hover:to-purple-500"
          >
            Discover
          </button>
        </section>
      </div>
      <div className="mt-10 md:mt-0 md:ml-10 lg:ml-20">
        <img
          src={pad}
          className="w-full md:w-auto h-auto md:h-96 lg:h-auto object-contain"
          alt="Pad"
        />
      </div>
    </div>
  );
}

export default SectionA;
