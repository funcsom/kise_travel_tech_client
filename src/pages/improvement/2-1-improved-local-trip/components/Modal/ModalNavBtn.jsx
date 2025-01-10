import styles from "./ModalNavBtn.module.css";
import selectedlocal from "../../../../../assets/icon/improved/selected_local.svg";

const ModalNavBtn = ({ text, type, onClickBtn }) => {
  return (
    <div
      className={`${styles.ModalNavBtn} ${styles[type]}`}
      onClick={onClickBtn}
    >
      <span>{text}</span>
      {type === "selected" && <img src={selectedlocal} alt="" />}
    </div>
  );
};

export default ModalNavBtn;
