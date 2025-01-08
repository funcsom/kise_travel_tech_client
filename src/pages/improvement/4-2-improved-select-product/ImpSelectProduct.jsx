import { ImpUserContext } from "../../../App";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import Contents from "../../../components/common/Contents";

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
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          position: "sticky",
          bottom: "0",
        }}
      >
        <div
          className="footer"
          style={{
            padding: "20px 16px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#22222280",

            font: "var(--font-b2-no-m)",
            color: "var(--common-100)",
          }}
        >
          <span>{`선택한 상품 총 ${step - 1}개`}</span>
          <span>{`${formatPrice(
            goTrainPrice + comeTrainPrice + packagePrice
          )}원`}</span>
        </div>
        {step === 4 && (
          <div
            style={{
              padding: "10px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              // backgroundColor: "var(--gray-50)",
              backgroundColor: "var(--common-0)",

              font: "var(--font-h1-sb)",
              color: "var(--common-100)",
            }}
          >
            상품예약
          </div>
        )}
      </div>
    </Contents>
  );
};

export default ImpSelectProduct;
