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
  const formatPrice = (price) => price.toLocaleString("ko-KR");

  const navigate = useNavigate();
  const { impInfo, setImpInfo } = useContext(ImpUserContext);

  const [current, setCurrent] = useState("prgr"); // "edit" || "prgr"
  const [step, setStep] = useState(1); // 1 || 2 || 3 || 4
  const [editImpInfo, setEditImpInfo] = useState(""); // "goTrain", "comeTrain", "package"

  const onClickChangeBtntoEdit = (props) => {
    setCurrent("edit");
    setEditImpInfo(props);
  };

  const onClickChangeBtntoPrgr = () => {
    setCurrent("prgr");
  };

  const handleNext = () => {
    navigate("/imp/traveleragree");
  };

  const handlePrev = () => {
    navigate(-1);
  };

  useEffect(() => {
    console.log(impInfo.goTrain.price, impInfo.comeTrain.price);
  }, [impInfo]);

  const people = impInfo.people;
  const goTrainPrice = impInfo.goTrain.price * people;
  const comeTrainPrice = impInfo.comeTrain.price * people;
  const packagePrice = impInfo.package.price * people;

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
          />
        ) : (
          <EditPage
            setStep={setStep}
            editImpInfo={editImpInfo}
            onClickChangeBtn={onClickChangeBtntoPrgr}
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
          <Button
            type="primary"
            state="default"
            size="large"
            shape="box"
            rate="r1"
            onClickButton={handleNext}
          >
            상품예약
          </Button>
        </div>
      </Footer>
    </Contents>
  );
};

export default ImpSelectProduct;
