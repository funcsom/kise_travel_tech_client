const ListItemWrapper = ({ children }) => {
  return (
    <div
      style={{
        padding: "20px 16px",
        backgroundColor: "var(--common-100)",
      }}
    >
      {children}
    </div>
  );
};

export default ListItemWrapper;
