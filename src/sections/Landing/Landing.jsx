import React from "react";

import animationData from "./assets/mouse-scrolling.json";
import "./Landing.css";
import bg from "./assets/landing_bg.svg";

const Landing = () => {
  return (
    <div
      className="h-screen bg-gradient-to-b from-black to-[#200837] via-[#0D0221]"
      name="landing">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="font-pixeboy flex flex-col justify-center items-center z-10">
          <h3 className="text-white-off text-2xl sm:text-3xl md:text-4xl">
            AUG12 - AUG13
          </h3>
          <h1 className="text-[#f5d7e3] text-10xl sm:text-11xl md:text-[20vw] text-shadow">
            <span aria-hidden="true">CAD</span>
            CAD
            <span aria-hidden="true">CAD</span>
          </h1>
          <div className="text-white-off flex flex-row justify-around items-center w-full text-2xl sm:text-3xl md:text-4xl text-shadow-landingSubtitle ">
            <h3>CTRL</h3>
            <h3>ALT</h3>
            <h3>DELETE</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
