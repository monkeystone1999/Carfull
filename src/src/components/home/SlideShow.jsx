import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slideShow.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import SlideItem from "./SlideItem";

// import img resources
import img1 from "./seatbelt.jpg";
import img2 from "./drink-drive.jpg";
import img3 from "./safety-drive.jpg";

export default function SlideShow() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 100000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          renderBullet: function(index, className) {
            return '<span class="' + className + '">' +  '</span>';
          }
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><SlideItem src={img3}/></SwiperSlide>
        <SwiperSlide><SlideItem src={img1}/></SwiperSlide>
        <SwiperSlide><SlideItem src={img2}/></SwiperSlide>
      </Swiper>
    </>
  );
}
