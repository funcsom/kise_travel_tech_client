import Body from "../../components/common/Body";
import Header from "../../components/Header";
import Calendar from "./components/Calendar";

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
        <Calendar />
      </div>
    </div>
  );
};

export default SelectDate;
