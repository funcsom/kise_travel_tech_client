import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header";
import Progressbar from "../../../improved/progressbar/Progressbar";
import Contents from "../../../components/common/Contents";
import Footer from "../../../improved/Footer";
import Button from "../../../improved/Button";
import ReservatorInfo from "./components/ReservatorInfo";
import TravelerInfo from "./components/TravelerInfo";

import iconprev from "../../../assets/icon/icon_previous.svg";

const ImpTravelerInfo = (props) => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/imp/completeproduct");
  };

  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <Contents>
      <Header
        text="예약인원"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
      <Progressbar nthChild={4} />
      <main>
        <div style={{ padding: "10px 16px" }}>
          <ReservatorInfo />
        </div>
        <div
          style={{
            width: "100%",
            height: "6px",
            backgroundColor: "var(--color-background-normal-alternative)",
          }}
        ></div>
        <div style={{ padding: "24px 16px" }}>
          <TravelerInfo />
        </div>
      </main>
      <Footer>
        <div style={{ display: "flex" }}>
          <Button
            type="secondary"
            state="default"
            size="large"
            shape="box"
            rate="r1"
            onClickButton={handleNext}
          >
            장바구니
          </Button>
          <Button
            type="primary"
            state="default"
            size="large"
            shape="box"
            rate="r1"
            onClickButton={handleNext}
          >
            예약
          </Button>
        </div>
      </Footer>
    </Contents>
  );
};

export default ImpTravelerInfo;
