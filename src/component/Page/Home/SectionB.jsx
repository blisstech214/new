
// export default SectionB;
import React from "react";
import Slider from "react-slick";
import {
  GiLightBulb,
  GiPencil,
  GiWrench,
  GiGrowth,
  GiMagnifyingGlass,
  GiNetworkBars,
} from "react-icons/gi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LogoB from "../../../assets/title-icon.png";
// Sample data for the cards
const cardData = [
  {
    title: "Your Vision, Our Technology – Driving Success in the Digital Era",
    description:
      "We combine your unique vision with our advanced technology to propel your business forward. Together, we create solutions that lead to success in today's digital landscape.",
    icon: <GiLightBulb size={40} className="text-blue-500" />,
  },
  {
    title: "Where Creative Ideas Take Shape Through Technology",
    description:
      "We transform innovative ideas into tangible solutions using the latest technology. Our team collaborates closely with you to bring your concepts to life.",
    icon: <GiPencil size={40} className="text-red-500" />,
  },
  {
    title: "Crafting Digital Solutions to Empower Your Vision",
    description:
      "Our focus is on developing custom digital solutions tailored to your specific goals. We empower you to achieve your vision and stand out in your industry.",
    icon: <GiWrench size={40} className="text-pink-500" />,
  },
  {
    title: "Driving Business Growth Through Digital Excellence",
    description:
      "We leverage digital strategies to enhance your business performance and drive growth. Our expertise ensures your brand excels in a competitive market.",
    icon: <GiGrowth size={40} className="text-gray-500" />,
  },
  {
    title: "Your Vision, Our Digital Expertise",
    description:
      "Trust us to apply our digital expertise to realize your vision effectively. We partner with you to ensure your goals are met with precision and creativity.",
    icon: <GiMagnifyingGlass size={40} className="text-green-500" />,
  },
  {
    title: "The Hub of Creative Minds and Cutting-Edge Tech",
    description:
      "Our team is a blend of creative thinkers and tech innovators, dedicated to pushing boundaries. We provide a collaborative environment where ideas flourish and technology thrives.",
    icon: <GiNetworkBars size={40} className="text-yellow-500" />,
  },
];

// Custom next arrow for the slider
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-1 top-1/2 z-10 w-8 h-8 bg-blue-500 rounded-full cursor-pointer transform -translate-y-1/2 flex items-center justify-center md:w-10 md:h-10"
      onClick={onClick}
    >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
}

// Custom previous arrow for the slider
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-1 top-1/2 z-10 w-8 h-8 bg-blue-500 rounded-full cursor-pointer transform -translate-y-1/2 flex items-center justify-center md:w-10 md:h-10"
      onClick={onClick}
    >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
}

// Main SectionB component
function SectionB() {
  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // Large desktops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024, // Laptops/desktops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Small mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="py-10 px-4 md:px-10 lg:px-20"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Logo Section */}
      <img src={LogoB} className="mx-auto mb-4 animate-pulse" alt="Logo" />

      {/* Text Section */}
      <div className="space-y-2 text-center">
        <h1 className="text-gray-500 text-lg lg:text-xl" data-aos="fade-right" data-aos-duration="1000">
          Discover the feature
        </h1>
        <h1 className="text-black text-2xl lg:text-4xl font-bold" data-aos="fade-right" data-aos-duration="1000">
          Empowering Digital Journeys Together
        </h1>
      </div>

      {/* Slider Section */}
      <Slider {...settings} className="mt-8" data-aos="fade-up" data-aos-duration="1000">
        {cardData.map((card, index) => (
          <div key={index} className="px-2 md:px-4">
            <div className="max-h-[500px] flex flex-col justify-between h-full bg-gray-50 border border-gray-200 rounded-lg hover:shadow-xl cursor-pointer dark:bg-gray-800 dark:border-gray-700 p-6">
              <div className="flex flex-col items-center">
                <div className="mb-4">{card.icon}</div> {/* Display the icon */}
                <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900 dark:text-white text-center">
                  {card.title}
                </h5>
              </div>
              <p className="text-gray-700 dark:text-gray-400 text-justify text-sm md:text-base p-5">
                {card.description}
              </p>
              <div className="text-center mt-auto">
                <button className="p-3 md:p-5 text-base font-semibold rounded-full px-12 md:px-16 border-4 border-blue-200 text-center text-white hover:bg-gradient-to-r hover:from-sky-500 hover:to-purple-500 bg-gradient-to-r from-sky-400 to-purple-400">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SectionB;
