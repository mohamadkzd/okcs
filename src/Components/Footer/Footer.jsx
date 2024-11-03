import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";

import { AiOutlineTwitter } from "react-icons/ai";

import { AiOutlineLinkedin } from "react-icons/ai";

import db from "../../db/db.json";

const Footer = () => {
  const [footer, setFooter] = useState(null);
  useEffect(() => {
    setFooter(db.footerLink);
  }, []);
  console.log(footer);

  return (
    <div className="bg-[#f8f9fa] w-full px-[20px] mt-[50px] ">
      <div className="flex sm:justify-center justify-around items-start lg:gap-x-[100px] gap-x-[10px]  gap-y-[50px] flex-wrap py-[30px]">
        {footer?.map((elem) => {
          return (
            <div className="flex flex-col justify-center items-start gap-y-[5px]">
              <h1 className="text-[#444] text-[16px] pb-[10px] font-bold">
                {elem.title}
              </h1>
              {elem.subMenu?.map((item) => {
                return (
                  <>
                    <Link className="text-[#444]">{item.name}</Link>
                  </>
                );
              })}
            </div>
          );
        })}
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
