import React from "react";
import magazine1 from "../../assets/magazine.jpg"
const Magazaine = () => {
  return (
    <div className="w-full mt-[50px] flex flex-col justify-center items-center gap-y-[50px] lg:px-[20px]">
      <div className="text-[26px] text-[red] font-bold">
        <h1>مجله افق کوروش</h1>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-x-7 gap-y-7">
        <div className="flex flex-col justify-center items-center gap-y-5">
          <img className="w-[350px] rounded-[50%]" src={magazine1} alt="" />
          <p className="w-[60%] text-center">۴ روش خشک کردن زرشک تازه بدون تیره شدن به روش بازاری   </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5">
          <img className="w-[350px] rounded-[50%]" src={magazine1} alt="" />
          <p className="w-[60%] text-center">۴ روش خشک کردن زرشک تازه بدون تیره شدن به روش بازاری   </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5">
          <img className="w-[350px] rounded-[50%]" src={magazine1} alt="" />
          <p className="w-[60%] text-center">۴ روش خشک کردن زرشک تازه بدون تیره شدن به روش بازاری   </p>
        </div>
      </div>
    </div>
  );
};

export default Magazaine;
