import styles from "./TrainListItem.module.css";

import InfoItem from "./InfoItem";
import iconarrowtrain from "../../../../assets/icon/icon_arrow_train.svg";

function getTimeDifference(time1, time2) {
  // 시간 문자열을 "HH:MM" 형식에서 분 단위로 변환
  const [hours1, minutes1] = time1.split(":").map(Number);
  const [hours2, minutes2] = time2.split(":").map(Number);

  // 첫 번째 시간과 두 번째 시간의 총 분 계산
  const totalMinutes1 = hours1 * 60 + minutes1;
  const totalMinutes2 = hours2 * 60 + minutes2;

  // 두 시간의 차이를 절대값으로 계산
  const differenceInMinutes = Math.abs(totalMinutes2 - totalMinutes1);

  // 차이를 시간과 분으로 변환
  const hoursDiff = Math.floor(differenceInMinutes / 60);
  const minutesDiff = differenceInMinutes % 60;

  // 결과 반환
  return `${hoursDiff}:${minutesDiff} 소요`;
}

const TrainListItem = ({ trainNo, Num = "001", trainInfo }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <div className={styles.trainnoinfo}>
          <InfoItem type="logo">Logo</InfoItem>
          <InfoItem type="num">{trainNo}</InfoItem>
          <InfoItem type="sub">{Num}</InfoItem>
        </div>
        <InfoItem>20석 남음</InfoItem>
      </div>
      <div className={styles.traintimewrapper}>
        <div className={styles.traintime}>
          <div className={styles.timewrapper}>
            <span className={styles.time}>{`${trainInfo[0].time}`}</span>
            <span className={styles.station}>{`${trainInfo[0].station}`}</span>
          </div>
          <img className={styles.arrow} src={iconarrowtrain} alt="" />{" "}
          <div className={styles.timewrapper}>
            <span className={styles.time}>{`${trainInfo[1].time}`}</span>
            <span className={styles.station}>{`${trainInfo[1].station}`}</span>
          </div>
        </div>
        <span className={styles.trainhowlong}>
          {getTimeDifference(trainInfo[0].time, trainInfo[1].time)}
        </span>
      </div>
    </div>
  );
};

export default TrainListItem;
