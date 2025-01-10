import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "./Carousel.css";

const Carousel = ({ elems }) => {
  return (
    <Swiper spaceBetween={20} slidesPerView={1}>
      {elems.map((elem, index) => {
        return (
          <SwiperSlide key={index} className="carouselitem">
            <img
              src={elem}
              alt={`carousel_${index}`}
              style={{ width: "100%" }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
