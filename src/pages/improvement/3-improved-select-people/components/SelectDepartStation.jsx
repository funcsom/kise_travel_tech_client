import SelectBox from "./SelectBox";

import arrowstation from "../../../../assets/icon/improved/arrow_station.svg";
import styles from "./SelectDepartStation.module.css";

const SelectDepartStation = (props) => {
  return (
    <div className={styles.SelectDepartStation}>
      <div className={styles.stationwrapper}>
        <div>출발</div>
        <SelectBox />
      </div>
      <div className={styles.arrow}>
        <img src={arrowstation} alt="" />
      </div>
      <div className={styles.stationwrapper}>
        <div>도착</div>
        <SelectBox />
      </div>
    </div>
  );
};

export default SelectDepartStation;
