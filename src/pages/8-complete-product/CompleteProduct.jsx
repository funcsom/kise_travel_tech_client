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
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
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
      </Body>
      <Footer>
        <div style={{ display: "flex", gap: "7px" }}>
          <Button text="예약확인" type="cta" handleClick={handleNext} />
        </div>
      </Footer>
    </div>
  );
};

export default CompleteProduct;
