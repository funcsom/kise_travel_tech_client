import SelectedItem from "../components/SelectedItem";
import SelectGoTrain from "../components/SelectProduct/SelectGoTrain";
import SelectComeTrain from "../components/SelectProduct/SelectComeTrain";
import SelectPackage from "../components/SelectProduct/SelectPackage";

import { ImpUserContext } from "../../../../App";
import { useContext } from "react";
import TotalPrice from "../components/TotalPrice";

import styles from "./PrgrPage.module.css";

// Progress 페이지
const PrgrPage = ({ step, setStep, onClickChangeBtn, info, setInfo }) => {
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

  return (
    <div className={styles.PrgrPage}>
      {info.goTrain.trainNo && (
        <div className={`${styles.selectedzone} ${styles[`step${step}`]}`}>
          {/* 데이터가 있는 것들은 여기서 동적으로 불러올 수 있도록 하기 */}
          {info.goTrain.trainNo && (
            <SelectedItem
              onClickChangeBtn={onClickChangeBtn}
              type="goTrain"
              info={info}
            />
          )}
          {info.comeTrain.trainNo && (
            <SelectedItem
              onClickChangeBtn={onClickChangeBtn}
              type="comeTrain"
              info={info}
            />
          )}
          {info.package.name && (
            <SelectedItem
              onClickChangeBtn={onClickChangeBtn}
              type="package"
              info={info}
            />
          )}
        </div>
      )}

      {/* step state에 따라서 선택할 정보 고르기 */}
      {step === 1 && (
        <SelectGoTrain
          departStation={info.goTrain.departstation}
          arrivalStation={info.goTrain.arrivalstation}
          setStep={setStep}
          onChangeGoTrainGrade={onChangeGoTrainGrade}
          currentTrainGrade={info.goTrain.trainGrade}
          selectGoTrain={selectGoTrain}
          preselectedInfo={info.goTrain.trainNo}
          info={info}
        />
      )}
      {step === 2 && (
        <SelectComeTrain
          departStation={info.comeTrain.departstation}
          arrivalStation={info.comeTrain.arrivalstation}
          setStep={setStep}
          onChangeComeTrainGrade={onChangeComeTrainGrade}
          currentTrainGrade={info.comeTrain.trainGrade}
          selectComeTrain={selectComeTrain}
          preselectedInfo={info.comeTrain.trainNo}
          info={info}
        />
      )}
      {step === 3 && (
        <SelectPackage
          setStep={setStep}
          selectPackage={selectPackage}
          info={info}
        />
      )}
      {step === 4 && <TotalPrice info={info} />}
    </div>
  );
};

export default PrgrPage;
