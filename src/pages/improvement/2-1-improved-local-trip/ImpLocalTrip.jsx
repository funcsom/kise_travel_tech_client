import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../../../components/Header";
import Tab from "./components/Tab";

import iconprev from "../../../assets/icon/icon_previous.svg";
import carouselitem from "../../../assets/image/carousel-item.png";
import carouselitem2 from "../../../assets/image/carousel-item2.png";
import MyCarousel from "./components/MyCarousel";
import BottomModal from "./components/Modal/BottomModal";
import Contents from "../../../components/common/Contents";
import Clip from "./components/Modal/Clip";

import styles from "./ImpLocalTrip.module.css";

const ImpLocalTrip = () => {
  const [selectedLocal, setSelectedLocal] = useState("수도권");
  const [isOpenModal, setIsOpenModal] = useState(1);
  const [packages, setPackages] = useState([]);

  const [selectedStation, setSelectedStation] = useState(["서울 전체"]);

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
    <Contents>
      <Header
        text="지역별여행"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
      <main className={styles.wrapper}>
        <Tab changeLocal={changeLocal} selectedLocal={params.local} />
        <MyCarousel
          elems={[carouselitem, carouselitem2, carouselitem, carouselitem2]}
        />
        <div className={styles.selectedstationwrapper}>
          {selectedStation.map((node, index) => (
            <Clip key={index}>{node}</Clip>
          ))}
        </div>
      </main>

      {isOpenModal && (
        <BottomModal
          selectedStation={selectedStation}
          setSelectedStation={setSelectedStation}
          setIsOpenModal={setIsOpenModal}
        />
      )}
    </Contents>
  );
};

export default ImpLocalTrip;
