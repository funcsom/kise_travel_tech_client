import { ImpUserContext } from "../../../App";
import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header";
import Progressbar from "../../../improved/progressbar/Progressbar";
import Contents from "../../../components/common/Contents";
import Footer from "../../../improved/Footer";
import Button from "../../../improved/Button";
import ReservatorInfo from "./components/ReservatorInfo";
import TravelerInfo from "./components/TravelerInfo";

import iconprev from "../../../assets/icon/icon_previous.svg";
import styles from "./ImpTravelerInfo.module.css";

const ImpTravelerInfo = () => {
  const { impInfo, setImpInfo } = useContext(ImpUserContext);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const travelerNameRef = useRef(null);
  const navigate = useNavigate();

  const [information, setInformaton] = useState({
    reserveName: impInfo.reserveName,
    travelerName: impInfo.travelerName,
    dob: impInfo.dob,
    phone: impInfo.phone,
    email: impInfo.email,
    gender: impInfo.gender,
  });

  const focusOn = (input) => {
    if (input.current) {
      input.current.focus(); // input 요소에 포커스
    }
  };

  // useEffect(() => {
  //   console.log(information);
  // }, [information]);

  const handleClickNext = () => {
    if (!information.phone) {
      alert("전화번호를 정확하게 입력해주세요.");
      focusOn(phoneRef);
    } else if (!information.email) {
      alert("이메일을 정확하게 입력해주세요.");
      focusOn(emailRef);
    } else if (!information.travelerName) {
      alert("여행자 이름을 입력해주세요.");
      focusOn(travelerNameRef);
    } else {
      handleNext();
    }
  };

  const handleNext = () => {
    setImpInfo({
      ...impInfo,
      reserveName: information.reserveName,
      travelerName: information.travelerName,
      dob: information.dob,
      phone: information.phone,
      email: information.email,
      gender: information.gender,
    });
    navigate("/imp/completeproduct");
  };

  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <Contents>
      <Header
        text="여행자 회원정보"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
      <Progressbar nthChild={4} />
      <main>
        <div className={styles.reservatorinfo}>
          <ReservatorInfo
            information={information}
            setInformation={setInformaton}
            phoneRef={phoneRef}
            emailRef={emailRef}
          />
        </div>
        <div
          style={{
            width: "100%",
            height: "6px",
            backgroundColor: "var(--color-background-normal-alternative)",
          }}
        ></div>
        <div className={styles.travelerinfo}>
          <TravelerInfo
            information={information}
            setInformation={setInformaton}
            travelerNameRef={travelerNameRef}
          />
        </div>
      </main>
      <Footer>
        <div style={{ display: "flex" }}>
          <Button
            type="secondary"
            state="default"
            size="large"
            shape="box"
            rate="r1"
            onClickButton={handleClickNext}
          >
            장바구니
          </Button>
          <Button
            type="primary"
            state="default"
            size="large"
            shape="box"
            rate="r1"
            onClickButton={handleClickNext}
          >
            예약
          </Button>
        </div>
      </Footer>
    </Contents>
  );
};

export default ImpTravelerInfo;
