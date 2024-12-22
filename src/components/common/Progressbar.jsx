import ProgressItem from "./ProgressItem";
import styles from "./Progressbar.module.css";

const Progressbar = ({ nthChild }) => {
  return (
    <div className={styles.Progressbar}>
      <ProgressItem text="여행상품 선택" type={nthChild === 1 && "active"} />
      <ProgressItem text="상세옵션 선택" type={nthChild === 2 && "active"} />
      <ProgressItem text="여행자 약관동의" type={nthChild === 3 && "active"} />
      <ProgressItem text="여행자 정보입력" type={nthChild === 4 && "active"} />
      <ProgressItem
        text="여행상품 예약완료"
        type={nthChild === 5 && "activeLast"}
      />
    </div>
  );
};

export default Progressbar;
