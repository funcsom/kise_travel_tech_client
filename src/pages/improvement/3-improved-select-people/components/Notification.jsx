import notification from "../../../../assets/icon/improved/notification.svg";
import styles from "./Notification.module.css";

const Notification = ({ openNoti }) => {
  return (
    <div className={styles.Notification}>
      인원 선택 전 안내사항 보기
      <button className={styles.icon} onClick={openNoti}>
        <img src={notification} alt="" />
      </button>
    </div>
  );
};

export default Notification;
