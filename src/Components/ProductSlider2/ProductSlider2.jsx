import React from "react";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slider11 from "../../assets/product-1.jpg";

const ProductSlider2 = () => {
  return (
    <div>
      <div className="w-[95%] my-[50px] mx-auto bg-[red]">
        <div className="flex justify-between items-center">
          <div className="w-[20%] flex justify-center items-center">
            <img src={calunder} alt="" />
          </div>
          <div className="w-[80%]">
            <div className="flex gap-x-5 justify-right items-center overflow-hidden lg:w-[160%] md:w-[200%] w-[280%] py-[30px] pl-[10px]">
              <div className="flex flex-col gap-y-6 justify-center items-center w-[20%] bg-[white] rounded-[10px] py-2">
                <div>
                  {/* <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img className="img w-[120px]" src={slider11} alt="" />
                    </SwiperSlide>
                  </Swiper> */}
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
    </div>
  );
};

export default ProductSlider2;
