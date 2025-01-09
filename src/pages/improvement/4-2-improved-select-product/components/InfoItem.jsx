const InfoItem = ({ children, type }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:
          type === "logo"
            ? ""
            : type === "num"
            ? "var(--color-fill-alternative)"
            : type === "sub"
            ? ""
            : type === "package"
            ? "var(--color-background-normal-emphasis)"
            : "var(--color-primary-strong)",
        padding: "4px 8px",
        font:
          type === "num" || type === "sub"
            ? "var(--font-b4-re-r-130)"
            : "var(--font-f3-m)",
        color:
          type === "num" || type === "sub"
            ? "var(--color-primary-normal)"
            : type === "package"
            ? "var(--color-static-black)"
            : "var(--color-static-white)",
      }}
    >
      {children}
    </div>
  );
};

export default InfoItem;
