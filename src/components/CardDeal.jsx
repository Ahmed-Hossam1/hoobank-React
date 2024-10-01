import { card } from "../assets";
import Btn from "./Btn";

const CardDeal = () => {
  return (
    <section id="CardDeal" className="pt-20">
      <div className="container md:flex  items-center justify-between gap-10">
        <div className="content">
          <h1 className="font-bold text-white leading-[76px] text-3xl  md:text-5xl mb-5">
            Find a better card deal in few easy steps.
          </h1>
          <p className="text-white/70 text-lg leading-7 mb-5">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <Btn />
        </div>

        <div className="CardDeal-img">
          <img src={card} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default CardDeal;
