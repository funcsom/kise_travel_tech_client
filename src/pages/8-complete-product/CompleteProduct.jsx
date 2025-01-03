import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/common/Footer";
import Body from "../../components/common/Body";
import Progressbar from "../../components/common/Progressbar";
import ToggleWrapper from "../../components/common/ToggleWrapper";
import Wrapper from "../../components/common/Wrapper";
import Info from "./components/Info";
import InfoTrain from "./components/InfoTrain";
import Button from "../../components/Button";

import iconprev from "../../assets/icon/icon_previous.svg";

const CompleteProduct = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/");
  };

  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <div
      style={{
        height: "100vh", // 뷰포트 높이로 설정
        display: "flex", // Flexbox로 내부 요소 정렬
        flexDirection: "column", // 자식 요소를 세로 방향으로 정렬
      }}
    >
      <Header
        text="예약인원"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
      <Body>
        <Progressbar nthChild={5} />
        <div>
          <Wrapper>
            <Info />
          </Wrapper>
        </div>
        <ToggleWrapper title="가는열차">
          <Wrapper>
            <InfoTrain />
          </Wrapper>
        </ToggleWrapper>
        <Footer>
          <div style={{ display: "flex", gap: "7px" }}>
            <Button text="예약확인" type="cta" handleClick={handleNext} />
          </div>
        </Footer>
      </Body>
    </div>
  );
};

export default CompleteProduct;
