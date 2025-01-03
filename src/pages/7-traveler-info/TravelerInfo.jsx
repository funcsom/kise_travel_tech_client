import { UserContext } from "../../App";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/common/Footer";
import Body from "../../components/common/Body";
import Progressbar from "../../components/common/Progressbar";
import NoneToggleWrapper from "../../components/common/NoneToggleWrapper";
import Wrapper from "../../components/common/Wrapper";
import Button from "../../components/Button";
import ReservateForm from "./components/ReservateForm";
import TravelerForm from "./components/TravelerForm";
import Product from "../../components/common/Product";

import iconprev from "../../assets/icon/icon_previous.svg";

const TravelerInfo = () => {
  const { info, setInfo } = useContext(UserContext);
  const [information, setInformaton] = useState({
    name: "",
    dob: "",
    phone: "",
    email: "",
    gender: "m",
  });
  const navigate = useNavigate();

  useEffect(() => {
    console.log("업데이트된 info:", info); // info 변경 시 출력
  }, [info]);

  const handleClick = () => {
    const result = confirm(confirmText);
    if (result) {
      handleNext();
    }
  };

  const handleNext = () => {
    setInfo({
      ...info,
      name: information.name,
      dob: information.dob,
      phone: information.phone,
      email: information.email,
      gender: information.gender,
    });
    navigate("/completeproduct");
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
        <Progressbar nthChild={4} />
        <div>
          <NoneToggleWrapper title="예약자">
            <Wrapper>
              <ReservateForm
                information={information}
                setInformation={setInformaton}
              />
            </Wrapper>
          </NoneToggleWrapper>
          <NoneToggleWrapper title="여행자">
            <Wrapper>
              <TravelerForm
                information={information}
                setInformation={setInformaton}
              />
            </Wrapper>
          </NoneToggleWrapper>
        </div>
        <Footer>
          <div style={{ display: "flex", gap: "7px" }}>
            <Button text="장바구니" type="cart" handleclick={handleClick} />
            <Button text="예약" type="cta" handleClick={handleClick} />
          </div>
        </Footer>
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
