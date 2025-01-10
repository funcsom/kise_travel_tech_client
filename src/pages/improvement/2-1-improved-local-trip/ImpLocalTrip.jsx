import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../../../components/Header";
import Tab from "./components/Tab";

import iconprev from "../../../assets/icon/icon_previous.svg";
import carouselitem from "../../../assets/image/carousel-item.png";
import carouselitem2 from "../../../assets/image/carousel-item2.png";
import MyCarousel from "./components/MyCarousel";
import BottomModal from "./components/Modal/BottomModal";

const ImpLocalTrip = () => {
  const [selectedLocal, setSelectedLocal] = useState("수도권");
  const [isOpenModal, setIsOpenModal] = useState(1);
  const [packages, setPackages] = useState([]);

  const navigate = useNavigate();
  const params = useParams();

  const changeLocal = (props) => {
    navigate(`/imp/localtrip/${props}`);
  };

  useEffect(() => {
    fetch("/data/improved/packages.json")
      .then((res) => res.json())
      .then((data) => {
        const [filtereditem] = data.filter(
          (item) => item.local === params.local
        );
        console.log(filtereditem);
      });
  }, [selectedLocal]);

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
      <Tab changeLocal={changeLocal} selectedLocal={params.local} />
      <MyCarousel
        elems={[carouselitem, carouselitem2, carouselitem, carouselitem2]}
      />
      {/* {isOpenModal && <BottomModal />} */}
    </div>
  );
};

export default ImpLocalTrip;
