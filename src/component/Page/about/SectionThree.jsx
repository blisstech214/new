import React, { useEffect, useState } from "react";
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

const listData = [
  { label: "Web Development", percentage: 30 },
  { label: "Ecommerce Development", percentage: 60 },
  { label: "Mobile App Development", percentage: 90 },
  { label: "Digital Marketing Services", percentage: 70 },
  { label: "Graphics Design & UI/UX", percentage: 50 },
  // { label: "Hire Dedicated Developer", percentage: 100 },
];

function SectionThree() {
  const [animatedPercentages, setAnimatedPercentages] = useState(
    listData.map(() => 0)
  );

  useEffect(() => {
    const animatePercentages = () => {
      const newPercentages = listData.map((item) => item.percentage);
      newPercentages.forEach((target, index) => {
        let count = 0;
        const interval = setInterval(() => {
          if (count >= target) {
            clearInterval(interval);
          } else {
            count += 1;
            setAnimatedPercentages((prev) => {
              const newArr = [...prev];
              newArr[index] = count;
              return newArr;
            });
          }
        }, 30);
      });
    };

    animatePercentages();
  }, []);

  return (
    <div className="p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:px-32">
        <div className="flex items-center p-4 md:p-8">
          <div className="text-black space-y-4">
            <img src={LogoB} className="animate-pulse w-12 mb-4" alt="Logo" />
            <h1 className="text-lg md:text-xl text-gray-500">{CeoName}</h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold py-2 md:py-4">
              {Company}
            </h1>
            <p className="text-sm md:text-base text-gray-500">{Description}</p>
          </div>
        </div>

        <div className="relative mt-8 md:mt-10">
          <ul className="relative z-10 space-y-4 p-4 bg-white bg-opacity-70 rounded-lg">
            {listData.map((item, index) => (
              <li key={index} className="flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm md:text-base text-gray-700">
                    {item.label}
                  </span>
                  <span className="text-sm md:text-base text-blue-500">
                    {animatedPercentages[index]}%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-300 rounded-full">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-300"
                    style={{
                      width: `${animatedPercentages[index]}%`,
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
