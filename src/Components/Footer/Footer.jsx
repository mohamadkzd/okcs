import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";

import { AiOutlineTwitter } from "react-icons/ai";

import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#f8f9fa] w-full px-[20px] mt-[50px] ">
      <div className="flex sm:justify-center justify-around items-start lg:gap-x-[100px] gap-x-[10px]  gap-y-[50px] flex-wrap py-[30px]">
        <div className="flex flex-col justify-center items-start gap-y-[5px]">
          <h1 className="text-[#444] text-[16px] pb-[10px] font-bold">
            دسترسی سریع
          </h1>
          <Link className="text-[#444]">تماس با ما</Link>
          <Link className="text-[#444]">نصب اپلیکیشن</Link>
          <Link className="text-[#444]">پرسش و پاسخ متداول</Link>
          <Link className="text-[#444]">فروش کوروش کارت</Link>
          <Link className="text-[#444]">فروش انبوه (کالا)</Link>
          <Link className="text-[#444]">مجله کوروش</Link>
        </div>
        <div className="flex flex-col justify-start items-start gap-y-[5px]">
          <h1 className="text-[#444] text-[16px] pb-[10px] font-bold">
            درباره افق کوروش
          </h1>
          <Link className="text-[#444]">درباره ما</Link>
          <Link className="text-[#444]">فروشگاه ها</Link>
          <Link className="text-[#444]">اخبار</Link>
          <Link className="text-[#444]">امور سهام</Link>
          <Link className="text-[#444]">کمیته‌های تخصصی</Link>
          <Link className="text-[#444]">اعضاء هیئت مدیره</Link>
        </div>
        <div className="flex flex-col justify-center items-start gap-y-[5px]">
          <h1 className="text-[#444] text-[16px] pb-[10px] font-bold">
            همکاری با ما
          </h1>
          <Link className="text-[#444]">کارمند فروشگاه</Link>
          <Link className="text-[#444]">فرصت های شغلی</Link>
          <Link className="text-[#444]">دریافت نمایندگی (فرانچایز)</Link>
        </div>
        <div className="flex flex-col justify-center items-start gap-y-[5px]">
          <h1 className="text-[#444] text-[16px] pb-[10px] font-bold">
            همکاران و تامین کنندگان
          </h1>
          <Link className="text-[#444]">تماس با ما</Link>
          <Link className="text-[#444]">آموزش همکاران</Link>
          <Link className="text-[#444]">پرسش و پاسخ متداول</Link>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-7 py-[10px]">
        <div className="bg-[#e8e8e9] rounded-[50%] p-2 transition-all ease-in duration-300 hover:bg-[gray] ">
          <AiOutlineInstagram fill="red" fontSize="30px" />
        </div>
        <div className="bg-[#e8e8e9] rounded-[50%] p-2 transition-all ease-in duration-300 hover:bg-[gray]">
          <AiOutlineTwitter fill="red" fontSize="30px" />
        </div>
        <div className="bg-[#e8e8e9] rounded-[50%] p-2 transition-all ease-in duration-300 hover:bg-[gray]">
          <AiOutlineLinkedin fill="red" fontSize="30px" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
