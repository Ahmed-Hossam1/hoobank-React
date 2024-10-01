import { apple, bill, google } from "../assets";

const Billing = () => {
  return (
    <section id="Billing" className="pt-20">
      <div className="container md:flex items-center justify-between gap-10">
        <div className="billing-img">
          <img src={bill} alt="img" />
        </div>
        <div className="content">
          <h1 className="font-bold text-white leading-[76px] text-3xl md:text-5xl mb-5">Easily control your billing & invoicing.</h1>
          <p className="text-white/70 text-lg leading-7 mb-5">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="links  flex gap-10 ">
              <img src={apple} alt="img"  className="h-[42px] cursor-pointer "/>
              <img src={google} alt="img" className="h-[42px] cursor-pointer" />
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billing;
