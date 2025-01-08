import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header";
import Progressbar from "../../../improved/progressbar/Progressbar";
import Contents from "../../../components/common/Contents";
import Footer from "../../../improved/Footer";

import iconprev from "../../../assets/icon/icon_previous.svg";
import Button from "../../../improved/Button";

const ImpTravelerAgree = (props) => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("./");
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
      <main style={{ padding: "16px" }}></main>
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
          >
            다음
          </Button>
        </div>
      </Footer>
    </Contents>
  );
};

export default ImpTravelerAgree;
