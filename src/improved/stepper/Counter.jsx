import styles from "./Counter.module.css";
import counter_minus_default from "../../assets/icon/improved/counter_minus_default.svg";
import counter_minus_disabled from "../../assets/icon/improved/counter_minus_disabled.svg";
import counter_plus_default from "../../assets/icon/improved/counter_plus_default.svg";
import counter_plus_disabled from "../../assets/icon/improved/counter_plus_disabled.svg";

// state = "default" "disabled"
// init = {number type}
const Counter = ({ state, init, handleIncrement, handleDecrement }) => {
  return (
    <div className={styles.Counter}>
      <button
        className={styles.button}
        onClick={state === "default" ? handleDecrement : undefined}
      >
        {state === "default" ? (
          <img src={counter_minus_default} alt="" />
        ) : (
          <img src={counter_minus_disabled} alt="" />
        )}
      </button>
      <span className={styles.number}>{init}</span>
      <button
        className={styles.button}
        onClick={state === "default" ? handleIncrement : undefined}
      >
        {state === "default" ? (
          <img src={counter_plus_default} alt="" />
        ) : (
          <img src={counter_plus_disabled} alt="" />
        )}
      </button>
    </div>
  );
};

export default Counter;
