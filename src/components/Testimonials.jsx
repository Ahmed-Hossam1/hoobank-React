import FeedBackCard from "./FeedBackCard";

const Testimonials = () => {
  return (
    <section className="pt-20">
      <div className="container">
        <div className="md:flex items-center justify-between gap-10 mb-12">
          <div className="text-white font-bold text-3xl md:text-5xl w-fit md:w-[470px] leading-[80px] capitalize">
            What people are saying about us
          </div>
          <div className="text-white/70 text-lg leading-10 ">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </div>
        </div>

        <div className="feedback-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeedBackCard />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
