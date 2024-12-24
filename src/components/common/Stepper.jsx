import styles from "./Stepper.module.css";
import minus from "../../assets/icon/icon_stepper_minus.svg";
import plus from "../../assets/icon/icon_stepper_plus.svg";

const Stepper = ({ count, onCountChange, minHead, maxHead }) => {
  const handleDecrement = () => {
    if (minHead) {
      if (count > 1) {
        onCountChange(count - 1);
      } else {
        alert("예약최소인원수입니다.");
      }
    } else {
      if (count > 0) {
        onCountChange(count - 1);
      }
    }
  };

  const handleIncrement = () => {
    if (maxHead) {
      if (count < 4) {
        onCountChange(count + 1);
      } else {
        alert("예약최대인원수입니다!");
      }
    } else {
      if (count > 0) {
        onCountChange(count + 1);
      }
    }
  };
  return (
    <div className={styles.Stepper}>
      <button onClick={handleDecrement}>
        <img src={minus} alt="minus button" />
      </button>
      <div>{count}</div>
      <button onClick={handleIncrement}>
        <img src={plus} alt="plus button" />
      </button>
    </div>
  );
};

export default Stepper;
