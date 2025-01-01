import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import MyCalendar from "./components/Calendar";

import iconprev from "../../assets/icon/icon_previous.svg";
import styles from "./SelectDate.module.css";

const SelectDate = () => {
  const navigate = useNavigate();
  const handlePrev = () => {
    navigate("../");
  };
  return (
    <div>
      <Header
        text="날짜 선택"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
      <div className={styles.wrapper}>
        <MyCalendar />
        <div className={styles.guide}>
          <div className={styles.guidearea}>
            <div className={styles.ablecolor}></div>
            <span>예약가능</span>
          </div>
          <div className={styles.guidearea}>
            <div className={styles.disablecolor}></div>
            <span>마감</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectDate;
