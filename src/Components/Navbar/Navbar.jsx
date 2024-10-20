import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import { Link } from "react-router-dom";


import svg1 from "../../assets/svg-1.png"
import svg2 from "../../assets/svg-2.png"
import svg3 from "../../assets/svg-3.png"
import svg4 from "../../assets/svg-4.png"
import svg5 from "../../assets/svg-5.png"
import svg6 from "../../assets/svg-6.png"
const Navbar = () => {
  const [menuHam, setMenuHam] = useState(true);

  const handelClick = () => {
    setMenuHam(!menuHam);
  };
  return (
    <div className="lg:flex justify-start items-center block sticky top-0 z-[1020] bg-[whitesmoke]">
      {/* size mbile */}
      <div className=" flex  lg:w-[23%] w-full lg:leading-[100px] h-[100px] lg:pr-[70px] lg:pl-0 px-[70px] justify-between items-center  ">
        <div>
          <img className="w-[200px]" src={Logo} alt="" />
        </div>
        <div className="lg:hidden">
          {menuHam ? (
            <AiOutlineMenu
              onClick={() => handelClick()}
              className="text-3xl cursor-pointer text-[red]"
            />
          ) : (
            <AiOutlineClose
              onClick={() => handelClick()}
              className="text-3xl cursor-pointer text-[red]"
            />
          )}
        </div>
      </div>

      <nav className={`lg:transition-none lg:w-[50%] w-auto transition-all ease-in-out duration-500  ${!menuHam?"opacity-1 max-h-[400px]":" lg:opacity-[1] lg:max-h-[300px] opacity-0 max-h-0"}`}>
        <ul className="lg:px-0 px-[70px] lg:flex gap-x-2 block text-[12px]">
          <li className="lg:leading-normal flex lg:flex-col lg:justify-center items-center gap-x-2 gap-y-2 leading-[60px] transition-all ease-linear lg:border-l-[1px] lg:pl-3 hover:text-[red]">
            <img style={{filter:"saturate(0)"}} className="w-[20px] filter-[saturate(0)] " src={svg1} alt="" />
            <Link>محصولات</Link>
          </li>
          <li  className="lg:leading-normal flex lg:flex-col lg:justify-center items-center gap-x-2 gap-y-2 leading-[60px] transition-all ease-linear lg:border-l-[1px] lg:pl-3 hover:text-[red]">
            <img style={{filter:"saturate(0)"}} className="w-[20px]" src={svg1} alt="" />
            <Link>فروشگاه اینترنتی </Link>
          </li>
          <li  className="lg:leading-normal flex lg:flex-col lg:justify-center items-center gap-x-2 gap-y-2 leading-[60px] transition-all ease-linear lg:border-l-[1px] lg:pl-3 hover:text-[red]">
            <img style={{filter:"saturate(0)"}} className="w-[20px]" src={svg1} alt="" />
            <Link>باشگاه مشتریان </Link>
          </li>
          <li  className="lg:leading-normal flex lg:flex-col lg:justify-center items-center gap-x-2 gap-y-2 leading-[60px] transition-all ease-linear lg:border-l-[1px] lg:pl-3 hover:text-[red]">
            <img style={{filter:"saturate(0)"}} className="w-[20px]" src={svg1} alt="" />
            <Link>دریافت نمایندگی</Link>
          </li>
          <li  className="lg:leading-normal flex lg:flex-col lg:justify-center items-center gap-x-2 gap-y-2 leading-[60px] transition-all ease-linear lg:border-l-[1px] lg:pl-3 hover:text-[red]">
            <img style={{filter:"saturate(0)"}} className="w-[20px]" src={svg1} alt="" />
            <Link> جشنواره ها</Link>
          </li>
          <li  className="lg:leading-normal flex lg:flex-col lg:justify-center items-center gap-x-2 gap-y-2 leading-[60px] transition-all ease-linear lg:border-l-[1px] lg:pl-3 hover:text-[red]">
            <img style={{filter:"saturate(0)"}} className="w-[20px]" src={svg1} alt="" />
            <Link>درباره ما</Link>
          </li>
        </ul>
      </nav>

      <div className=" lg:flex items-center justify-center w-[12%] hidden mr-[70px] text-[14px] py-[13px] border-[1px] rounded-[20px] border-gray-200 ">
      <AiOutlineUser className="ml-3" />
        <button>ورود / ثبت نام</button>
        

      </div>
    </div>
  );
};

export default Navbar;
