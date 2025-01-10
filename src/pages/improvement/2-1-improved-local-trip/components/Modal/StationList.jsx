import styles from "./StationList.module.css";
import selectedcheck from "../../../../../assets/icon/improved/selected_check.svg";
import unselectedcheck from "../../../../../assets/icon/improved/unselected_check.svg";

// type = "selected" / ""
const StationList = ({ text, addStation, type }) => {
  return (
    <div
      onClick={() => addStation(text)}
      className={`${styles.StationList} ${styles[type]}`}
    >
      <span>{text}</span>
      <img src={type === "selected" ? selectedcheck : unselectedcheck} alt="" />
    </div>
  );
};

export default StationList;
