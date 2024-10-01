import React from "react";
import { features } from "../constants/Constant";

const FeaturesCard = () => {
  return (
    <>
      {features.map((feature, index) => (
        <div
          id={feature.id}
          className={`BusinessCard  mb-10 p-4 rounded-2xl flex justify-center items-center gap-5 ${
            index === 1 ? "bg-black-gradient" : ""
          }`}
        >
          <div className="icon w-[64px] h-[64px] bg-[#09977C1A] rounded-full grid place-items-center">
            <img src={feature.icon} alt="icon" />
          </div>

          <div className="content flex-1">
            <h2 className="text-white font-bold mb-5 leading-6 text-lg">
              {feature.title}
            </h2>
            <p className=" text-white/70  leading-6 text-lg">
              {feature.content}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturesCard;
