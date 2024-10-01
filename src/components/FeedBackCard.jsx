import { feedback } from "../constants/Constant";
import coute from "../assets/coute.svg"
const FeedBackCard = () => {
  const newfeedback = feedback.map((el,index) => {
    return (
      <div className={`FeedBackCard  ${index === 0? "bg-black-gradient-2" : ""}  rounded-xl p-5 capitalize`} id={el.id}>  
        <div className="text-gradient my-7">
            <img src={coute} alt="" />
        </div>
        <p className="text-white text-lg leading-8 tracking-wider mb-7">{el.content}</p>
        <div className="profile flex gap-5">
          <div className="profile-img mb-5">
            <img src={el.img} alt="img" className="h-[58px]" />
          </div>
          <div className="prodile-descreption">
            <h2 className="text-white capitalize text-xl mb-2 ">{el.name}</h2>
            <p className="text-white/50 leading-5 text-lg">{el.title} </p>
          </div>
        </div>
      </div>
    );
  });
  return <>{newfeedback}</>;
};

export default FeedBackCard;
