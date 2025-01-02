import { UserContext } from "../../App";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Body from "../../components/common/Body";
import Progressbar from "../../components/common/Progressbar";
import NoneToggleWrapper from "../../components/common/NoneToggleWrapper";
import Wrapper from "../../components/common/Wrapper";
import Product from "../../components/common/Product";
import TrainInfo from "./components/TrainInfo";
import Button from "../../components/Button";

import iconprev from "../../assets/icon/icon_previous.svg";
import TrainSelectPlace from "./components/TrainSelectPlace";
import HeadCounting from "./components/HeadCounting";
import PackageCounting from "./components/PackageCounting";

const SelectDetail = () => {
  const [valid, setValid] = useState(true);
  const { info, setInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const handleNext = () => {
    console.log(valid);
    if (valid === false) {
      alert(`3명이 아닙니다.`);
    } else {
      navigate("/traveleragree");
    }
  };

  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <div>
      <Header
        text="예약인원"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
      <Body>
        <Progressbar nthChild={2} />
        <div>
          <NoneToggleWrapper title="가는열차">
            {trainToGo.map((train, index) => (
              <div key={index}>
                <Wrapper styles={{ borderBottom: "1px solid black" }}>
                  <Product title={info.goTrain.trainNo}>
                    <TrainInfo
                      selectedDate={`${info.date} ${info.day}`}
                      departPlace={train.departPlace}
                      departTime={train.departTime}
                      arrivalPlace={train.arrivalPlace}
                      arrivalTime={train.arrivalTime}
                    />
                    <div
                      style={{
                        padding: "14px 24px",
                      }}
                    >
                      <TrainSelectPlace />
                    </div>
                    <div
                      style={{
                        padding: "16px 40px",
                        borderTop: "1px solid var(--color-white)",
                      }}
                    >
                      <HeadCounting people={info.people} setValid={setValid} />
                    </div>
                  </Product>
                </Wrapper>
              </div>
            ))}
          </NoneToggleWrapper>
          <NoneToggleWrapper title="패키지">
            <Wrapper>
              <Product title={info.package}>
                <div
                  style={{
                    padding: "16px 40px",
                  }}
                >
                  <PackageCounting
                    date={`${info.date} ${info.day}`}
                    packageName={info.package}
                    people={info.people}
                  />
                </div>
              </Product>
            </Wrapper>
          </NoneToggleWrapper>
          <NoneToggleWrapper title="오는열차">
            {trainToCome.map((train, index) => (
              <div key={index}>
                <Wrapper styles={{ borderBottom: "1px solid black" }}>
                  <Product title={info.comeTrain.trainNo}>
                    <TrainInfo
                      selectedDate={`${info.date} ${info.day}`}
                      departPlace={train.departPlace}
                      departTime={train.departTime}
                      arrivalPlace={train.arrivalPlace}
                      arrivalTime={train.arrivalTime}
                    />
                    <div
                      style={{
                        padding: "14px 24px",
                      }}
                    >
                      <TrainSelectPlace />
                    </div>
                    <div
                      style={{
                        padding: "16px 40px",
                        borderTop: "1px solid var(--color-white)",
                      }}
                    >
                      <HeadCounting people={info.people} setValid={setValid} />
                    </div>
                  </Product>
                </Wrapper>
              </div>
            ))}
          </NoneToggleWrapper>
        </div>
        <Button text="다음" type="cta" handleClick={handleNext} />
      </Body>
    </div>
  );
};

const trainToGo = [
  {
    name: "KTX NNN",
    departPlace: "청량리",
    departTime: "10:05",
    arrivalPlace: "동해",
    arrivalTime: "12:20",
  },
];

const trainToCome = [
  {
    name: "KTX NNN",
    departPlace: "청량리",
    departTime: "10:05",
    arrivalPlace: "동해",
    arrivalTime: "12:20",
  },
];

export default SelectDetail;
