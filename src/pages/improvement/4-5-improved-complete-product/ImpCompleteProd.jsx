import { ImpUserContext } from "../../../App";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header";
import Progressbar from "../../../improved/progressbar/Progressbar";
import Contents from "../../../components/common/Contents";
import Footer from "../../../improved/Footer";
import Button from "../../../improved/Button";
import RatingComponent from "./components/RatingComponent";

import ProductInfo from "./components/ProductInfo";
import ReserveInfo from "./components/ReserveInfo";

import iconprev from "../../../assets/icon/icon_previous.svg";
import TotalPrice from "./components/TotalPrice";

import styles from "./ImpCompleteProd.module.css";

const ImpCompleteProd = (props) => {
  const { impInfo, setImpInfo } = useContext(ImpUserContext);
  const [isOpenRating, setIsOpenRating] = useState(true);
  const navigate = useNavigate();

  const closeModal = () => {
    setIsOpenRating(false);
  };

  const handleNext = () => {
    navigate("./");
  };

  const handlePrev = () => {
    navigate(-1);
  };

  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const formattedDateForNum = `${year}${month}${day}${
    Number(hours) + Number(minutes)
  }`;

  const formattedDateForPay = `${month}월 ${day}일 ${hours}시 ${
    Number(minutes) + 5
  }분`;

  return (
    <Contents>
      {isOpenRating && <RatingComponent closeModal={closeModal} />}
      <Header
        text="예약인원"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
      <Progressbar nthChild={5} />
      <main>
        <div className={styles.top}>
          <div>{`${formattedDateForPay}까지 결제 시`}</div>
          <div>{"예약이 확정됩니다."}</div>
        </div>
        <ProductInfo impInfo={impInfo} />
        <div
          style={{
            height: "6px",
            backgroundColor: "var(--color-line-alternative)",
          }}
        ></div>
        <ReserveInfo
          impInfo={impInfo}
          formattedDateForNum={formattedDateForNum}
        />
        <div
          style={{
            height: "6px",
            backgroundColor: "var(--color-line-alternative)",
          }}
        ></div>
        <TotalPrice />
      </main>
      <Footer>
        <div style={{ display: "flex" }}>
          <Button
            type="primary"
            state="default"
            size="large"
            shape="box"
            rate="r1"
          >
            예약확인
          </Button>
        </div>
      </Footer>
    </Contents>
  );
};

export default ImpCompleteProd;
