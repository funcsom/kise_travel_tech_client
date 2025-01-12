import { useEffect, useState } from "react";
import Counter from "./Counter";
import styles from "./Stepper.module.css";

// state = "default" "disabled"
// init = {number type}
const Stepper = ({
  title,
  subtitle,
  discription,
  discription2,
  count,
  setCount,
  state = "default",
  minHead = 0,
  maxHead = 40,
}) => {
  const [leftState, setLeftState] = useState("default");
  const [rightState, setRightState] = useState("default");

  useEffect(() => {
    if (count === minHead) setLeftState("disabled");
    else setLeftState("default");

    if (count === maxHead) setRightState("disabled");
    else setRightState("default");
  }, [count, minHead, maxHead]);

  const handleDecrement = () => {
    if (count > minHead) {
      setCount(count - 1);
    } else if (title === "어른") {
      alert("예약최소인원수입니다.");
    }
  };

  const handleIncrement = () => {
    if (count < maxHead) {
      setCount(count + 1);
    } else if (title === "어른") {
      alert(
        "41명 이상은 여행센터 혹은 철도고객센터(1588-7788)로 문의하시기 바랍니다."
      );
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
          stateleft={leftState}
          stateright={rightState}
          state={state}
          init={count}
          handleDecrement={title === "어른" ? handleDecrement : undefined}
          handleIncrement={title === "어른" ? handleIncrement : undefined}
        />
      </div>
    </div>
  );
};

export default Stepper;
