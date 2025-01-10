const Clip = ({ children }) => {
  return (
    <div
      style={{
        padding: "4px 8px",
        backgroundColor: "var(--color-secondary-normal)",
        font: "var(--font-b4-no-sb)",
        color: "var(--color-primary-strong)",
        borderRadius: "4px",
      }}
    >
      {children}
    </div>
  );
};

export default Clip;
