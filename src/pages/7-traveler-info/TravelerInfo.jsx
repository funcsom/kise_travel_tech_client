import Header from "../../components/Header";
import Body from "../../components/common/Body";
import Progressbar from "../../components/common/Progressbar";
import ToggleWrapper from "../../components/common/ToggleWrapper";
import Wrapper from "../../components/common/Wrapper";
import Button from "../../components/Button";
import ReservateForm from "./components/ReservateForm";
import TravelerForm from "./components/TravelerForm";
import Product from "../../components/common/Product";

const TravelerInfo = (props) => {
  return (
    <div>
      <Header text="예약인원" />
      <Body>
        <Progressbar nthChild={4} />
        <div>
          <ToggleWrapper title="예약자">
            <Wrapper>
              <ReservateForm />
            </Wrapper>
          </ToggleWrapper>
          <ToggleWrapper title="여행자">
            <Wrapper>
              <TravelerForm />
            </Wrapper>
          </ToggleWrapper>
        </div>
        <div style={{ display: "flex", gap: "7px" }}>
          <Button text="장바구니" type="cart" />
          <Button text="예약" type="cta" />
        </div>
      </Body>
    </div>
  );
};

export default TravelerInfo;
