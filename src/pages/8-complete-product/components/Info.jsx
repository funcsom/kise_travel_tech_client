import { UserContext } from "../../../App";
import { useContext } from "react";

const Info = () => {
  const { info, setInfo } = useContext(UserContext);

  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const formattedDateForNum = `${year}${month}${day}${
    Number(hours) + Number(minutes)
  }`;

  const formattedDateForPay = `${year}년${month}월${day}일 ${hours}시${
    Number(minutes) + 5
  }분`;

  const formattedDateForCancle = `${year}년${month}월${Number(day) + 4}일`;

  const formattedNumber = new Intl.NumberFormat("ko-KR").format(
    info.product.price * info.people
  );

  return (
    <div style={{ width: "100%" }}>
      <div style={rowWrapper}>
        <div style={styleTitle}>예약번호</div>
        <div style={styleInfo}>{formattedDateForNum}</div>
      </div>
      <div style={rowWrapper}>
        <div style={styleTitle}>상품명</div>
        <div style={styleInfo}>{info.product.name}</div>
      </div>
      <div style={rowWrapper}>
        <div style={styleTitle}>예약인원</div>
        <div style={styleInfo}>{info.people}명</div>
      </div>
      <div style={rowWrapper}>
        <div style={styleTitle}>예약자정보</div>
        <div style={styleInfo}>
          <span>{info.reserveName}</span>
          <span>{info.email}</span>
        </div>
      </div>
      <div style={rowWrapper}>
        <div style={styleTitle}>예약금액</div>
        <div style={styleInfo}>{formattedNumber}원</div>
      </div>
      <div style={rowWrapper}>
        <div style={styleTitleLast}>
          <span>결제기한일</span>
          <span>취소기한일</span>
        </div>
        <div style={styleInfoLast}>
          <span>{formattedDateForPay}</span>
          <span>{formattedDateForCancle}</span>
        </div>
      </div>
    </div>
  );
};

const rowWrapper = {
  flex: "1",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "stretch",
  gap: "16px",
};

const styleTitle = {
  width: "92px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  font: "var(--font-b3-sb)",
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
  font: "var(--font-b3-sb)",
  padding: "14px 0",
  gap: "14px",
};

const styleInfo = {
  flex: "1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  font: "var(--font-b3-r)",
  padding: "14px 10px 14px 0",
  gap: "14px",
  borderBottom: "1px solid var(--color-gray-500)",
};

const styleInfoLast = {
  flex: "1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  font: "var(--font-b3-r)",
  padding: "14px 10px 14px 0",
  gap: "14px",
};

export default Info;
