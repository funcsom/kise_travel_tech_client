import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  // 예약 가능 날짜와 마감 날짜 설정
  const reservableDates = [
    new Date(2024, 11, 17),
    new Date(2024, 11, 18),
    new Date(2024, 11, 19),
    new Date(2024, 11, 20),
    new Date(2024, 11, 21),
    new Date(2024, 11, 22),
    new Date(2024, 11, 23),
  ];

  const closedDates = [
    new Date(2024, 11, 24),
    new Date(2024, 11, 25),
    new Date(2024, 11, 26),
    new Date(2024, 11, 27),
    new Date(2024, 11, 28),
  ];

  // 날짜 스타일링
  const getDayInlineStyle = (date) => {
    if (reservableDates.some((d) => d.toDateString() === date.toDateString())) {
      return {
        backgroundColor: "#0076C9", // 예약 가능 색상
        color: "white",
        borderRadius: "50%",
      };
    } else if (
      closedDates.some((d) => d.toDateString() === date.toDateString())
    ) {
      return {
        backgroundColor: "#9e9e9e", // 마감 색상
        color: "white",
        borderRadius: "50%",
      };
    }
    return {}; // 기본 스타일
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        inline
        dayClassName={(date) => ""}
        renderDayContents={(day, date) => {
          return (
            <div style={{ ...getDayInlineStyle(date), padding: "5px" }}>
              {day}
            </div>
          );
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
          gap: "1rem",
        }}
      >
        {/* 예약가능 마감 색상 노티 */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#0076C9",
              borderRadius: "50%",
            }}
          ></div>
          <span style={{ marginLeft: "5px" }}>예약 가능</span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#9e9e9e",
              borderRadius: "50%",
            }}
          ></div>
          <span style={{ marginLeft: "5px" }}>마감</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
