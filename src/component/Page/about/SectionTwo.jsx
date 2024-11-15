import React from "react";
import middleBg from "../../../assets/abc.png";
import profilePhoto from "../../../assets/c.jpg"; 

function SectionTwo() {
  const cardData = [
    {
      title: "Your Vision, Our Technology",
      description:
        "We combine your unique vision with our advanced technology to propel your business forward. Together, we create solutions that lead to success in today's digital landscape.",
      name: "John Doe",
      isMiddleCard: false,
    },
    {
      title: "Where Creative Ideas",
      description:
        "We transform innovative ideas into tangible solutions using the latest technology. Our team collaborates closely with you to bring your concepts to life.",
      name: "Jane Smith",
      isMiddleCard: true,
    },
    {
      title: "Crafting Digital Solutions",
      description:
        "Our focus is on developing custom digital solutions tailored to your specific goals. We empower you to achieve your vision and stand out in your industry.",
      name: "Alice Johnson",
      isMiddleCard: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-8 lg:px-20">
      {cardData.map((card, index) => (
        <div key={index} className="px-2 md:px-4">
          <div
            className={`h-80 py-10 rounded-lg cursor-pointer flex flex-col justify-between items-center p-4 md:p-6`}
            style={{
              backgroundImage: card.isMiddleCard ? `url(${middleBg})` : "none",
              backgroundSize: card.isMiddleCard ? "contain" : "auto",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: card.isMiddleCard ? "100%" : "auto",
              minHeight: "300px", 
            }}
          >
            <div className="text-center">
              <h5 className="mb-2 text-lg md:text-xl text-center font-bold text-gray-900">
                {card.title}
              </h5>
              <p className="text-gray-700 text-sm md:text-base px-10 text-justify mb-4">
                {card.description}
              </p>
            </div>

            {/* <div className="flex items-center mt-4">
              <img
                src={profilePhoto}
                alt={card.name}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2"
              />
              <span className="text-gray-900 text-sm md:text-base">{card.name}</span>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SectionTwo;
