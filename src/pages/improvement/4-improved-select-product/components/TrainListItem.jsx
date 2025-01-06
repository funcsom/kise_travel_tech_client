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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <InfoItem type="logo">Logo</InfoItem>
          <InfoItem type="num">{trainNo}</InfoItem>
          <InfoItem type="sub">{Num}</InfoItem>
        </div>
        <InfoItem>20석 남음</InfoItem>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {`${trainInfo[0].time} ${trainInfo[0].station}`}
          <img src={iconarrowtrain} alt="" />{" "}
          {`${trainInfo[1].time} ${trainInfo[1].station}`}
        </div>
        <span style={{ font: "var(--font-b4-no-m)" }}>
          {getTimeDifference(trainInfo[0].time, trainInfo[1].time)}
        </span>
      </div>
    </div>
  );
};

export default TrainListItem;
