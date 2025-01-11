import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import iconcalendar from "../assets/icon/icon_calendar.svg";
import iconprevious from "../assets/icon/icon_previous.svg";

import "./Carousel.css";

const ImgCarousel = ({ elems }) => {
  return (
    <div>
      <Swiper spaceBetween={20} slidesPerView={1.05}>
        {elems.map((elem, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={elem}
                alt={`carousel_${index}`}
                style={{ width: "100%" }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImgCarousel;

export const Carousel = ({ elems }) => {
  return (
    <div>
      <Swiper spaceBetween={20} slidesPerView={1.05}>
        {elems.map((elem, index) => {
          return (
            <SwiperSlide key={index}>
              <div>{elem}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export const SmallCarousel = ({ elems }) => {
  return (
    <div>
      <Swiper spaceBetween={8} slidesPerView={2.025}>
        {elems.map((elem, index) => {
          return (
            <SwiperSlide key={index}>
              <div>{elem}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
