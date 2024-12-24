const TripBestList = ({ title, price, onClickProduct }) => {
  return (
    <div
      onClick={onClickProduct}
      style={{
        display: "flex",
        alignItems: "flex-end",
        width: "350px",
        height: "350px",
        backgroundColor: "#CDE0EE",
        cursor: "pointer",
      }}
    >
      <div
        style={{ backgroundColor: "#00000050", width: "350px", height: "60px" }}
      >
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default TripBestList;
