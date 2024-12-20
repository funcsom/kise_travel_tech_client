const Info = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <div style={styleWrapper}>
        <div style={styleTitle}>예약번호</div>
        <div style={styleInfo}>202412209119</div>
      </div>
      <div style={styleWrapper}>
        <div style={styleTitle}>상품명</div>
        <div style={styleInfo}>202412209119</div>
      </div>
      <div style={styleWrapper}>
        <div style={styleTitle}>예약인원</div>
        <div style={styleInfo}>202412209119</div>
      </div>
      <div style={styleWrapper}>
        <div style={styleTitle}>예약자정보</div>
        <div style={styleInfo}>202412209119</div>
      </div>
      <div style={styleWrapper}>
        <div style={styleTitle}>예약금액</div>
        <div style={styleInfo}>202412209119</div>
      </div>
      <div style={styleWrapper}>
        <div style={styleTitle}>결제 기한일</div>
        <div style={styleInfo}>202412209119</div>
      </div>
    </div>
  );
};

const styleWrapper = {
  flex: "1",
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
};

const styleTitle = {
  width: "92px",
  display: "flex",
  justifyContent: "left",
  font: "var(--font-b3-sb)",
  padding: "14px 0 0 0",
  borderBottom: "1px solid var(--color-gray-500)",
};

const styleInfo = {
  width: "100%",
  display: "flex",
  justifyContent: "left",
  font: "var(--font-b3-r)",
  padding: "14px 10px",
  borderBottom: "1px solid var(--color-gray-500)",
};

export default Info;
