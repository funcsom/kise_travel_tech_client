import styles from "./LocalTripProduct.module.css";
import capital from "../../../../assets/image/improved/lovinglocal/local-button/capital.png";
import chungcheong from "../../../../assets/image/improved/lovinglocal/local-button/chungcheong.png";
import gangwon from "../../../../assets/image/improved/lovinglocal/local-button/gangwon.png";
import gyeongsang from "../../../../assets/image/improved/lovinglocal/local-button/gyeongsang.png";
import jeju from "../../../../assets/image/improved/lovinglocal/local-button/jeju.png";
import jeolla from "../../../../assets/image/improved/lovinglocal/local-button/jeolla.png";
import LocalTripButton from "./LocalTripButton";
import { useState } from "react";
import PackagePreview from "./PackagePreview";

const LocalTripProduct = (props) => {
  const [selectedLocal, setSelectedLocal] = useState("capital");

  const clickLocalButton = (props) => {
    setSelectedLocal(props);
  };

  return (
    <div className={styles.LocalTripProduct}>
      <div className={styles.topwrapper}>
        <div className={styles.textwrapper}>
          <div className={styles.title}>
            지역별 인기 여행지, 지금 바로 떠나보세요!
          </div>
          <div className={styles.subtitle}>지역별 대표 패키지 여행 상품</div>
        </div>
        <div className={styles.buttonwrapper}>
          <LocalTripButton
            img={capital}
            text="수도권"
            type={selectedLocal === "capital" && "active"}
            onClickButton={() => clickLocalButton("capital")}
          />
          <LocalTripButton
            img={gangwon}
            text="강원권"
            type={selectedLocal === "gangwon" && "active"}
            onClickButton={() => clickLocalButton("gangwon")}
          />
          <LocalTripButton
            img={chungcheong}
            text="충청권"
            type={selectedLocal === "chungcheong" && "active"}
            onClickButton={() => clickLocalButton("chungcheong")}
          />
          <LocalTripButton
            img={gyeongsang}
            text="경상권"
            type={selectedLocal === "gyeongsang" && "active"}
            onClickButton={() => clickLocalButton("gyeongsang")}
          />
          <LocalTripButton
            img={jeolla}
            text="전라권"
            type={selectedLocal === "jeolla" && "active"}
            onClickButton={() => clickLocalButton("jeolla")}
          />
          <LocalTripButton
            img={jeju}
            text="제주권"
            type={selectedLocal === "jeju" && "active"}
            onClickButton={() => clickLocalButton("jeju")}
          />
        </div>
      </div>
      <PackagePreview selectedLocal={selectedLocal} />
    </div>
  );
};

export default LocalTripProduct;
