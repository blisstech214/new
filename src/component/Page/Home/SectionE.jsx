import React from "react";
import logo from "../../../assets/title-icon.png";
import e from "../../../assets/a.jpg";
import b from "../../../assets/b.jpg";
import c from "../../../assets/c.jpg";
import d from "../../../assets/d.jpg";

function SectionE() {
  const images = [
    { src: e, alt: "Image E" },
    { src: b, alt: "Image B" },
    { src: c, alt: "Image C" },
    { src: d, alt: "Image D" },
  ];

  const listItems = [
    "Nam convallis vel erat id dictum",
    "Nam convallis vel erat id dictum",
    "Nam convallis vel erat id dictum",
    "Nam convallis vel erat id dictum",
    "Nam convallis vel erat id dictum",
  ];

  return (
    <div className="px-4 md:px-14 lg:px-20 py-10">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="space-y-6">
          <img src={logo} alt="Logo" className="w-12 md:w-16 lg:w-20" />
          <h1 className="text-gray-500 text-base md:text-lg lg:text-xl">
            Discover The Features
          </h1>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            We Build a Strong Team <br /> of Great People
          </h1>

          <div className="space-y-4">
            <p className="text-sm md:text-base lg:text-lg text-gray-500">
              Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis.
              Nunc nec maximus dui, vel suscipit dolor. Donec elementum velit a
              orci facilisis rutrum. Nam convallis vel erat id dictum. Sed ut
              risus in orci convallis viverra.
            </p>

            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base lg:text-lg disc-blue">
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-40 sm:h-48 md:h-64 lg:h-72 object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionE;
