import styles from "./ModalNavBtn.module.css";

const ModalNavBtn = ({ text, type, onClickBtn }) => {
  return (
    <div
      className={`${styles.ModalNavBtn} ${styles[type]}`}
      onClick={onClickBtn}
    >
      {text}
    </div>
  );
};

export default ModalNavBtn;
