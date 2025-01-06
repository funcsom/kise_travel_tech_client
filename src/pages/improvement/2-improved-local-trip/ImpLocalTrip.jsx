import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header";
import Tab from "./components/Tab";

import iconprev from "../../../assets/icon/icon_previous.svg";
import carouselitem from "../../../assets/image/carousel-item.png";
import carouselitem2 from "../../../assets/image/carousel-item2.png";
import MyCarousel from "./components/MyCarousel";

const ImpLocalTrip = () => {
  const [selectedLocal, setSelectedLocal] = useState("수도권");
  const navigate = useNavigate();
  const handlePrev = () => {
    navigate(-1);
  };
  return (
    <div>
      <Header
        text="지역별여행"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
      <Tab />
      <MyCarousel
        elems={[carouselitem, carouselitem2, carouselitem, carouselitem2]}
      />
    </div>
  );
};

export default ImpLocalTrip;
