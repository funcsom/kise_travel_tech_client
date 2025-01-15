import { ImpUserContext } from "../../../App";
import { useState, useContext } from "react";
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

const ImpSelectPeople = () => {
  const { impInfo, setImpInfo } = useContext(ImpUserContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(impInfo.people);
  const [isNotiOpen, setIsNotiOpen] = useState(false);
  const [selectStation, setSelectStation] = useState(
    { goTrain: { departstation: "", arrivalstation: "" } },
    { goTrain: { departstation: "", arrivalstation: "" } }
  );

  const openNoti = () => {
    setIsNotiOpen((prev) => !prev);
  };

  const handleNext = () => {
    setImpInfo({
      ...impInfo,
      people: count,
      goTrain: {
        ...impInfo.goTrain,
        departstation: selectStation.goTrain.departstation,
        arrivalstation: selectStation.goTrain.arrivalstation,
      },
      comeTrain: {
        ...impInfo.comeTrain,
        departstation: selectStation.comeTrain.departstation,
        arrivalstation: selectStation.comeTrain.arrivalstation,
      },
    });
    navigate("/imp/selectdate");
  };

  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <Contents>
      <Header
        text="출발역 및 인원선택"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
      <main>
        <SelectDepartStation
          selectStation={selectStation}
          setSelectStation={setSelectStation}
        />
        <Notification openNoti={openNoti} />
        <SelectPeopleComp
          count={count}
          setCount={(newcount) => setCount(newcount)}
        />
      </main>
      <Footer>
        <div style={{ display: "flex" }}>
          <DimmedBox lefttext="인원" righttext={`어른 ${count}명`} />
        </div>
        <div style={{ display: "flex" }}>
          {count && selectStation.goTrain.departstation ? (
            <Button
              type="primary"
              state="default"
              size="large"
              shape="box"
              rate="r1"
              onClickButton={handleNext}
            >
              다음
            </Button>
          ) : (
            <Button
              type="primary"
              state="disabled"
              size="large"
              shape="box"
              rate="r1"
              onClickButton={handleNext}
            >
              다음
            </Button>
          )}
        </div>
      </Footer>
      {isNotiOpen && <Modal openNoti={openNoti} />}
    </Contents>
  );
};

export default ImpSelectPeople;
