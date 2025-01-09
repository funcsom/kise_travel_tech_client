import SelectedItem from "../components/SelectedItem";
import SelectGoTrain from "../components/SelectProduct/SelectGoTrain";
import SelectComeTrain from "../components/SelectProduct/SelectComeTrain";
import SelectPackage from "../components/SelectProduct/SelectPackage";

import { ImpUserContext } from "../../../../App";
import { useContext } from "react";
import TotalPrice from "../components/TotalPrice";

// Progress 페이지
const PrgrPage = ({ step, setStep, onClickChangeBtn }) => {
  const { impInfo, setImpInfo } = useContext(ImpUserContext);

  const onChangeGoTrainGrade = (grade) => {
    setImpInfo({
      ...impInfo,
      goTrain: { ...impInfo.goTrain, trainGrade: grade },
    });
  };

  const onChangeComeTrainGrade = (grade) => {
    setImpInfo({
      ...impInfo,
      comeTrain: { ...impInfo.comeTrain, trainGrade: grade },
    });
  };

  const onChangeGoTrainPrice = (price) => {
    setImpInfo({
      ...impInfo,
      goTrain: { ...impInfo.goTrain, price: price },
    });
  };

  const onChangeComeTrainPrice = (price) => {
    setImpInfo({
      ...impInfo,
      comeTrain: { ...impInfo.comeTrain, price: price },
    });
  };

  // props = [trainNo, departtime, arrivaltime]
  const selectGoTrain = (props) => {
    setImpInfo({
      ...impInfo,
      goTrain: {
        ...impInfo.goTrain,
        trainNo: props[0],
        departtime: props[1],
        arrivaltime: props[2],
      },
    });
  };

  // props = [trainNo, departtime, arrivaltime]
  const selectComeTrain = (props) => {
    setImpInfo({
      ...impInfo,
      comeTrain: {
        ...impInfo.comeTrain,
        trainNo: props[0],
        departtime: props[1],
        arrivaltime: props[2],
      },
    });
  };

  // props = [name, price]
  const selectPackage = (props) => {
    setImpInfo({
      ...impInfo,
      package: { name: props[0], price: props[1] },
    });
  };

  return (
    <div>
      <div
        className="selectedzone"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px 16px 10px 16px",
          gap: "10px",
        }}
      >
        {/* 데이터가 있는 것들은 여기서 동적으로 불러올 수 있도록 하기 */}
        {impInfo.goTrain.trainNo && (
          <SelectedItem onClickChangeBtn={onClickChangeBtn} info="goTrain" />
        )}
        {impInfo.comeTrain.trainNo && (
          <SelectedItem onClickChangeBtn={onClickChangeBtn} info="comeTrain" />
        )}
        {impInfo.package.name && (
          <SelectedItem onClickChangeBtn={onClickChangeBtn} info="package" />
        )}
      </div>
      {/* step state에 따라서 선택할 정보 고르기 */}
      {step === 1 && (
        <SelectGoTrain
          departStation={impInfo.goTrain.departstation}
          arrivalStation={impInfo.goTrain.arrivalstation}
          setStep={setStep}
          onChangeGoTrainGrade={onChangeGoTrainGrade}
          currentTrainGrade={impInfo.goTrain.trainGrade}
          onChangeGoTrainPrice={onChangeGoTrainPrice}
          selectGoTrain={selectGoTrain}
          preselectedInfo={impInfo.goTrain.trainNo}
        />
      )}
      {step === 2 && (
        <SelectComeTrain
          departStation={impInfo.comeTrain.departstation}
          arrivalStation={impInfo.comeTrain.arrivalstation}
          setStep={setStep}
          onChangeComeTrainGrade={onChangeComeTrainGrade}
          currentTrainGrade={impInfo.comeTrain.trainGrade}
          onChangeComeTrainPrice={onChangeComeTrainPrice}
          selectComeTrain={selectComeTrain}
          preselectedInfo={impInfo.comeTrain.trainNo}
        />
      )}
      {step === 3 && (
        <SelectPackage setStep={setStep} selectPackage={selectPackage} />
      )}
      {step === 4 && <TotalPrice />}
    </div>
  );
};

export default PrgrPage;
