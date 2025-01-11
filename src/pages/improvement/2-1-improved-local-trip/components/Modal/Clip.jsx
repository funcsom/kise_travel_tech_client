import styles from "./Clip.module.css";
import xbutton from "../../../../../assets/icon/improved/small_x_button.svg";

const Clip = ({ deleteStation, children, type }) => {
  return (
    <div className={`${styles.Clip} ${styles[type]}`}>
      <div className={styles.text}>{children}</div>
      {type !== "default" && (
        <img
          onClick={() => deleteStation(children)}
          className={styles.button}
          src={xbutton}
          alt=""
        />
      )}
    </div>
  );
};

export default Clip;
