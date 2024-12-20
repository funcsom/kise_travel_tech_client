const TripList = ({ img, title, price }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "150px",
        backgroundColor: "white",
        padding: "8px",
        gap: " 6px",
      }}
    >
      {/* <img src="" alt="" /> */}
      <div
        style={{ width: "140px", height: "80px", backgroundColor: "#CDE0EE" }}
      ></div>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
};

export default TripList;
