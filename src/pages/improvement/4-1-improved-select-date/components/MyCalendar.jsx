import Calendar from "react-calendar";
import dayjs from "dayjs";

import "react-calendar/dist/Calendar.css";
import "./MyCalendar.css";

const MyCalendar = ({ value, onChangeDate }) => {
  const tileClassName = ({ date }) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);

    // 일요일에 추가 클래스
    if (date.getDay() === 0) {
      return "sunday";
    }

    // 일요일에 추가 클래스
    if (date.getDay() === 6) {
      return "saturday";
    }

    // 오늘 날짜 표시 왜 안되니
    if (date === currentDate) {
      return "today";
    }

    return "";
  };

  const tileDisabled = ({ date }) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);

    const disableDate =
      date < currentDate || date.getMonth() > currentDate.getMonth();
    // 일주일 후부터의 날짜를 비활성화 처리합니다.
    return disableDate;
  };

  return (
    <div>
      <Calendar
        calendarType="gregory"
        value={value}
        onChange={onChangeDate}
        tileClassName={tileClassName}
        tileDisabled={tileDisabled}
        formatDay={(locale, date) => dayjs(date).format("D")}
        nextLabel={null}
        prevLabel={null}
        next2Label={null}
        prev2Label={null}
      />
    </div>
  );
};

export default MyCalendar;
