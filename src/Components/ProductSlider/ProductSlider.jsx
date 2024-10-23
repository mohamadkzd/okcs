import React from "react";
import product1 from "../../assets/product-1.jpg";
import calunder from "../../assets/calunder.png";
import "./productSlider.css";

const ProductSlider = () => {
  return (
    <div className="w-[95%] my-[50px] mx-auto bg-[red]">
      <div className="flex justify-between items-center">
        <div className="lg:flex hidden w-[20%] justify-center items-center">
          <img src={calunder} alt="" />
        </div>
        <div className="lg:w-[80%] overflow-x-scroll w-full">
          <div className="flex gap-x-5 justify-right items-center overflow-hidden lg:w-[130%] md:w-[200%] w-[280%] py-[30px] pl-[10px] lg:pr-0 pr-[10px]">
            <div className="flex flex-col gap-y-6 justify-center items-center w-[20%] bg-[white] rounded-[10px] py-2">
              <div>
                <img className="w-[150px]" src={product1} alt="" />
              </div>
              <div className="w-[80%]">
                <p>شامپو حاوی ویتامین موهای معمولی بنفش صدفی 1000 گرمی اوه</p>
              </div>
              <span>54.400</span>
              <span className="takhfif relative">60.400</span>
            </div>
            <div className="flex flex-col gap-y-6 justify-center items-center w-[20%] bg-[white] rounded-[10px] py-2">
              <div>
                <img className="w-[150px]" src={product1} alt="" />
              </div>
              <div className="w-[80%]">
                <p>شامپو حاوی ویتامین موهای معمولی بنفش صدفی 1000 گرمی اوه</p>
              </div>
              <span>54.400</span>
              <span className="takhfif relative">60.400</span>
            </div>
            <div className="flex flex-col gap-y-6 justify-center items-center w-[20%] bg-[white] rounded-[10px] py-2">
              <div>
                <img className="w-[150px]" src={product1} alt="" />
              </div>
              <div className="w-[80%]">
                <p>شامپو حاوی ویتامین موهای معمولی بنفش صدفی 1000 گرمی اوه</p>
              </div>
              <span>54.400</span>
              <span className="takhfif relative">60.400</span>
            </div>
            <div className="flex flex-col gap-y-6 justify-center items-center w-[20%] bg-[white] rounded-[10px] py-2">
              <div>
                <img className="w-[150px]" src={product1} alt="" />
              </div>
              <div className="w-[80%]">
                <p>شامپو حاوی ویتامین موهای معمولی بنفش صدفی 1000 گرمی اوه</p>
              </div>
              <span>54.400</span>
              <span className="takhfif relative">60.400</span>
            </div>
            <div className="flex flex-col gap-y-6 justify-center items-center w-[20%] bg-[white] rounded-[10px] py-2">
              <div>
                <img className="w-[150px]" src={product1} alt="" />
              </div>
              <div className="w-[80%]">
                <p>شامپو حاوی ویتامین موهای معمولی بنفش صدفی 1000 گرمی اوه</p>
              </div>
              <span>54.400</span>
              <span className="takhfif relative">60.400</span>
            </div>
            <div className="flex flex-col gap-y-6 justify-center items-center w-[20%] bg-[white] rounded-[10px] py-2">
              <div>
                <img className="w-[150px]" src={product1} alt="" />
              </div>
              <div className="w-[80%]">
                <p>شامپو حاوی ویتامین موهای معمولی بنفش صدفی 1000 گرمی اوه</p>
              </div>
              <span>54.400</span>
              <span className="takhfif relative">60.400</span>
            </div>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
