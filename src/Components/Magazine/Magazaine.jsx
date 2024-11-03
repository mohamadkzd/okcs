import React, { useEffect, useState } from "react";
import magazine1 from "../../assets/magazine.jpg";
import db from "../../db/db.json";
const Magazaine = () => {
  const [magazine, setMagazine] = useState(null);
  useEffect(() => {
    setMagazine(db.magazine);
  }, []);
  console.log(magazine);

  return (
    <div className="w-full mt-[50px] flex flex-col justify-center items-center gap-y-[50px] lg:px-[20px]">
      <div className="text-[26px] text-[red] font-bold">
        <h1>مجله افق کوروش</h1>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-x-7 gap-y-7">
        {magazine?.map((elem) => {
          return (
            <div className="flex flex-col justify-center items-center gap-y-5">
              <img className="w-[350px] rounded-[50%]" src={elem.img} alt="" />
              <p className="w-[60%] text-center text-[14px]">{elem.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Magazaine;
