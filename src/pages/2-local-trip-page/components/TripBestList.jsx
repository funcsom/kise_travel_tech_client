import bestproduct from "../../../assets/image/bestproduct.png";
import iconcalendar from "../../../assets/icon/icon_calendar.svg";
import iconprevious from "../../../assets/icon/icon_previous.svg";

const TripBestList = ({ title, price, onClickProduct }) => {
  return (
    <div
      onClick={onClickProduct}
      style={{
        display: "flex",
        width: "343px",
        alignItems: "flex-end",
        backgroundColor: "#CDE0EE",
        cursor: "pointer",
        position: "relative",
      }}
    >
      <img src={bestproduct} alt="" />
      <img
        src={iconcalendar}
        alt=""
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          width: "36px",
        }}
      />
      <div
        style={{
          zIndex: "1",
          backgroundColor: "#00000060",
          width: "100%",
          height: "45px",
          position: "absolute",
          display: "flex",
          justifyContent: "space-between",
          padding: "8px 10px",
        }}
      >
        <div style={{ font: "var(--font-b4)", color: "white" }}>
          <p>{title}</p>
          <p>{price}</p>
        </div>
        <img
          src={iconprevious}
          alt="cta 버튼"
          style={{ transform: "rotate(180deg)", width: "20px" }}
        />
      </div>
    </div>
  );
};

export default TripBestList;
