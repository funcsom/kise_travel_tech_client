import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header";
import Contents from "../../../components/common/Contents";

import iconprev from "../../../assets/icon/icon_previous.svg";

const ImpSelectDate = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleNext = () => {
    navigate("./");
  };

  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <Contents>
      <Header
        text="날짜선택"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
    </Contents>
  );
};

export default ImpSelectDate;
