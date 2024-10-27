import React, { useRef} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../assets/slidier-1.jpg"
import slider2 from "../../assets/slider-2.jpg"
import slider3 from "../../assets/slider-3.jpg"
import slider4 from "../../assets/slider-4.jpg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="slider-1 w-full md:h-[500px] h-[300px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img className="object-cover" src={slider1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="object-cover" src={slider2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="object-cover" src={slider3} alt="" /></SwiperSlide>
        <SwiperSlide><img className="object-cover" src={slider4} alt="" /></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
