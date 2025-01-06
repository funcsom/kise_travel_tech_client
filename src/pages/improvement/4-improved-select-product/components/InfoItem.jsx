const InfoItem = ({ children, type }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:
          type === "logo"
            ? "var(--gray-60)"
            : type === "num"
            ? "var(--gray-90)"
            : type === "sub"
            ? "var(--common-100)"
            : "var(--gray-95)",
        padding: "4px 8px",
        font:
          type === "num" || type === "sub"
            ? "var(--font-b4-re-r-130)"
            : "var(--font-f3-m)",
        color:
          type === "num" || type === "sub"
            ? "var(--gray-40)"
            : "var(--common-0)",
      }}
    >
      {children}
    </div>
  );
};

export default InfoItem;
