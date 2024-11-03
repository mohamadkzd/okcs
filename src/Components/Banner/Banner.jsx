import React from "react";
import baner1 from "../../assets/baner-1-1.png";
import baner2 from "../../assets/baner-1-2.png";
const Banner = () => {
  return (
    <div className="w-full h-[150px] relative bg-[#ffa100] mt-[50px]">
      <div className="w-full h-full absolute top-0 flex justify-center items-center sm:gap-x-11 gap-x-[10px]">
        <div>
          <img src={baner1} alt="" />
        </div>
        <div className="lg:text-[36px] text-[27px]  text-white">
          <h1>تخفیف های امروز</h1>
        </div>
        <div>
          <img src={baner2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
