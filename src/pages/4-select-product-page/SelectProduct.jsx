import { UserContext } from "../../App";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Body from "../../components/common/Body";
import ToggleWrapper from "../../components/common/ToggleWrapper";
import Wrapper from "../../components/common/Wrapper";
import Stepper from "../../components/common/Stepper";
import Product from "../../components/common/Product";
import Button from "../../components/Button";
import TrainInfo from "./components/TrainInfo";

import iconprev from "../../assets/icon/icon_previous.svg";
import styles from "./SelectProduct.module.css";
import Progressbar from "../../components/common/Progressbar";

const SelectProduct = () => {
  const [isPackageSelected, setIsPackageSelected] = useState(false);
  const { info, setInfo } = useContext(UserContext);
  const [count, setCount] = useState(1);
  const [selectedTrainToGo, setSelectedTrainToGo] = useState(trainToGo[0].name);
  const [selectedTrainToCome, setSelectedTrainToCome] = useState(
    trainToCome[0].name
  );
  const [selectedPackage, setSelectedPackage] = useState();

  const navigate = useNavigate();

  const handleCountChange = (newCount) => {
    setCount(newCount);
  };

  useEffect(() => {
    console.log("업데이트된 info:", info); // info 변경 시 출력
  }, [info]);

  const handlePackageChange = (packagename) => {
    setSelectedPackage(packagename);
  };

  const handleNext = () => {
    if (isPackageSelected) {
      setInfo({
        ...info,
        people: count,
        goTrain: { ...info.goTrain, trainNo: `${selectedTrainToGo}` },
        comeTrain: {
          ...info.comeTrain,
          trainNo: `${selectedTrainToCome}`,
        },
        package: `${selectedPackage}`,
      });
      navigate("/selectdetail");
    } else {
      alert("패키지은(는) 선택 필수입니다. 상품을 선택하세요.");
    }
  };
  const handlePrev = () => {
    navigate(-1);
  };
  return (
    <div>
      <Header
        text="상품선택"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
      <Body>
        <Progressbar nthChild={1} />
        <div>
          <ToggleWrapper title="인원선택">
            <Wrapper>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flex: 1,
                  marginBottom: "22px",
                }}
              >
                <div>인원</div>
                <Stepper
                  count={count}
                  onCountChange={handleCountChange}
                  minHead={true}
                  maxHead={true}
                />
              </div>
            </Wrapper>
          </ToggleWrapper>
          <ToggleWrapper title="가는열차">
            {trainToGo.map((train, index) => (
              <div key={index}>
                <Wrapper styles={{ borderBottom: "1px solid black" }}>
                  <input
                    type="radio"
                    name="traintogo"
                    value={train.name}
                    checked={selectedTrainToGo === train.name}
                    onChange={() => setSelectedTrainToGo(train.name)}
                  />
                  <Product title={train.name}>
                    <TrainInfo
                      selectedDate={`${info.date} ${info.day}`}
                      departTime={train.departTime}
                      arrivalTime={train.arrivalTime}
                    />
                  </Product>
                </Wrapper>
              </div>
            ))}
          </ToggleWrapper>
          <ToggleWrapper title="패키지">
            <Wrapper>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1px",
                  flexGrow: "1",
                }}
              >
                {packageProduct.map((pkg, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedPackage === pkg.name}
                      onChange={() => {
                        handlePackageChange(pkg.name);
                        setIsPackageSelected(true);
                      }}
                    />
                    <Product title={pkg.name} />
                  </div>
                ))}
              </div>
            </Wrapper>
          </ToggleWrapper>
          <ToggleWrapper title="오는열차">
            {trainToCome.map((train, index) => (
              <div key={index}>
                <Wrapper styles={{ borderBottom: "1px solid black" }}>
                  <input
                    type="radio"
                    name="traintocome"
                    value={train.name}
                    checked={selectedTrainToCome === train.name}
                    onChange={() => setSelectedTrainToCome(train.name)}
                  />
                  <Product title={train.name}>
                    <TrainInfo
                      selectedDate={`${info.date} ${info.day}`}
                      departTime={train.departTime}
                      arrivalTime={train.arrivalTime}
                    />
                  </Product>
                </Wrapper>
              </div>
            ))}
          </ToggleWrapper>
        </div>
        <Button text="다음" type="cta" handleClick={handleNext} />
      </Body>
    </div>
  );
};

const packageProduct = [
  { name: "관광택시4시간[2인]" },
  { name: "관광택시4시간[3인]" },
  { name: "관광택시4시간[4인]" },
  { name: "관광택시6시간[2인]" },
  { name: "관광택시6시간[3인]" },
  { name: "관광택시6시간[4인]" },
  { name: "관광택시6시간+4시간[2인]" },
  { name: "관광택시6시간+4시간[3인]" },
  { name: "관광택시6시간+4시간[4인]" },
];

const trainToGo = [
  { name: "KTX 845", departTime: "07:01", arrivalTime: "10:02" },
  { name: "KTX 848", departTime: "07:58", arrivalTime: "10:45" },
];

const trainToCome = [
  { name: "KTX 345", departTime: "18:33", arrivalTime: "21:24" },
  { name: "KTX 348", departTime: "19:05", arrivalTime: "22:15" },
];

export default SelectProduct;
