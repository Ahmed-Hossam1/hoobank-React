import React from "react";
import Btn from "./Btn";

const Cta = () => {
  return (
    <div className="Cta pt-20">
      <div className="container  py-5 rounded-xl md:flex justify-between items-center gap-5 bg-black-gradient-2">
        <div className="text ">
          <h1 className="text-white font-bold text-3xl  md:text-5xl  mb-5  leading-[67px] capitalize">
            Let's try our service now!
          </h1>
          <p className="text-white/70  text-lg leading-8 mb-10 md:mb-0 w-fit md:w-[445px] ">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <Btn />
      </div>
    </div>
  );
};

export default Cta;
