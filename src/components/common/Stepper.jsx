import { useState } from "react";
import styles from "./Stepper.module.css";
import minus from "../../assets/icon/icon_stepper_minus.svg";
import plus from "../../assets/icon/icon_stepper_plus.svg";

const Stepper = ({ num }) => {
  const [count, setCount] = useState(num);
  return (
    <div className={styles.Stepper}>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        <img src={minus} alt="minus button" />
      </button>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        <img src={plus} alt="plus button" />
      </button>
    </div>
  );
};

export default Stepper;
