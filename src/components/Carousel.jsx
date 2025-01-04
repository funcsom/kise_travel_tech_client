import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import iconcalendar from "../assets/icon/icon_calendar.svg";
import iconprevious from "../assets/icon/icon_previous.svg";

import "./Carousel.css";

const Carousel = ({ elems }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
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
    </div>
  );
};

export default Carousel;

export const CarouselProd = ({ elems, onClickProduct }) => {
  // const paginationRef = useRef(null);

  // const pagination = {
  //   el: paginationRef.current,
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + "</span>";
  //   },
  // };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"></div>';
    },
  };

  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={pagination}
        // pagination={pagination}
      >
        {elems.map((elem, index) => {
          const formattedNumber = new Intl.NumberFormat("ko-KR").format(
            elem.price
          );
          return (
            <SwiperSlide key={index}>
              <div
                onClick={() => {
                  console.log(elem.title);

                  onClickProduct([elem.title, elem.price]);
                }}
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "flex-end",
                  backgroundColor: "#CDE0EE",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <img src={elem.img} alt="" style={{ width: "100%" }} />
                <img
                  src={iconcalendar}
                  alt=""
                  style={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    width: "36px",
                  }}
                />
                <div
                  style={{
                    zIndex: "1",
                    backgroundColor: "#00000060",
                    width: "100%",
                    height: "45px",
                    position: "absolute",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px 10px",
                  }}
                >
                  <div style={{ font: "var(--font-orig-b4)", color: "white" }}>
                    <p>{elem.title}</p>
                    <p>{formattedNumber}원 ~</p>
                  </div>
                  <img
                    src={iconprevious}
                    alt="cta 버튼"
                    style={{ transform: "rotate(180deg)", width: "20px" }}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
