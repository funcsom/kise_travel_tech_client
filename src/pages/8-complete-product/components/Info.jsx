import { UserContext } from "../../../App";
import { useContext } from "react";

import styles from "./Info.module.css";

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
    <div className={styles.info}>
      <div className={styles.rowwrapper}>
        <div className={styles.title}>예약번호</div>
        <div className={styles.infoinfo}>{formattedDateForNum}</div>
      </div>
      <div className={styles.rowwrapper}>
        <div className={styles.title}>상품명</div>
        <div className={styles.infoinfo}>{info.product.name}</div>
      </div>
      <div className={styles.rowwrapper}>
        <div className={styles.title}>예약인원</div>
        <div className={styles.infoinfo}>{info.people}명</div>
      </div>
      <div className={styles.rowwrapper}>
        <div className={styles.title}>예약자정보</div>
        <div className={styles.infoinfo}>
          <span>{info.reserveName}</span>
          <span>{info.email}</span>
        </div>
      </div>
      <div className={styles.rowwrapper}>
        <div className={styles.title}>예약금액</div>
        <div className={styles.infoinfo}>{formattedNumber}원</div>
      </div>
      <div className={styles.rowwrapper}>
        <div className={`${styles.title} ${styles.lasttitle}`}>
          <span>결제기한일</span>
          <span>취소기한일</span>
        </div>
        <div className={`${styles.infoinfo} ${styles.infolast}`}>
          <span>{formattedDateForPay}</span>
          <span>{formattedDateForCancle}</span>
        </div>
      </div>
    </div>
  );
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

export default Info;
