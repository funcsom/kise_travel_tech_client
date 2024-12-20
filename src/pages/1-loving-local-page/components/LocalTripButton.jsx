const LocalTripButton = ({ img = "", text }) => {
  return (
    <div
      style={{
        width: "6rem",
        height: "6rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ebebeb",
        borderRadius: "3rem",
      }}
    >
      {img && <img src={img} alt="localImage" />}
      {text}
    </div>
  );
};

export default LocalTripButton;
