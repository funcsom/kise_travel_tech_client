import styles from "./GenderButton.module.css";

const GenderButton = ({ type, value, onClickBtn, children }) => {
  return (
    <div
      className={`${styles.GenderButton} ${styles[type]}`}
      onClick={() => {
        onClickBtn(value);
      }}
    >
      {children}
    </div>
  );
};

export default GenderButton;
