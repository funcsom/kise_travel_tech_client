const SelectedItem = ({ onClickChangeBtn, info }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px 16px",
        gap: "21px",
        backgroundColor: "var(--gray-95)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ font: "var(--font-t3-b)" }}>선택한 가는편</span>
        <button
          style={{ font: "var(--font-b4-no-m)", color: "var(--gray-40)" }}
          onClick={() => onClickChangeBtn(info)}
        >
          변경
        </button>
      </div>
      <div>
        <div style={{ font: "var(--font-b3-no-b)" }}>03:26 - 05:42</div>
        <div style={{ font: "var(--font-c2-m)", color: "var(--gray-30)" }}>
          서울(SEL)-부산(BUS), KTX-이음
        </div>
      </div>
    </div>
  );
};

export default SelectedItem;
