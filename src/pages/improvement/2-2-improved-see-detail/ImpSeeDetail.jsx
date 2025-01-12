import styles from "./ImpSeeDetail.module.css";

import { ImpUserContext } from "../../../App";
import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../../../components/Header";
import Contents from "../../../components/common/Contents";
import Footer from "../../../improved/Footer";
import Button from "../../../improved/Button";

import iconprev from "../../../assets/icon/icon_previous.svg";

const ImpSeeDetail = (props) => {
  const params = useParams();
  const navigate = useNavigate();

  const { impInfo, setImpInfo } = useContext(ImpUserContext);

  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    fetch("/data/improved/products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(impInfo.region);
        const [filtereditem] = data.filter(
          (item) => item.local === impInfo.region
        );
        const [productinfo] = filtereditem.list.filter(
          (p) => p.id === params.id
        );
        setSelectedProduct(productinfo);
        console.log(productinfo);
      });
  }, []);

  const handleNext = () => {
    setImpInfo({
      ...impInfo,
      product: { ...impInfo.product, name: selectedProduct.title },
    });
    navigate("/imp/selectpeople");
  };

  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <Contents>
      <Header
        text="상품상세"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
      <main>
        <div className={styles.imagewrapper}>
          <img className={styles.image} src={selectedProduct.img} alt="" />
        </div>
        <div className={styles.header}>
          <div className={styles.titlewrapper}>
            <div className={styles.subtitle}>{selectedProduct.subtitle}</div>
            <div className={styles.title}>{selectedProduct.title}</div>
          </div>
          <div className={styles.tagwrapper}>
            <div className={`${styles.tag} ${styles.primary}`}>#당일</div>
            <div className={styles.tag}>#무릉별유천지</div>
            <div className={styles.tag}>#묵호도째비골</div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.info}>
          <div
            className={styles.head}
          >{`(${selectedProduct.subtitle}) ${selectedProduct.title}`}</div>

          <div className={styles.infoswrapper}>
            <div className={styles.infowrapper}>
              <div className={styles.infoinfo}>상품코드</div>
              <div
                className={styles.infovalue}
              >{`F2025040700${params.id}`}</div>
            </div>
            <div className={styles.infowrapper}>
              <div className={styles.infoinfo}>판매자</div>
              <div className={styles.infovalue}>한국철도공사</div>
            </div>
            <div className={styles.infowrapper}>
              <div className={styles.infoinfo}>상품금액</div>
              <div className={styles.infovalue}>
                {`${Number(selectedProduct.price).toLocaleString("ko-KR")}원~`}
              </div>
            </div>
            <div className={styles.infowrapper}>
              <div className={styles.infoinfo}>문의전화</div>
              <div className={styles.infovalue}>1600-1234</div>
            </div>
            <div className={styles.infowrapper}>
              <div className={styles.column}>
                <div className={styles.infoinfo}>예약최소인원수</div>
                <div className={styles.stretch}>2명</div>
              </div>
              <div className={styles.div}>x</div>
              <div className={styles.column}>
                <div className={styles.infoinfo}>예약최대인원수</div>
                <div className={styles.stretch}>40명</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.imagedetailwrapper}>
          <img
            className={styles.image}
            src={selectedProduct.imgdetail}
            alt=""
          />
        </div>
        {/* ------------------ 여기에 사진 및 정보가 들어갈 예정입니다. ------------------ */}
      </main>
      <Footer>
        <div style={{ display: "flex" }}>
          <Button
            type="primary"
            state="default"
            size="large"
            shape="box"
            rate="r1"
            onClickButton={handleNext}
          >
            상품예약
          </Button>
        </div>
      </Footer>
    </Contents>
  );
};

export default ImpSeeDetail;
