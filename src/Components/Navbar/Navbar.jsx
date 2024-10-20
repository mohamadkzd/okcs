import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuHam, setMenuHam] = useState(false);

  const handelClick = () => {
    setMenuHam(!menuHam);
  };
  return (
    <div className="lg:flex block">
      {/* size mbile */}
      <div className="lg:block flex  lg:w-auto w-full h-[100px] lg:pr-[70px] lg:pl-0 px-[70px] justify-between items-center  ">
        <div>
          <img className="w-[200px]" src={Logo} alt="" />
        </div>
        <div className="lg:hidden">
          {menuHam ? (
            <AiOutlineClose
              onClick={() => handelClick()}
              className="text-3xl cursor-pointer text-[red]"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => handelClick()}
              className="text-3xl cursor-pointer text-[red]"
            />
          )}
        </div>
      </div>

      <nav className={`transition-all ease-in-out duration-500 ${menuHam?"opacity-1 max-h-[400px]":" opacity-0 max-h-0"}`}>
        <ul className="px-[70px] lg:flex block">
          <li className="leading-[60px] transition-all ease-linear hover:text-[red]">
            <Link>محصولات</Link>
          </li>
          <li className="leading-[60px] transition-all ease-linear hover:text-[red]">
            <Link>فروشگاه اینترنتی </Link>
          </li>
          <li className="leading-[60px] transition-all ease-linear hover:text-[red]">
            <Link>باشگاه مشتریان </Link>
          </li>
          <li className="leading-[60px] transition-all ease-linear hover:text-[red]">
            <Link>دریافت نمایندگی</Link>
          </li>
          <li className="leading-[60px] transition-all ease-linear hover:text-[red]">
            <Link> جشنواره ها</Link>
          </li>
          <li className="leading-[60px] transition-all ease-linear hover:text-[red]">
            <Link>درباره ما</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
