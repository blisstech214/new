import React from "react";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import SectionC from "./SectionC";
import SectionD from "./SectionD";
import SectionE from "./SectionE";
import Contact from "../contact/Contact";

function HomeMain() {
  return (
    <div className="home">
      <div>
        <SectionA />
      </div>
      <div className="mt-20">
        <SectionB />
      </div>
      <div className="mt-20">
        <SectionC />
      </div>
      <div className="mt-10">
        <SectionE />
      </div>
      <div className="mt-10">
        <Contact />
      </div>
      <div className="mt-10">
        <SectionD />
      </div>
      
    </div>
  );
}

export default HomeMain;
