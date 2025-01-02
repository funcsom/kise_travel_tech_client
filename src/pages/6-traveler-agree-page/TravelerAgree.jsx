import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Body from "../../components/common/Body";
import Progressbar from "../../components/common/Progressbar";
import Header from "../../components/Header";
import Wrapper from "../../components/common/Wrapper";

import iconprev from "../../assets/icon/icon_previous.svg";
import AgreeText from "./components/AgreeText";
import Button from "../../components/Button";

const TravelerAgree = () => {
  const [open, setOpen] = useState(false);
  const [haveSeen, setHaveSeen] = useState(false);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);
    setHaveSeen(true);
  };

  const handleCheckboxChange = () => {
    if (haveSeen) {
      setChecked(!checked);
    } else {
      alert("[상세보기] 확인 후 동의 가능합니다");
    }
  };

  const handleNext = () => {
    navigate("/travelerinfo");
  };

  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <div>
      <Header
        text="예약인원"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
      <Body>
        <Progressbar nthChild={3} />
        <Wrapper>
          <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
            <div
              style={{
                font: "var(--font-b3-r)",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <input
                  type="checkbox"
                  id="agree"
                  style={{ marginRight: "0" }}
                  onChange={handleCheckboxChange}
                  checked={checked}
                />
                <label htmlFor="agree">개인정보의 제3자 제공 동의</label>
              </div>

              <button
                onClick={handleClick}
                style={{
                  width: "105px",
                  height: "40px",
                  backgroundColor: "var(--color-gray-400)",
                  color: "var(--color-white)",
                }}
              >
                상세보기
              </button>
            </div>
            {open && <AgreeText />}
          </div>
        </Wrapper>
        <Button text="다음" type="cta" handleClick={handleNext} />
      </Body>
    </div>
  );
};

export default TravelerAgree;
