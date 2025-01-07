import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

import Header from "../../components/Header";

import iconprev from "../../assets/icon/icon_previous.svg";
import Body from "../../components/common/Body";
import Footer from "../../components/common/Footer";
import Button from "../../components/Button";

const SeeDetail = () => {
  const { info, setInfo } = useContext(UserContext);
  const [prod, setProd] = useState();
  const navigate = useNavigate();

  // header 뒤로가기 버튼 클릭 시 이전 페이지로 넘어가는 기능
  const handlePrev = () => {
    navigate(-1);
  };

  const handleNext = () => {
    navigate("/selectdate");
  };

  useEffect(() => {
    fetch(`/data/${info.region}-product.json`)
      .then((res) => res.json())
      .then((data) => {
        const imgdetail = data.List.filter(
          (prod) => info.product.name === prod.title
        );
        setProd(imgdetail);
      });
  }, []);

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
        text="상품상세"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
      <Body>
        <img src={prod} alt={prod} />
      </Body>
      <Footer>
        <div style={{ display: "flex", gap: "7px" }}>
          <Button text="상품예약" type="cta" handleClick={handleNext} />
        </div>
      </Footer>
    </div>
  );
};

export default SeeDetail;
