import React from "react";
import { logo } from "../assets";
import { footerLinks } from "../constants/Constant";

const Footer = () => {
  return (
    <footer className=" bg-black-gray p-10 pt-20">
      <div className="container footer">

      <aside>
        <img src={logo} alt="img" className="mb-5" />
        <p className="text-white/70 leading-7">
          A new way to make the payments <br /> easy reliable and secure.
        </p>
      </aside>

      {footerLinks.map((Links) => (
        <div>
          <h6 className=" mb-3 tracking-wide font-bold text-white capitalize">{Links.title}</h6>
          {Links.links.map((link) => (
            <>
              <a className="link link-hover text-white/70" href={link.link}>
                {link.name}
              </a>
            </>
          ))}
        </div>
      ))}
      </div>
    </footer>
  );
};

export default Footer;
