import Body from "../../components/common/Body";
import Header from "../../components/Header";
import MyCalendar from "./components/Calendar";

import styles from "./SelectDate.module.css";

const SelectDate = (props) => {
  return (
    <div>
      <Header text="날짜 선택" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          backgroundColor: "white",
          padding: "15px",
          flex: "1",
        }}
      >
        <MyCalendar />
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "4px",
              font: "var(--font-b2)",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "16px",
                height: "16px",
                backgroundColor: "var(--color-light-blue-200)",
              }}
            ></div>
            <span>예약가능</span>
          </div>
          <div
            style={{
              display: "flex",
              gap: "4px",
              font: "var(--font-b2)",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "16px",
                height: "16px",
                backgroundColor: "var(--color-gray-300)",
              }}
            ></div>
            <span>마감</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectDate;
