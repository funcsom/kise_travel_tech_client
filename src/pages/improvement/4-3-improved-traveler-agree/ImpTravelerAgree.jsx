import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header";
import Progressbar from "../../../improved/progressbar/Progressbar";
import Contents from "../../../components/common/Contents";
import Footer from "../../../improved/Footer";
import AgreeButton from "./components/AgreeButton";

import iconprev from "../../../assets/icon/icon_previous.svg";
import Button from "../../../improved/Button";
import Text from "./components/Text";
import Modal from "./components/Modal";

const ImpTravelerAgree = () => {
  const [isClickAgree, setIsClickAgree] = useState(false);
  const navigate = useNavigate();
  const [isNotiOpen, setIsNotiOpen] = useState(false);

  const openNoti = () => {
    setIsNotiOpen((prev) => !prev);
  };

  const handleNext = () => {
    navigate("/imp/travelerinfo");
  };

  const handlePrev = () => {
    navigate(-1);
  };

  const handleSelectProduct = () => {
    openNoti();
  };

  const onClickDisabled = () => {
    alert("개인정보의 제3자 제공 동의 약관에 동의하셔야합니다.");
  };

  const isClickCheckbox = () => {
    setIsClickAgree((prev) => !prev);
  };

  return (
    <Contents>
      {isNotiOpen && <Modal openNoti={openNoti} handlePrev={handlePrev} />}
      <Header
        text="약관동의"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
      <Progressbar nthChild={3} />
      <main style={{ padding: "16px" }}>
        <Text />
      </main>
      <main style={{ padding: "16px", flex: "1" }}>
        <AgreeButton
          isClickAgree={isClickAgree}
          isClickCheckbox={isClickCheckbox}
        />
      </main>
      <Footer>
        <div style={{ display: "flex" }}>
          {/* GTM 측정 */}
          <Button
            type="secondary"
            state="default"
            size="large"
            shape="box"
            rate="r2"
            onClickButton={handleSelectProduct}
            id="edit-product-option-btn"
          >
            상품 옵션 수정
          </Button>
          {isClickAgree ? (
            <Button
              type="primary"
              state="default"
              size="large"
              shape="box"
              rate="r3"
              onClickButton={handleNext}
            >
              동의 후 계속하기
            </Button>
          ) : (
            <Button
              type="primary"
              state="disabled"
              size="large"
              shape="box"
              rate="r3"
              onClickButton={onClickDisabled}
            >
              동의 후 계속하기
            </Button>
          )}
        </div>
      </Footer>
    </Contents>
  );
};

export default ImpTravelerAgree;
