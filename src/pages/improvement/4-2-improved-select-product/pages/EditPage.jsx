import SelectGoTrain from "../components/SelectProduct/SelectGoTrain";
import SelectComeTrain from "../components/SelectProduct/SelectComeTrain";
import SelectPackage from "../components/SelectProduct/SelectPackage";

import { ImpUserContext } from "../../../../App";
import { useContext, useEffect } from "react";

import styles from "./EditPage.module.css";

// Edit 페이지
const EditPage = ({
  editTypeWhat,
  setStep,
  onClickChangeBtn,
  info,
  setInfo,
}) => {
  const onChangeGoTrainGrade = (grade) => {
    setInfo({
      ...info,
      goTrain: {
        ...info.goTrain,
        trainGrade: grade,
        price: grade === "economy" ? 59800 : 68300,
      },
    });
  };

  const onChangeComeTrainGrade = (grade) => {
    setInfo({
      ...info,
      comeTrain: {
        ...info.comeTrain,
        trainGrade: grade,
        price: grade === "economy" ? 59800 : 68300,
      },
    });
  };

  const onChangeGoTrainPrice = (price) => {
    setInfo({
      ...info,
      goTrain: { ...info.goTrain, price: price },
    });
  };

  const onChangeComeTrainPrice = (price) => {
    setInfo({
      ...info,
      comeTrain: { ...info.comeTrain, price: price },
    });
  };

  // props = [id, trainNane, trainNo, departtime, arrivaltime]
  const selectGoTrain = (props) => {
    setInfo({
      ...info,
      goTrain: {
        ...info.goTrain,
        id: props[0],
        trainName: props[1],
        trainNo: props[2],
        departtime: props[3],
        arrivaltime: props[4],
      },
    });
  };

  // props = [id, trainNane, trainNo, departtime, arrivaltime]
  const selectComeTrain = (props) => {
    setInfo({
      ...info,
      comeTrain: {
        ...info.comeTrain,
        id: props[0],
        trainName: props[1],
        trainNo: props[2],
        departtime: props[3],
        arrivaltime: props[4],
      },
    });
  };

  // props = [name, price]
  const selectPackage = (props) => {
    setInfo({
      ...info,
      package: { name: props[0], price: props[1] },
    });
  };

  useEffect(() => {
    setStep((prev) => prev - 1);
  }, []);

  return (
    <div className={styles.EditPage}>
      {editTypeWhat === "goTrain" && (
        <SelectGoTrain
          departStation={info.goTrain.departstation}
          arrivalStation={info.goTrain.arrivalstation}
          setStep={setStep}
          onChangeGoTrainGrade={onChangeGoTrainGrade}
          currentTrainGrade={info.goTrain.trainGrade}
          onChangeGoTrainPrice={onChangeGoTrainPrice}
          selectGoTrain={selectGoTrain}
          onClickChangeBtn={onClickChangeBtn}
          preselectedInfo={info.goTrain.id}
          info={info}
        />
      )}
      {editTypeWhat === "comeTrain" && (
        <SelectComeTrain
          departStation={info.comeTrain.departstation}
          arrivalStation={info.comeTrain.arrivalstation}
          setStep={setStep}
          onChangeComeTrainGrade={onChangeComeTrainGrade}
          currentTrainGrade={info.comeTrain.trainGrade}
          onChangeComeTrainPrice={onChangeComeTrainPrice}
          selectComeTrain={selectComeTrain}
          onClickChangeBtn={onClickChangeBtn}
          preselectedInfo={info.comeTrain.id}
          info={info}
        />
      )}
      {editTypeWhat === "package" && (
        <SelectPackage
          setStep={setStep}
          selectPackage={selectPackage}
          onClickChangeBtn={onClickChangeBtn}
          preselectedInfo={info.package.name}
          info={info}
        />
      )}
    </div>
  );
};

export default EditPage;
