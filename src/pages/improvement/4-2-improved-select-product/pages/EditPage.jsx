import SelectGoTrain from "../components/SelectProduct/SelectGoTrain";
import SelectComeTrain from "../components/SelectProduct/SelectComeTrain";
import SelectPackage from "../components/SelectProduct/SelectPackage";

import { ImpUserContext } from "../../../../App";
import { useContext, useEffect } from "react";

// Edit 페이지
const EditPage = ({ editImpInfo, setStep, onClickChangeBtn }) => {
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

  useEffect(() => {
    setStep((prev) => prev - 1);
  }, []);

  return (
    <div>
      {editImpInfo === "goTrain" && (
        <SelectGoTrain
          departStation={impInfo.goTrain.departstation}
          arrivalStation={impInfo.goTrain.arrivalstation}
          setStep={setStep}
          onChangeGoTrainGrade={onChangeGoTrainGrade}
          currentTrainGrade={impInfo.goTrain.trainGrade}
          onChangeGoTrainPrice={onChangeGoTrainPrice}
          selectGoTrain={selectGoTrain}
          onClickChangeBtn={onClickChangeBtn}
          preselectedInfo={impInfo.goTrain.trainNo}
        />
      )}
      {editImpInfo === "comeTrain" && (
        <SelectComeTrain
          departStation={impInfo.comeTrain.departstation}
          arrivalStation={impInfo.comeTrain.arrivalstation}
          setStep={setStep}
          onChangeComeTrainGrade={onChangeComeTrainGrade}
          currentTrainGrade={impInfo.comeTrain.trainGrade}
          onChangeComeTrainPrice={onChangeComeTrainPrice}
          selectComeTrain={selectComeTrain}
          onClickChangeBtn={onClickChangeBtn}
          preselectedInfo={impInfo.comeTrain.trainNo}
        />
      )}
      {editImpInfo === "package" && (
        <SelectPackage
          setStep={setStep}
          selectPackage={selectPackage}
          onClickChangeBtn={onClickChangeBtn}
          preselectedInfo={impInfo.package.name}
        />
      )}
    </div>
  );
};

export default EditPage;
