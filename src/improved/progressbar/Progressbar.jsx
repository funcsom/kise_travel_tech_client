import ProgressItem from "./ProgressItem";
import styles from "./Progressbar.module.css";

const Progressbar = ({ nthChild }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.Progressbar}>
        <ProgressItem
          text="여행상품"
          text2="선택"
          type={nthChild <= 1 ? "active" : "fill"}
        />
        <ProgressItem
          text="상세옵션"
          text2="선택"
          type={nthChild === 2 ? "active" : nthChild >= 3 ? "fill" : ""}
        />
        <ProgressItem
          text="여행자"
          text2="약관동의"
          type={nthChild === 3 ? "active" : nthChild >= 4 ? "fill" : ""}
        />
        <ProgressItem
          text="여행자"
          text2="정보입력"
          type={nthChild === 4 ? "active" : nthChild >= 5 ? "fill" : ""}
        />
        <ProgressItem
          text="여행상품"
          text2="예약완료"
          type={nthChild === 5 ? "active" : nthChild >= 6 ? "fill" : ""}
        />
      </div>
    </div>
  );
};

export default Progressbar;
