import styles from "./TotalPrice.module.css";

const TotalPrice = ({ info }) => {
  // 해당 컴포넌트를 마지막 예약완료 페이지에서도 쓰기 때문에 주의
  const people = info.people;
  const goTrainPrice = info.goTrain.price * people;
  const comeTrainPrice = info.comeTrain.price * people;
  const packagePrice = info.package.price * people;

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
          <span>{`${formatPrice(Number(packagePrice))}원`}</span>
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
