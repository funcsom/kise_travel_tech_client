import Toggle from "./Toggle";
import styles from "./ReserveInfo.module.css";
import Clip from "./Clip";

const ReserveInfo = ({ impInfo, formattedDateForNum }) => {
  return (
    <div className={styles.ReserveInfo}>
      <Toggle title="예약자정보">
        <div className={styles.item}>
          <div className={styles.wrapper}>
            <span className={styles.title}>예약번호</span>
            <span className={styles.info}>{formattedDateForNum}</span>
          </div>
          <div className={styles.wrapper}>
            <span className={styles.title}>성명</span>
            <span className={styles.info}>{impInfo.reserveName}</span>
          </div>
          <div className={styles.wrapper}>
            <span className={styles.title}>이메일</span>
            <span className={styles.info}>{impInfo.email}</span>
          </div>
        </div>
      </Toggle>
    </div>
  );
};

export default ReserveInfo;
