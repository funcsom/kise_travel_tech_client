import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import dayjs from "dayjs";

import IconPrev from "./IconPrev";
import IconNext from "./IconNext";

const MyCalendar = ({ value, onChangeDate }) => {
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
      return "original_sunday";
    }

    return "";
  };

  const tileDisabled = ({ date }) => {
    const currentDate = new Date();

    const oneWeekLater = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 7
    );

    const disableDate = date < currentDate || date >= oneWeekLater;
    // 일주일 후부터의 날짜를 비활성화 처리합니다.
    return disableDate;
  };

  return (
    <div className="CalendarWrapperOriginal">
      <Calendar
        value={value}
        formatDay={(locale, date) => dayjs(date).format("D")}
        tileClassName={tileClassName}
        tileDisabled={tileDisabled}
        onChange={onChangeDate}
        calendarType="gregory"
        // 상단 네비게이션 라벨 제어
        navigationLabel={({ date, label, locale, view }) =>
          // alert(
          //   `Current view: ${view}, date: ${date.toLocaleDateString(
          //     locale
          //   )} label: ${label}`
          // )
          label
        }
        next2Label={null}
        prev2Label={null}
        // 앞뒤 달의 이어지는 날짜 보여주기 여부
        // 아래의 버튼들은 Calendar ts 보고 알아차림! 컴포넌트를 랜더링할 수 있구나~
        prevLabel={<IconPrev />}
        nextLabel={<IconNext />}
        // 다음 테스크는 가운데 라벨 클릭이 안되는 것
        // -> 해결 : ./Claendar.css에 있음
        // 그 다음 테스크는 클릭시 색상이 변경되지 않는 것
        // -> 미해결
        showNeighboringMonth={false}
      />
    </div>
  );
};

export default MyCalendar;
