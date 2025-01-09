import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header";
import Progressbar from "../../../improved/progressbar/Progressbar";
import Contents from "../../../components/common/Contents";
import Footer from "../../../improved/Footer";
import AgreeButton from "./components/AgreeButton";

import iconprev from "../../../assets/icon/icon_previous.svg";
import Button from "../../../improved/Button";
import Text from "./components/Text";

const ImpTravelerAgree = (props) => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/imp/travelerinfo");
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
      <Progressbar nthChild={3} />
      <main style={{ padding: "16px" }}>
        <Text />
      </main>
      <main style={{ padding: "16px" }}>
        <AgreeButton />
      </main>
      <Footer>
        <div style={{ display: "flex" }}>
          <Button
            type="secondary"
            state="default"
            size="large"
            shape="box"
            rate="r2"
          >
            상품 옵션 수정
          </Button>
          <Button
            type="primary"
            state="default"
            size="large"
            shape="box"
            rate="r3"
            onClickButton={handleNext}
          >
            다음
          </Button>
        </div>
      </Footer>
    </Contents>
  );
};

export default ImpTravelerAgree;
