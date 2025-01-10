import styles from "./Clip.module.css";
import xbutton from "../../../../../assets/icon/improved/small_x_button.svg";

const Clip = ({ deleteStation, children }) => {
  return (
    <span onClick={() => deleteStation(children)} className={styles.Clip}>
      <span>{children}</span>
      <img src={xbutton} alt="" />
    </span>
  );
};

export default Clip;
