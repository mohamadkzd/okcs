import React from "react";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slider11 from "../../assets/product-1.jpg";
import calunder from "../../assets/calunder.png";

const ProductSlider2 = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <div className="w-[95%] my-[50px] mx-auto bg-[red]">
        <div className="flex justify-between items-center">
          <div className="w-[20%] flex justify-center items-center">
            <img src={calunder} alt="" />
          </div>
          <div className="w-[85%]">
            <div>
              <Swiper
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1.5}
                spaceBetween={10}
                navigation={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2.3,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2.7,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4.6,
                    spaceBetween: 15,
                  },
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper2"
              >
                <SwiperSlide className="swiper-slide2">
                  <img className="img2" src={slider11} alt="" />
                  <div className="">
                    <p>
                      شامپو حاوی ویتامین موهای معمولی بنفش صدفی 1000 گرمی اوه
                    </p>
                  </div>
                  <span>54.400</span>
                  <span className="takhfif relative">60.400</span>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide2">
                  <img className="img2" src={slider11} alt="" />
                  <div className="">
                    <p>
                      شامپو حاوی ویتامین موهای معمولی بنفش صدفی 1000 گرمی اوه
                    </p>
                  </div>
                  <span>54.400</span>
                  <span className="takhfif relative">60.400</span>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide2">
                  <img className="img2" src={slider11} alt="" />
                  <div className="">
                    <p>
                      شامپو حاوی ویتامین موهای معمولی بنفش صدفی 1000 گرمی اوه
                    </p>
                  </div>
                  <span>54.400</span>
                  <span className="takhfif relative">60.400</span>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide2">
                  <img className="img2" src={slider11} alt="" />
                  <div className="">
                    <p>
                      شامپو حاوی ویتامین موهای معمولی بنفش صدفی 1000 گرمی اوه
                    </p>
                  </div>
                  <span>54.400</span>
                  <span className="takhfif relative">60.400</span>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide2">
                  <img className="img2" src={slider11} alt="" />
                  <div className="">
                    <p>
                      شامپو حاوی ویتامین موهای معمولی بنفش صدفی 1000 گرمی اوه
                    </p>
                  </div>
                  <span>54.400</span>
                  <span className="takhfif relative">60.400</span>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide2">
                  <img className="img2" src={slider11} alt="" />
                  <div className="">
                    <p>
                      شامپو حاوی ویتامین موهای معمولی بنفش صدفی 1000 گرمی اوه
                    </p>
                  </div>
                  <span>54.400</span>
                  <span className="takhfif relative">60.400</span>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide2">
                  <img className="img2" src={slider11} alt="" />
                  <div className="">
                    <p>
                      شامپو حاوی ویتامین موهای معمولی بنفش صدفی 1000 گرمی اوه
                    </p>
                  </div>
                  <span>54.400</span>
                  <span className="takhfif relative">60.400</span>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide2">
                  <img className="img2" src={slider11} alt="" />
                  <div className="">
                    <p>
                      شامپو حاوی ویتامین موهای معمولی بنفش صدفی 1000 گرمی اوه
                    </p>
                  </div>
                  <span>54.400</span>
                  <span className="takhfif relative">60.400</span>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                  <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                  </svg>
                  <span ref={progressContent}></span>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider2;
