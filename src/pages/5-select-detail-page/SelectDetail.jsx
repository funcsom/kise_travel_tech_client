import { UserContext } from "../../App";
import { useContext, useEffect, useState } from "react";
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
  const [trainInfo, setTrainInfo] = useState([]);
  const { info, setInfo } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`data/${info.region}-product.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("받아온 데이터 =>", data);
        setTrainInfo(data.TrainInformation);
      });
  }, []);

  // useEffect(() => {
  //   console.log(trainInfo);
  // }, [trainInfo]);

  const trainGo = trainInfo.filter(
    (train) => train.name === info.goTrain.trainNo
  );
  const trainCome = trainInfo.filter(
    (train) => train.name === info.comeTrain.trainNo
  );

  const [trainToGo] = trainGo;
  const [trainToCome] = trainCome;

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
            <Wrapper styles={{ borderBottom: "1px solid black" }}>
              <Product title={trainToGo?.name}>
                <TrainInfo
                  selectedDate={`${info.date} ${info.day}`}
                  departPlace={trainToGo?.startpoint}
                  departTime={trainToGo?.starttime}
                  arrivalPlace={trainToGo?.endpoint}
                  arrivalTime={trainToGo?.endtime}
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
            <Wrapper styles={{ borderBottom: "1px solid black" }}>
              <Product title={trainToCome?.name}>
                <TrainInfo
                  selectedDate={`${info.date} ${info.day}`}
                  departPlace={trainToCome?.startpoint}
                  departTime={trainToCome?.starttime}
                  arrivalPlace={trainToCome?.endpoint}
                  arrivalTime={trainToCome?.endtime}
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
          </NoneToggleWrapper>
        </div>
        <Button text="다음" type="cta" handleClick={handleNext} />
      </Body>
    </div>
  );
};

export default SelectDetail;
