import styles from "./TrainListItem.module.css";

import InfoItem from "./InfoItem";
import iconarrowtrain from "../../../../assets/icon/icon_arrow_train.svg";

function getTimeDifference(time1, time2) {
  // 시간 문자열을 "HH:MM" 형식에서 분 단위로 변환
  const [hours1, minutes1] = time1.split(":").map(Number);
  const [hours2, minutes2] = time2.split(":").map(Number);

  // 첫 번째 시간과 두 번째 시간의 총 분 계산
  let totalMinutes1 = hours1 * 60 + minutes1;
  let totalMinutes2 = hours2 * 60 + minutes2;

  // 시간1이 시간2보다 큰 경우, 시간2에 24시간(1440분)을 더함
  if (totalMinutes1 > totalMinutes2) {
    totalMinutes2 += 24 * 60; // 24시간을 분으로 변환하여 더함
  }

  // 두 시간의 차이 계산
  const differenceInMinutes = totalMinutes2 - totalMinutes1;

  // 차이를 시간과 분으로 변환
  const hoursDiff = Math.floor(differenceInMinutes / 60);
  const minutesDiff = differenceInMinutes % 60;

  // 분이 한 자리 수일 경우 앞에 0을 붙여서 반환
  return `${hoursDiff}:${
    minutesDiff < 10 ? "0" + minutesDiff : minutesDiff
  } 소요`;
}

const TrainListItem = ({ logo, trainNo, no, trainInfo }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <div className={styles.trainnoinfo}>
          <InfoItem type="logo">
            <img src={logo} alt="" height={16} />
          </InfoItem>
          <InfoItem type="num">{trainNo}</InfoItem>
          <InfoItem type="sub">{no}</InfoItem>
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
