import { ImpUserContext } from "../../../../App";
import { useContext } from "react";

const TotalPrice = () => {
  const { impInfo, setImpInfo } = useContext(ImpUserContext);

  const people = impInfo.people;
  const goTrainPrice = impInfo.goTrain.price * people;
  const comeTrainPrice = impInfo.comeTrain.price * people;
  const packagePrice = impInfo.package.price * people;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        padding: "20px 16px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderBottom: "1px solid var(--common-0)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            font: "var(--font-b3-no-m)",
            padding: "10px 0",
          }}
        >
          <span>가는편</span>
          <span>{`${goTrainPrice}원`}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            font: "var(--font-b3-no-m)",
            padding: "10px 0",
          }}
        >
          <span>오는편</span>
          <span>{`${comeTrainPrice}원`}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            font: "var(--font-b3-no-m)",
            padding: "10px 0 20px 0",
          }}
        >
          <span>패키지</span>
          <span>{`${packagePrice}원`}</span>
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
        <span>{`${goTrainPrice + comeTrainPrice + packagePrice}원`}</span>
      </div>
    </div>
  );
};

export default TotalPrice;
