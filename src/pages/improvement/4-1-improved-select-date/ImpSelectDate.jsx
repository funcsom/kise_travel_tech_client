import { ImpUserContext } from "../../../App";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import MyCalendar from "./components/MyCalendar";

import Header from "../../../components/Header";
import Contents from "../../../components/common/Contents";
import Footer from "../../../improved/Footer";
import Button from "../../../improved/Button";

import iconprev from "../../../assets/icon/icon_previous.svg";

const week = ["일", "월", "화", "수", "목", "금", "토"];

const ImpSelectDate = () => {
  const { impInfo, setImpInfo } = useContext(ImpUserContext);
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleNext = () => {
    navigate("/imp/selectproduct");
  };

  const handlePrev = () => {
    navigate(-1);
  };

  const handleDateChange = (date) => {
    console.log(date);
    const dateformat = `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
    const day = `${date.getDay()}`;
    setImpInfo({ ...impInfo, date: `${dateformat}`, day: `(${week[day]})` });
    setSelectedDate(date);
  };

  return (
    <Contents>
      <Header
        text="날짜선택"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
      <main style={{ padding: "40px 20px" }}>
        <MyCalendar value={selectedDate} onChangeDate={handleDateChange} />
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
            {impInfo.date
              ? `${impInfo.date}${impInfo.day}`
              : "날짜를 선택해주세요"}
          </Button>
        </div>
      </Footer>
    </Contents>
  );
};

export default ImpSelectDate;
