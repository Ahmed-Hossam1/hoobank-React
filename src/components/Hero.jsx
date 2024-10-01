import React from "react";
import { arrowUp, discount, robot } from "../assets";
const Hero = () => {
  return (
    <section id="Home" className="pt-32 ">
      <div className="container  md:flex items-center justify-between gap-20  flex-wrap">
        <div className="TextContaine flex-1  mb-10 md:mb-0">
          <div className="w-fit rounded-3xl md:w-[400px] mb-5 bg-gradient-to-r from-[#272727] to-[#11101D] text-white/70 flex items-center p-1">
            <img src={discount} alt="Discount" className="w-[32px] h-[32px]" />
            <div className="uppercase text-sm md:text-[18px] ml-2">
              <span className="text-white">20%</span> discount for 1{" "}
              <span className="text-white">month</span> account
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <h1 className="font-bold text-[40px] md:text-[72px] text-white capitalize leading-[60px] md:leading-[100px] tracking-wide">
                the next <br />
                <span className="text-gradient">generation</span>
              </h1>

              <div className="hidden lg:block w-[120px] h-[120px] bg-cyan-600 p-1 rounded-full cursor-pointer mt-5 md:mt-0">
                <div className="h-full w-full bg-primary rounded-full grid place-items-center">
                  <p className="flex items-center">
                    <span className="text-gradient text-xl">Get</span>
                    <img
                      src={arrowUp}
                      alt="Arrow Up"
                      className="w-[32px] h-[32px] ml-1"
                    />
                  </p>
                  <p className="text-gradient capitalize text-xl">started</p>
                </div>
              </div>
            </div>
            <p className="font-bold text-[40px] md:text-[72px] text-white capitalize leading-[60px] md:leading-[100px] tracking-wide">
              payment method
            </p>
          </div>
        </div>

        <div className="img relative flex-1 mt-10 md:mt-0">
          <img
            src={robot}
            alt="Robot"
            className=" h-[400px] md:h-[674px] object-contain relative z-5"
          />
          <div className="pink__gradient w-[300px] md:w-[405px] h-[300px] md:h-[471px] absolute top-24 right-[10%] md:right-[20%] z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
