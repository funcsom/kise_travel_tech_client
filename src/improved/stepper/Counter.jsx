import styles from "./Counter.module.css";
import counter_minus_default from "../../assets/icon/improved/counter_minus_default.svg";
import counter_minus_disabled from "../../assets/icon/improved/counter_minus_disabled.svg";
import counter_plus_default from "../../assets/icon/improved/counter_plus_default.svg";
import counter_plus_disabled from "../../assets/icon/improved/counter_plus_disabled.svg";

// state = "default" "disabled"
// init = {number type}
const Counter = ({
  stateleft,
  stateright,
  state,
  init,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <div className={styles.Counter}>
      <button
        className={styles.button}
        onClick={state !== "disabled" ? handleDecrement : undefined}
      >
        {state === "disabled" ? (
          <img src={counter_minus_disabled} alt="" />
        ) : (
          <img
            src={
              stateleft === "default"
                ? counter_minus_default
                : counter_minus_disabled
            }
            alt=""
          />
        )}
      </button>
      <span className={styles.number}>{init}</span>
      <button
        className={styles.button}
        onClick={state !== "disabled" ? handleIncrement : undefined}
      >
        {state === "disabled" ? (
          <img src={counter_plus_disabled} alt="" />
        ) : (
          <img
            src={
              stateright === "default"
                ? counter_plus_default
                : counter_plus_disabled
            }
            alt=""
          />
        )}
      </button>
    </div>
  );
};
export default Counter;
