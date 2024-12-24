import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import dayjs from "dayjs";

const MyCalendar = () => {
  const navigate = useNavigate();
  const [value, onChange] = useState(new Date()); // 초기값은 현재 날짜

  const handleDateChange = (date) => {
    onChange(date); // 상태 업데이트
    navigate("/selectproduct"); // 선택된 후 페이지 이동
  };

  const tileClassName = ({ date }) => {
    const currentDate = new Date();
    const oneWeekLater = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 7
    );
    const twoWeeksLater = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 14
    );

    // 오늘부터 7일 뒤에 해당하는 날짜에 클래스 추가
    if (date >= currentDate && date < oneWeekLater) {
      return "available"; // 원하는 커스텀 클래스
    }

    // 7일부터 14일 뒤에 해당하는 날짜에 클래스 추가
    if (date >= oneWeekLater && date < twoWeeksLater) {
      return "disavailable"; // 원하는 커스텀 클래스
    }

    // 일요일에 추가 클래스
    if (date.getDay() === 0) {
      return "sunday";
    }

    return "";
  };

  const tileDisabled = ({ date }) => {
    const currentDate = new Date();
    // 일주일 후의 날짜를 구합니다.
    const oneWeekLater = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 7
    );

    const disableDate = date <= currentDate || date >= oneWeekLater;
    // 일주일 후부터의 날짜를 비활성화 처리합니다.
    return disableDate;
  };

  return (
    <Calendar
      value={value}
      formatDay={(locale, date) => dayjs(date).format("D")}
      tileClassName={tileClassName}
      tileDisabled={tileDisabled}
      onChange={handleDateChange}
      calendarType="gregory"
      next2Label={null}
      prev2Label={null}
      // 앞뒤 달의 이어지는 날짜 보여주기 여부
      showNeighboringMonth={false}
    />
  );
};

export default MyCalendar;
