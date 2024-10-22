import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import db from "../../db/db.json";

import LocationIcon from "../../assets/svg/location-sign-svgrepo-com";
import SearchSvg from "../../assets/svg/SearchSvg";
import Menu from "./Menu";

const Navbar = () => {
  const [menuHam, setMenuHam] = useState(true);

  const [data, setData] = useState(null);
  useEffect(() => {
    setData(db.menu);
  }, []);

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

      <nav
        className={`lg:transition-none lg:w-[52%] w-auto transition-all ease-in-out duration-500  ${
          !menuHam
            ? "opacity-1 max-h-[400px]"
            : " lg:opacity-[1] lg:max-h-[300px] opacity-0 max-h-0 lg:visible invisible"
        }`}
      >
        <ul className="lg:px-0 px-[70px] lg:flex gap-x-2 block text-[12px]">
          <Menu data={data} />
        </ul>
      </nav>

      <div className="lg:flex hidden flex-col justify-center items-center gap-y-1 w-[15%] ">
        <div className="hidden lg:flex items-center justify-center w-[80%]  text-[14px] py-[13px] border-[1px] rounded-[20px] border-gray-200 ">
          <AiOutlineUser className="ml-3" />
          <button>ورود / ثبت نام</button>
        </div>
        <div className="flex justify-center items-center gap-x-5">
          <div className="p-[7px] rounded-[50%] border-[1px] border-red-500 transition-all ease-linear fill-red-500 hover:bg-red-500 hover:fill-white">
            <LocationIcon />
          </div>
          <div className="p-[7px] rounded-[50%] border-[1px] border-red-500 transition-all ease-linear fill-white bg-red-500 hover:bg-white hover:fill-red-500">
            <SearchSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
