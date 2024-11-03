import React, { useEffect, useState } from "react";
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

import db from "../../db/db.json";

import slider11 from "../../assets/product-1.jpg";
import calunder from "../../assets/calunder.png";

const ProductSlider2 = () => {
  const [productSlider, setProductSlider] = useState(null);
  useEffect(() => {
    setProductSlider(db.productSlider);
  }, []);

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
                {productSlider?.map((elem) => {
                  return (
                    <SwiperSlide className="swiper-slide2">
                      <img className="img2" src={elem.img} alt="" />
                      <div className="px-3">
                        <p className="text-[14px] text-[#707070]">
                          {elem.description}
                        </p>
                      </div>

                      <div className="py-[10px] flex flex-col gap-y-[10px]">
                        <span className="takhfif relative text-[15px] text-[#707070]">
                          {elem.price}
                        </span>
                        <span className="text-[15px]">{elem.discount}</span>
                      </div>
                    </SwiperSlide>
                  );
                })}

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
