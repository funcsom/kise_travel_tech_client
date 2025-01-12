import styles from "./SelectedItem.module.css";

const SelectedItem = ({ onClickChangeBtn, type, info }) => {
  return (
    <div className={styles.SelectedItem}>
      <div className={styles.titlewrapper}>
        <span className={styles.title}>
          {`선택한 ${
            type === "goTrain"
              ? "가는편"
              : type === "comeTrain"
              ? "오는편"
              : "패키지"
          }`}
        </span>
        <button
          className={styles.changebtn}
          onClick={() => onClickChangeBtn(type)}
        >
          변경
        </button>
      </div>
      <div>
        <div className={styles.timeinfo}>
          {type === "goTrain"
            ? `${info.goTrain.departtime} - ${info.goTrain.arrivaltime}`
            : type === "comeTrain"
            ? `${info.comeTrain.departtime} - ${info.comeTrain.arrivaltime}`
            : `${info.package.name}`}
        </div>
        <div className={styles.stationinfo}>
          {type === "goTrain"
            ? `${info.goTrain.departstation} - ${info.goTrain.arrivalstation}, ${info.goTrain.trainName}`
            : type === "comeTrain"
            ? `${info.comeTrain.departstation} - ${info.comeTrain.arrivalstation}, ${info.comeTrain.trainName}`
            : `${info.date}${info.day} ${info.people}인 이용`}
        </div>
      </div>
    </div>
  );
};

export default SelectedItem;
