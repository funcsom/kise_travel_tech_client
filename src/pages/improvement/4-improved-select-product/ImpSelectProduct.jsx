import { ImpUserContext } from "../../../App";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";

import EditPage from "./pages/EditPage";
import PrgrPage from "./pages/PrgrPage";

import iconprev from "../../../assets/icon/icon_previous.svg";

const ImpSelectProduct = () => {
  const navigate = useNavigate();
  const { impInfo, setImpInfo } = useContext(ImpUserContext);

  const [current, setCurrent] = useState("prgr"); // "edit" || "prgr"
  const [step, setStep] = useState(1); // 1 || 2 || 3 || 4
  const [editImpInfo, setEditImpInfo] = useState(""); // "goTrain", "comeTrain", "package"

  const onClickChangeBtntoEdit = (props) => {
    console.log(`${props} Edit 페이지로 변경합니다.`);
    setCurrent("edit");
    setEditImpInfo(props);
  };

  const onClickChangeBtntoPrgr = () => {
    console.log("Prgr 페이지로 변경합니다.");
    setCurrent("prgr");
  };

  const handlePrev = () => {
    navigate(-1);
  };

  useEffect(() => {
    console.log(editImpInfo, step);
  }, [editImpInfo, step]);

  return (
    <div style={{ height: "100vh", position: "relative" }}>
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
        className="footer"
        style={{
          padding: "20px 16px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#22222280",
          position: "absolute",
          bottom: "0",
          font: "var(--font-b2-no-m)",
          color: "var(--common-100)",
        }}
      >
        <span>{`선택한 상품 총 ${step - 1}개`}</span>
        <span>59,800원</span>
      </div>
    </div>
  );
};

export default ImpSelectProduct;
