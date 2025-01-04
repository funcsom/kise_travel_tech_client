import { UserContext } from "../../../App";
import { useContext } from "react";

const InfoTrain = () => {
  const { info, setInfo } = useContext(UserContext);
  return (
    <div style={{ width: "100%" }}>
      <div style={rowWrapper}>
        <div style={styleTitle}>상품번호</div>
        <div style={styleInfo}>{info.goTrain.trainNo}</div>
      </div>
      <div style={rowWrapper}>
        <div style={styleTitle}>사용일자</div>
        <div style={styleInfo}>{`${info.date} ${info.day}`}</div>
      </div>
      <div style={rowWrapper}>
        <div style={styleTitle}>출발역</div>
        <div
          style={styleInfo}
        >{`${info.goTrain.departstation}(${info.goTrain.departtime})`}</div>
      </div>
      <div style={rowWrapper}>
        <div style={styleTitle}>도착역</div>
        <div
          style={styleInfo}
        >{`${info.goTrain.arrivalstation}(${info.goTrain.arrivaltime})`}</div>
      </div>
      <div style={rowWrapper}>
        <div style={styleTitle}>객실등급</div>
        <div style={styleInfo}>
          <span>{info.reserveName}</span>
        </div>
      </div>
      <div style={rowWrapper}>
        <div style={styleTitleLast}>예약인원</div>
        <div style={styleInfoLast}>어른 {info.people}명</div>
      </div>
    </div>
  );
};

const rowWrapper = {
  flex: "1",
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
};

const styleTitle = {
  width: "92px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  font: "var(--font-orig-b3-sb)",
  padding: "14px 0",
  gap: "14px",
  borderBottom: "1px solid var(--color-gray-500)",
};

const styleTitleLast = {
  width: "92px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  font: "var(--font-orig-b3-sb)",
  padding: "14px 0",
  gap: "14px",
};

const styleInfo = {
  flex: "1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  font: "var(--font-orig-b3-r)",
  padding: "14px 10px 14px 0",
  gap: "14px",
  borderBottom: "1px solid var(--color-gray-500)",
};

const styleInfoLast = {
  flex: "1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  font: "var(--font-orig-b3-r)",
  padding: "14px 10px 14px 0",
  gap: "14px",
};

export default InfoTrain;
