import SelectBox, { SelectBoxPreselected } from "./SelectBox";

import arrowstation from "../../../../assets/icon/improved/arrow_station.svg";
import styles from "./SelectDepartStation.module.css";

const stationlist = [
  "청량리",
  "상봉",
  "양평",
  "만종",
  "횡성",
  "평창",
  "진부",
  "정동진",
  "묵호",
  "동해",
  "덕소",
  "용문",
  "지평",
  "석불",
  "일신",
  "매곡",
  "양동",
  "삼산",
  "서원주",
  "원주",
  "제천",
  "영월",
  "예미",
  "민둥산",
  "사북",
  "고한",
  "태백",
  "동백산",
  "도계",
  "신기",
];

const SelectDepartStation = ({ selectStation, setSelectStation }) => {
  return (
    <div className={styles.SelectDepartStation}>
      <div className={styles.stationwrapper}>
        <div>출발</div>
        <SelectBox
          elems={stationlist}
          selectStation={selectStation}
          setSelectStation={setSelectStation}
        />
      </div>
      <div className={styles.arrow}>
        <img src={arrowstation} alt="" width={16} />
      </div>
      <div className={styles.stationwrapper}>
        <div>도착</div>
        <SelectBoxPreselected
          elems={["동해"]}
          selectStation={selectStation}
          setSelectStation={setSelectStation}
        />
      </div>
    </div>
  );
};

export default SelectDepartStation;
