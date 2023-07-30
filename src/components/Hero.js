import React from "react";
import womenImage from "../img/woman_hero.png";

const Hero = () => {
  return (
    <div className="h-[800px] flex items-center justify-around bg-pink-100 py-16">
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-2">
          <div className="w-10 h-1 bg-red-500"></div> <p>NEW TREND</p>
        </div>
        <h1 className="text-4xl sm:text-5xl">AUTOMN</h1>
        <h1 className="text-4xl sm:text-5xl">SALE STYLISH</h1>

        <h1 className="text-5xl font-semibold sm:text-6xl">WOMENS</h1>
        <h1 className="font-semibold border-b-2 border-black text-md">
          DISCOVER MORE
        </h1>
      </div>
      <div className="hidden lg:block">
        <img alt="" src={womenImage} />
      </div>
    </div>
  );
};

export default Hero;
