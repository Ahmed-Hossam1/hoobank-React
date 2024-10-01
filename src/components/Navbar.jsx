import { navLinks } from "../constants/Constant";
import { logo, menu, close } from "../assets";
import { useState } from "react";
const Navbar = () => {
  const [toogle, settoogle] = useState(false);
  return (
    <nav className="w-full fixed bg-primary z-[999]">
      <div className="container flex justify-between items-center py-6">
        <div className="logo">
          <a id="logo" href="/">
            <img src={logo} alt="logo" className=" h-[32px]" />
          </a>
        </div>
        <div className="links">
          <ul className=" hidden md:flex ">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className={`${
                  index === navLinks.length - 1 ? "mr-0" : "mr-10"
                } ${
                  index === 0 ? "text-white" : "text-white/70"
                } text-[16px] cursor-pointer transition hover:text-[#5ce1e6]`}
              >
                <a href={`#${link.title}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative  md:hidden ">
          <img
            src={toogle ? close : menu}
            onClick={() => settoogle(!toogle)}
            alt="menu"
            className={`cursor-pointer h-[15px] object-contain `}
          />

          <div
            className={`bg-black-gradient ${
              toogle ? "block" : "hidden"
            } slide-top w-[200px] absolute top-10 z-10 right-0 transition-all`}
          >
            <ul className=" p-2  ">
              {navLinks.map((link, index) => (
                <li
                  key={link.id}
                  className={` mb-5 w-full text-center
                  ${
                    index === 0 ? "text-white" : "text-white/70"
                  } text-[16px] cursor-pointer transition hover:text-[#5ce1e6]`}
                >
                  <a href={`#${link.title}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
