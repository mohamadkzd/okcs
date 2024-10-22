import React from "react";
import baner1 from "../../assets/baner-1-1.png";
import baner2 from "../../assets/baner-1-2.png";
const Banner = () => {
  return (
    <div className="w-full h-[90px] relative bg-[#ffa100] mt-[50px]">
      <div className="w-full absolute top-0 flex justify-center items-center gap-x-11">
        <div>
          <img src={baner1} alt="" />
        </div>
        <div className="text-[36px] text-white">
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
