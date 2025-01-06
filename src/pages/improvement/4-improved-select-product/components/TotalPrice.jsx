const TotalPrice = (props) => {
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
          <span>얼마?</span>
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
          <span>얼마?</span>
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
          <span>얼마?</span>
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
        <span>209.800원</span>
      </div>
    </div>
  );
};

export default TotalPrice;
