import Btn from "./Btn";
import FeaturesCard from "./FeatureCard";
const Features = () => {
  return (
    <section id="Features" className="pt-24">
      <div className="container md:flex justify-between gap-20 ">
        <div className="left-side  flex-1">
          <h1 className="  font-bold text-3xl md:text-5xl leading-[76px] mb-5 text-white capitalize  ">
            You do the business, <br /> we'll handle the money.
          </h1>
          <p className="text-lg leading-7 mb-10 text-white/50">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <Btn />
        </div>
        <div className="BusinessCards flex-1 ">
          <FeaturesCard />
        </div>
      </div>
    </section>
  );
};

export default Features;
