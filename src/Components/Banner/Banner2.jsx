import React from "react";
import baner21 from "../../assets/baner-2-1.jpg";
const Banner2 = () => {
  return (
    <div className="bg-[#2c065a] mt-[50px] w-full">
      <div className="lg:flex-row flex flex-col justify-center items-center w-full pt-5">
        <div className="lg:w-[50%] mx-auto w-[70%] flex flex-col justify-center items-center gap-y-5">
          <h1 className="text-[30px] text-[red] text-center">باشگاه مشتریان افق کوروش</h1>
          <h2 className="text-[30px] text-white">یک عضویت...هزاران مزیت</h2>
          <p className="text-white text-center">
            با عضویت در باشگاه مشتریان افق کوروش، علاوه بر دریافت بیشتر طرح ها و
            جشنواره ها، از تخفیف های مراکز خدماتی، رفاهی و تفریحی در سراسر کشور
            نیز بهره مند شوید.
          </p>
          <button className="px-8 py-3 text-white bg-[red] rounded-[10px]">
            اطلاعات بیشتر و ورود
          </button>
        </div>
        <div className="lg:w-[50%] mx-auto flex flex-col justify-center items-center gap-y-5">
          <img src={baner21} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner2;
