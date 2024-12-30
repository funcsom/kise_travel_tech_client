import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = ({ elems }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
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

      {/* <div className="swiper-button-prev" style={{ color: "#000" }}>
        ❮
      </div>
      <div className="swiper-button-next" style={{ color: "#000" }}>
        ❯
      </div> */}
    </div>
  );
};

export default Carousel;
