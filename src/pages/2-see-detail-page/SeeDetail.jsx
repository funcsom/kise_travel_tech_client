import { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const params = useParams();

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
        console.log(data);
        const [productinfo] = data.List.filter((p) => p.id === params.id);

        if (productinfo) {
          setProd(productinfo);
          // console.log(productinfo);
        } else {
          const [bestprodinfo] = data.Best.filter((p) => p.id === params.id);
          setProd(bestprodinfo);
          // console.log(bestprodinfo);
        }
      });
  }, []);

  useEffect(() => {
    console.log(prod?.img);
  }, [prod]);

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
        <img src={prod?.img} alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            font: "var(--font-orig-h1)",
            gap: "20px",
          }}
        >
          {prod?.title}
          <div
            style={{
              padding: "16px 16px",
              backgroundColor: "#EBF7E3",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <span>상품코드: F20252309423</span>
            <span>{`상품가격: ${prod?.price.toLocaleString(
              "ko-KR"
            )}원 ~`}</span>
            <span>판매자: 한국철도공사</span>
            <span>문의전화:</span>
            <span>예약최소인원수: 1명</span>
            <span>예약최대인원수: 4명</span>
          </div>
        </div>
        <img src={prod?.imgdetail} alt="" />
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
