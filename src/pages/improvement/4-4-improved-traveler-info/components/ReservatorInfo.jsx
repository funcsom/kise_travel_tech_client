import CustomInput from "./CustomInput";

import styles from "./ReservatorInfo.module.css";

const ReservatorInfo = (props) => {
  return (
    <div className={styles.ReservatorInfo}>
      <div className={styles.headerwarpper}>
        <span className={styles.heading}>예약자</span>
        <span className={styles.text}>
          변경이 필요한 부분을 선택해 수정하실 수 있습니다.
        </span>
      </div>
      <div className={styles.inputgroup}>
        <div className={styles.inputWrapper}>
          <div className={styles.label}>이름</div>
          <CustomInput />
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.label}>생년월일</div>
          <CustomInput />
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.label}>휴대폰번호</div>
          <CustomInput />
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.label}>이메일주소</div>
          <CustomInput />
        </div>
      </div>
    </div>
  );
};

export default ReservatorInfo;
