import { useState } from "react";
import Counter from "./Counter";
import styles from "./Stepper.module.css";

// state = "default" "disabled"
// init = {number type}
const Stepper = ({
  title,
  subtitle,
  discription,
  discription2,
  state,
  init,
  minHead = 1,
  maxHead = 9,
}) => {
  const [count, setCount] = useState(init);

  const handleDecrement = () => {
    if (minHead) {
      if (count > 1) {
        setCount(count - 1);
      } else {
        alert("예약최소인원수입니다.");
      }
    } else {
      if (count > 0) {
        setCount(count - 1);
      }
    }
  };

  const handleIncrement = () => {
    if (maxHead) {
      if (count < maxHead) {
        setCount(count + 1);
      } else {
        alert(
          "10명 이상은 여행센터 혹은 철도고객센터(1588-7788)로 문의하시기 바랍니다."
        );
      }
    } else {
      if (count >= 0) {
        setCount(count + 1);
      }
    }
  };

  return (
    <div className={styles.Stepper}>
      <div className={styles.textwrapper}>
        <div className={styles.titlewrapper}>
          <span className={styles.title}>{title}</span>
          <span className={styles.subtitle}>{subtitle}</span>
        </div>
        <div className={styles.discriptionwrapper}>
          <span className={styles.discription}>{discription}</span>
          <span className={styles.discription}>{discription2}</span>
        </div>
      </div>

      <div>
        <Counter
          state={state}
          init={count}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
      </div>
    </div>
  );
};

export default Stepper;
