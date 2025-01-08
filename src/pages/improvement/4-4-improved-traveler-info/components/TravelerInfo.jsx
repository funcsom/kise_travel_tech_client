import CustomInput from "./CustomInput";
import CustomCheckbox from "./CustomCheckbox";
import GenderButton from "./GenderButton";

import styles from "./TravelerInfo.module.css";

const TravelerInfo = (props) => {
  return (
    <div className={styles.ReservatorInfo}>
      <div className={styles.headerwarpper}>
        <span className={styles.heading}>여행자</span>
        <span className={styles.radio}>
          {" "}
          <CustomCheckbox /> 예약자 정보와 동일
        </span>
      </div>
      <div className={styles.inputgroup}>
        <div className={styles.inputWrapper}>
          <div className={styles.label}>성별</div>
          <div className={styles.radiowrapper}>
            <GenderButton>남자</GenderButton>
            <GenderButton>여자</GenderButton>
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.label}>이름</div>
          <CustomInput />
        </div>
      </div>
    </div>
  );
};

export default TravelerInfo;
