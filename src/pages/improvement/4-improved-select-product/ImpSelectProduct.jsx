import { UserContext } from "../../../App";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import TrainListItem from "./components/TrainListItem";
import ListItemWrapper from "./components/ListItemWrapper";
import SelectedItem from "./components/SelectedItem";
import { GoTrainGuide, ComeTrainGuide, PackageGuide } from "./components/Guide";

import iconprev from "../../../assets/icon/icon_previous.svg";
import PackageListItem from "./components/PackageListItem";

const ImpSelectProduct = () => {
  const navigate = useNavigate();
  const { impInfo, setImpInfo } = useContext(UserContext);

  const [current, setCurrent] = useState("prgr"); // "edit" || "prgr"
  const [step, setStep] = useState(1); // 1 || 2 || 3 || 4
  const [editImpInfo, setEditImpInfo] = useState(""); // "goTrain", "comeTrain", "package"

  const onClickChangeBtn = (props) => {
    console.log(`${props} Edit 페이지로 변경합니다.`);
    setCurrent("edit");
    setEditImpInfo(props);
  };

  const handlePrev = () => {
    navigate(-1);
  };

  useEffect(() => {
    console.log(editImpInfo, step);
  }, [editImpInfo, step]);

  return (
    <div>
      <Header
        text="상품선택"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
      {current === "prgr" ? (
        <PrgrPage step={step} onClickChangeBtn={onClickChangeBtn} />
      ) : (
        <EditPage editImpInfo={editImpInfo} />
      )}
    </div>
  );
};

export default ImpSelectProduct;

// Edit 페이지
const EditPage = ({ editImpInfo }) => {
  return (
    <div>
      {editImpInfo === "goTrain" && <GoTrainGuide />}
      {editImpInfo === "comeTrain" && <ComeTrainGuide />}
      {editImpInfo === "package" && <PackageGuide />}
    </div>
  );
};

// Progress 페이지
const PrgrPage = ({ step, onClickChangeBtn }) => {
  return (
    <div>
      <div
        className="selectedzone"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px 10px",
          gap: "10px",
        }}
      >
        {/* 데이터가 있는 것들은 여기서 동적으로 불러올 수 있도록 하기 */}
        <SelectedItem onClickChangeBtn={onClickChangeBtn} info="goTrain" />
        <SelectedItem onClickChangeBtn={onClickChangeBtn} info="comeTrain" />
        <SelectedItem onClickChangeBtn={onClickChangeBtn} info="package" />
      </div>
      {/* step state에 따라서 선택할 정보 고르기 */}
      {step === 1 && <GoTrainGuide />}
      {step === 2 && <ComeTrainGuide />}
      {step === 3 && <PackageGuide />}
      {step === 4 && console.log("마지막 확인 페이지입니다.")}
      {/* <PackageGuide />
      <ListItemWrapper>
        <TrainListItem />
      </ListItemWrapper>
      <ListItemWrapper>
        <PackageListItem />
      </ListItemWrapper> */}
    </div>
  );
};
