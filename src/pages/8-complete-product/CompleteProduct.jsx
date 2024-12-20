import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Body from "../../components/common/Body";
import Progressbar from "../../components/common/Progressbar";
import ToggleWrapper from "../../components/common/ToggleWrapper";
import Wrapper from "../../components/common/Wrapper";
import Info from "./components/Info";
import Button from "../../components/Button";

const CompleteProduct = (props) => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/");
  };

  return (
    <div>
      <Header text="예약인원" />
      <Body>
        <Progressbar nthChild={5} />
        <div>
          <Wrapper>
            <Info />
          </Wrapper>
        </div>
        <div style={{ display: "flex", gap: "7px" }}>
          <Button text="예약확인" type="cta" handleclick={handleNext} />
        </div>
      </Body>
    </div>
  );
};

export default CompleteProduct;
