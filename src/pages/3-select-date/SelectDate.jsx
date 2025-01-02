import { UserContext } from "../../App";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import MyCalendar from "./components/Calendar";

import iconprev from "../../assets/icon/icon_previous.svg";
import styles from "./SelectDate.module.css";

const SelectDate = () => {
  const { info, setInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(new Date()); // 상위에서 날짜 상태 관리

  const handleDateChange = (date) => {
    setInfo({ ...info, date: `${date}` });
    setSelectedDate(date); // 선택된 날짜 업데이트
    navigate("/selectproduct");
    console.log("선택된 날짜:", date);
    console.log(info);
  };

  const handlePrev = () => {
    navigate(-1);
  };
  return (
    <div>
      <Header
        text="날짜 선택"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
      <div className={styles.wrapper}>
        <MyCalendar value={selectedDate} onChangeDate={handleDateChange} />
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
