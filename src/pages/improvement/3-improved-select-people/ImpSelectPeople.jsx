import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header";
import Contents from "../../../components/common/Contents";
import Footer from "../../../improved/Footer";
import Button from "../../../improved/Button";
import Modal from "./components/Modal";

import iconprev from "../../../assets/icon/icon_previous.svg";
import DimmedBox from "../../../improved/DimmedBox";
import SelectPeopleComp from "./components/SelectPeopleComp";
import Notification from "./components/Notification";
import SelectDepartStation from "./components/SelectDepartStation";

const ImpSelectPeople = (props) => {
  const navigate = useNavigate();
  const [isNotiOpen, setIsNotiOpen] = useState(false);

  const openNoti = () => {
    setIsNotiOpen((prev) => !prev);
  };

  const handleNext = () => {
    navigate("./");
  };

  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <Contents>
      <Header
        text="인원선택"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
      <main>
        <SelectDepartStation />
        <Notification openNoti={openNoti} />
        <SelectPeopleComp />
      </main>
      <Footer>
        <div style={{ display: "flex" }}>
          <DimmedBox lefttext="인원" righttext="어른 2명" />
        </div>
        <div style={{ display: "flex" }}>
          <Button
            type="primary"
            state="default"
            size="large"
            shape="box"
            rate="r1"
          >
            다음
          </Button>
        </div>
      </Footer>
      {isNotiOpen && <Modal openNoti={openNoti} />}
    </Contents>
  );
};

export default ImpSelectPeople;
