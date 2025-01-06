import InfoItem from "./InfoItem";
import iconarrowtrain from "../../../../assets/icon/icon_arrow_train.svg";

const TrainListItem = (props) => {
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
          <InfoItem type="num">KTX - 이음</InfoItem>
          <InfoItem type="sub">001</InfoItem>
        </div>
        <InfoItem>20석 남음</InfoItem>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          03:26 서울 <img src={iconarrowtrain} alt="" /> 05:42 부산
        </div>
        <span style={{ font: "var(--font-b4-no-m)" }}>2:16 소요</span>
      </div>
    </div>
  );
};

export default TrainListItem;
