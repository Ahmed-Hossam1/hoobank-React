import React from "react";
import { stats } from "../constants/Constant";
const Stats = () => {
  return (
    <section id="stats">
      <div className="container">
        <div className="StatsContainer  flex flex-wrap justify-center md:justify-between gap-5  p-2 relative">
          {stats.map((state,index) => (
            <div
              id={state.id}
              className={`state flex text-center items-center gap-3  p-2 ${index === stats.length - 1 ? "" : "after:content-['] after:w-1  after:h-4 after:bg-white/70 top-0 right-0 " } `}
            >
              <p className="font-bold   text-white text-[41px] leading-[53px]">
                {state.value}
              </p>
              <span className="text-xl capitalize leading-[26px] text-gradient">
                {state.title}
              </span>
            </div>
          ))}
         
        </div>
      </div>
    </section>
  );
};

export default Stats;
