import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header";
import Contents from "../../../components/common/Contents";
import Footer from "../../../improved/Footer";
import Button from "../../../improved/Button";

import iconprev from "../../../assets/icon/icon_previous.svg";

const ImpSeeDetail = (props) => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/imp/selectpeople");
  };

  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <Contents>
      <Header
        text="상품상세"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
      <main>
        {/* ------------------ 여기에 사진 및 정보가 들어갈 예정입니다. ------------------ */}
      </main>
      <Footer>
        <div style={{ display: "flex" }}>
          <Button
            type="primary"
            state="default"
            size="large"
            shape="box"
            rate="r1"
            onClickButton={handleNext}
          >
            상품예약
          </Button>
        </div>
      </Footer>
    </Contents>
  );
};

export default ImpSeeDetail;
