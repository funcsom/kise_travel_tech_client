import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleClick = () => {
    const result = confirm(confirmText);
    if (result) {
      handleNext();
    }
  };

  const handleNext = () => {
    navigate("/completeproduct");
  };

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
          <Button text="장바구니" type="cart" handleclick={handleClick} />
          <Button text="예약" type="cta" handleclick={handleClick} />
        </div>
      </Body>
    </div>
  );
};

const confirmText = `<여행상품 결제 전 최종 안내>
-철도 직영 및 협력여행사 상품은 해당 상품 설명 내 전화번호로 연락 바랍니다.
-여행상품은 국내표준약관 제6조(특약)에 따라 별도 취소 및 반환 수수료 규정을 적용하고 있습니다. 각 여행상품 안내 페이지 내 취소 및 반환수수료 규정을 반드시 확인하고 구매하셔야 합니다.
* 해당 사항에 동의하지 않을 수 있으나, 미동의 시 상품이용에 제한이 될 수 있습니다.

본인은 여행상품 구매 전 상품 설명을 확인하였으며, 취소 및 반환수수로 내용에 동의합니까?`;

export default TravelerInfo;
