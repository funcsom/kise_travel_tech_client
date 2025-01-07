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
import Footer from "../../components/common/Footer";

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

  useEffect(() => {
    console.log(info);
  }, [info]);

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
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
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
                  <TrainSelectPlace
                    info={info}
                    setInfo={setInfo}
                    trainGoStation={trainToGo?.stations}
                    trainComeStation=""
                    // 내가 여태껏 어떻게 했길래 자꾸 station이 없다는 결과가 나왔지?
                    // 여기서도 있으면 해라가되어서 그런감?
                  />
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
                  <TrainSelectPlace
                    info={info}
                    setInfo={setInfo}
                    trainComeStation={trainToCome?.stations}
                    trainGoStation=""
                  />
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
      </Body>
      <Footer>
        <Button text="다음" type="cta" handleClick={handleNext} />
      </Footer>
    </div>
  );
};

export default SelectDetail;
