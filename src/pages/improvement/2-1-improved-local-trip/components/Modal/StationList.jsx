import styles from "./StationList.module.css";

const StationList = ({ text, addStation }) => {
  return (
    <div onClick={() => addStation(text)} className={styles.StationList}>
      {text}
    </div>
  );
};

export default StationList;
