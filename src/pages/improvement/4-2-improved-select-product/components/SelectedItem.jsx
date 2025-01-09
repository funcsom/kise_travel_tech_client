import styles from "./SelectedItem.module.css";

import { ImpUserContext } from "../../../../App";
import { useContext } from "react";

const SelectedItem = ({ onClickChangeBtn, info }) => {
  const { impInfo, setImpInfo } = useContext(ImpUserContext);
  return (
    <div className={styles.SelectedItem}>
      <div className={styles.titlewrapper}>
        <span className={styles.title}>
          {`선택한 ${
            info === "goTrain"
              ? "가는편"
              : info === "comeTrain"
              ? "오는편"
              : "패키지"
          }`}
        </span>
        <button
          className={styles.changebtn}
          onClick={() => onClickChangeBtn(info)}
        >
          변경
        </button>
      </div>
      <div>
        <div className={styles.timeinfo}>
          {info === "goTrain"
            ? `${impInfo.goTrain.departtime} - ${impInfo.goTrain.arrivaltime}`
            : info === "comeTrain"
            ? `${impInfo.comeTrain.departtime} - ${impInfo.comeTrain.arrivaltime}`
            : `${impInfo.package.name}`}
        </div>
        <div className={styles.stationinfo}>
          {info === "goTrain"
            ? `${impInfo.goTrain.departstation} - ${impInfo.goTrain.arrivalstation}, ${impInfo.goTrain.trainNo}`
            : info === "comeTrain"
            ? `${impInfo.comeTrain.departstation} - ${impInfo.comeTrain.arrivalstation}, ${impInfo.goTrain.trainNo}`
            : `${impInfo.date}${impInfo.day} ${impInfo.people}인 이용`}
        </div>
      </div>
    </div>
  );
};

export default SelectedItem;
