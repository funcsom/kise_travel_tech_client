import { UserContext } from "../../App";
import { useContext, useState, useEffect } from "react";
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
    console.log(date);
    const dateformat = `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
    const day = `${date.getDay()}`;
    setInfo({ ...info, date: `${dateformat}`, day: `(${week[day]})` });
    setSelectedDate(date); // 선택된 날짜 업데이트
    navigate("/selectproduct");
  };

  useEffect(() => {
    console.log("업데이트된 info:", info); // info 변경 시 출력
  }, [info]);

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

const week = ["일", "월", "화", "수", "목", "금", "토"];
