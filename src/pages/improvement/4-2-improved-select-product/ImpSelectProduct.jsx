import { ImpUserContext } from "../../../App";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header";
import Contents from "../../../components/common/Contents";
import Footer from "../../../improved/Footer";
import Button from "../../../improved/Button";
import DimmedBox from "../../../improved/DimmedBox";

import EditPage from "./pages/EditPage";
import PrgrPage from "./pages/PrgrPage";

import iconprev from "../../../assets/icon/icon_previous.svg";

const ImpSelectProduct = () => {
  const navigate = useNavigate();
  const formatPrice = (price) => price.toLocaleString("ko-KR");

  const { impInfo, setImpInfo } = useContext(ImpUserContext);

  // 여기서 필요한 전체 state를 관리하도록 하자 -> 해당 state로 각 페이지에서 렌더링 할 수 있도록
  // 해당 프로세스에서 확정지어줘야하는 정보들에는 : impInfo의
  // goTrain 정보 station 제외, comeTrain 정보 station 제외, package 정보
  const [info, setInfo] = useState({
    people: impInfo.people,
    date: impInfo.date,
    day: impInfo.day,
    package: { name: "", price: 0 },
    goTrain: {
      id: "",
      trainName: "",
      trainNo: "",
      trainGrade: "economy",
      departstation: impInfo.goTrain.departstation,
      departtime: "",
      arrivalstation: impInfo.goTrain.arrivalstation,
      arrivaltime: "",
      price: 0,
    },
    comeTrain: {
      id: "",
      trainName: "",
      trainNo: "",
      trainGrade: "economy",
      departstation: impInfo.comeTrain.departstation,
      departtime: "",
      arrivalstation: impInfo.comeTrain.arrivalstation,
      arrivaltime: "",
      price: 0,
    },
  });

  // impInfo는 맨 마지막에 CTA 버튼 눌렀을 때 확정시켜주는 역할
  const onClickCTABtn = () => {
    setImpInfo({
      ...impInfo,
      package: info.package,
      goTrain: info.goTrain,
      comeTrain: info.comeTrain,
    });
    navigate("/imp/traveleragree");
  };

  const [current, setCurrent] = useState("prgr"); // "edit" || "prgr"
  const [step, setStep] = useState(1); // 1 || 2 || 3 || 4
  const [editTypeWhat, setEditTypeWhat] = useState(""); // "goTrain", "comeTrain", "package"

  const onClickChangeBtntoEdit = (props) => {
    setCurrent("edit");
    setEditTypeWhat(props);
  };

  const onClickChangeBtntoPrgr = () => {
    setCurrent("prgr");
  };

  const handlePrev = () => {
    navigate(-1);
  };

  useEffect(() => {
    console.log(info.goTrain.price, info.comeTrain.price, info.package.price);
  }, [info]);

  const people = info.people;
  const goTrainPrice = info.goTrain.price * people;
  const comeTrainPrice = info.comeTrain.price * people;
  const packagePrice = info.package.price * people;

  return (
    <Contents>
      <Header
        text="상품선택"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
      <main>
        {current === "prgr" ? (
          <PrgrPage
            step={step}
            setStep={setStep}
            onClickChangeBtn={onClickChangeBtntoEdit}
            info={info}
            setInfo={setInfo}
          />
        ) : (
          <EditPage
            setStep={setStep}
            editTypeWhat={editTypeWhat}
            onClickChangeBtn={onClickChangeBtntoPrgr}
            info={info}
            setInfo={setInfo}
          />
        )}
      </main>

      <Footer>
        <div style={{ display: "flex" }}>
          <DimmedBox
            lefttext={`선택한 상품 총 ${step - 1}개`}
            righttext={`${formatPrice(
              goTrainPrice + comeTrainPrice + packagePrice
            )}원`}
          />
        </div>
        <div style={{ display: "flex" }}>
          {step === 4 && (
            <Button
              type="primary"
              state="default"
              size="large"
              shape="box"
              rate="r1"
              onClickButton={onClickCTABtn}
            >
              상품예약
            </Button>
          )}
        </div>
      </Footer>
    </Contents>
  );
};

export default ImpSelectProduct;
