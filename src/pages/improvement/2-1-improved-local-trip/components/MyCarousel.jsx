import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const MyCarousel = ({ elems }) => {
  return (
    <div>
      <Swiper
        spaceBetween={10} // 슬라이드 간의 간격을 조절해 양쪽 슬라이드 일부만 보이게 함
        slidesPerView={1.3} // 가운데 슬라이드 완전히 보이고, 양쪽 슬라이드 일부만 보이도록 설정
        centeredSlides={true} // 가운데 정렬
        loop={true} // 무한 스크롤
        pagination={{ clickable: true }}
      >
        {elems.map((elem, index) => (
          <SwiperSlide key={index}>
            <img
              src={elem}
              alt={`carousel_${index}`}
              style={{
                width: "100%",
                borderRadius: "10px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MyCarousel;

// usage :
// <MyCarousel
// elems={[carouselitem, carouselitem2, carouselitem, carouselitem2]}
// />
