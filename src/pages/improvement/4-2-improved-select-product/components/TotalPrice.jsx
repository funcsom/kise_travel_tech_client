import styles from "./TotalPrice.module.css";

import { ImpUserContext } from "../../../../App";
import { useContext } from "react";

const TotalPrice = () => {
  const { impInfo, setImpInfo } = useContext(ImpUserContext);

  const people = impInfo.people;
  const goTrainPrice = impInfo.goTrain.price * people;
  const comeTrainPrice = impInfo.comeTrain.price * people;
  const packagePrice = impInfo.package.price * people;

  const formatPrice = (price) => price.toLocaleString("ko-KR");

  return (
    <div className={styles.wrapper}>
      <div className={styles.detailwrapper}>
        <div className={styles.itemwrapper}>
          <span>가는편</span>
          <span>{`${formatPrice(goTrainPrice)}원`}</span>
        </div>
        <div className={styles.itemwrapper}>
          <span>오는편</span>
          <span>{`${formatPrice(comeTrainPrice)}원`}</span>
        </div>
        <div className={styles.itemwrapper}>
          <span>패키지</span>
          <span>{`${formatPrice(packagePrice)}원`}</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          font: "var(--font-b2-no-b)",
        }}
      >
        <span>결제 금액</span>
        <span className={styles.price}>{`${formatPrice(
          goTrainPrice + comeTrainPrice + packagePrice
        )}원`}</span>
      </div>
    </div>
  );
};

export default TotalPrice;
