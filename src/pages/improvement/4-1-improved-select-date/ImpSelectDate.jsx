import styles from "./ImpSelectDate.module.css";
import { ImpUserContext } from "../../../App";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import MyCalendar from "./components/MyCalendar";

import Header from "../../../components/Header";
import Contents from "../../../components/common/Contents";
import Footer from "../../../improved/Footer";
import Button from "../../../improved/Button";

import iconprev from "../../../assets/icon/icon_previous.svg";
import feb from "../../../assets/image/improved/calendar/feb.png";

const week = ["일", "월", "화", "수", "목", "금", "토"];

const ImpSelectDate = () => {
  const { impInfo, setImpInfo } = useContext(ImpUserContext);
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState();
  const [formatDate, setFormatDate] = useState();

  const handleNext = () => {
    const dateformat = `${
      selectedDate.getMonth() + 1
    }.${selectedDate.getDate()}`;
    const day = `${selectedDate.getDay()}`;
    setImpInfo({ ...impInfo, date: `${dateformat}`, day: `${week[day]}` });
    navigate("/imp/selectproduct");
  };

  const handlePrev = () => {
    navigate(-1);
  };

  const handleDateChange = (date) => {
    console.log(date);
    const dateformat = `${date.getMonth() + 1}.${date.getDate()}`;
    const day = `${date.getDay()}`;

    setSelectedDate(date);
    setFormatDate(`${dateformat}(${week[day]})`);
  };

  return (
    <Contents>
      <Header
        text="날짜선택"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
      <div className={styles.yoil}>
        <div className={`${styles.item} ${styles.sunday}`}>일</div>
        <div className={styles.item}>월</div>
        <div className={styles.item}>화</div>
        <div className={styles.item}>수</div>
        <div className={styles.item}>목</div>
        <div className={styles.item}>금</div>
        <div className={`${styles.item} ${styles.saturday}`}>토</div>
      </div>
      <main
        style={{
          padding: "40px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <MyCalendar value={selectedDate} onChangeDate={handleDateChange} />
        <img src={feb} alt="" />
      </main>

      <Footer>
        <div style={{ display: "flex" }}>
          <Button
            type="primary"
            state="default"
            size="large"
            shape="box"
            rate="r1"
            onClickButton={handleNext}
          >
            {formatDate ? `${formatDate} 선택` : "날짜를 선택해주세요"}
          </Button>
        </div>
      </Footer>
    </Contents>
  );
};

export default ImpSelectDate;
