import React from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
function About() {
  return (
    <div className="contact">
      <div className="pt-64">
        <SectionOne />
      </div>
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default About;
