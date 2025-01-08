import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header";
import Progressbar from "../../../improved/progressbar/Progressbar";
import Contents from "../../../components/common/Contents";
import Footer from "../../../improved/Footer";
import Button from "../../../improved/Button";

import iconprev from "../../../assets/icon/icon_previous.svg";

const ImpCompleteProd = (props) => {
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
      <Progressbar nthChild={5} />
      <Footer>
        <div style={{ display: "flex" }}>
          <Button
            type="secondary"
            state="default"
            size="large"
            shape="box"
            rate="r2"
          >
            예약취소
          </Button>
          <Button
            type="primary"
            state="default"
            size="large"
            shape="box"
            rate="r3"
          >
            바로결제
          </Button>
        </div>
      </Footer>
    </Contents>
  );
};

export default ImpCompleteProd;
