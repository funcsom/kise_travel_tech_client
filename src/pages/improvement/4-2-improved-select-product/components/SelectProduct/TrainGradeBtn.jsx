import styles from "./TrainGradeBtn.module.css";

const TrainGradeBtn = ({ type, onClickBtn, children }) => {
  return (
    <button
      className={`${styles.wrapper} ${styles[type]}`}
      onClick={onClickBtn}
    >
      {children}
    </button>
  );
};

export default TrainGradeBtn;
