import iconcalendar from "../../../assets/icon/icon_calendar.svg";

const TripList = ({ img, title, price, onClickProduct, id }) => {
  const formattedNumber = new Intl.NumberFormat("ko-KR").format(price);

  return (
    <div
      onClick={() => onClickProduct([title, price, id])}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "191px",
        backgroundColor: "white",
        padding: "10px",
        gap: " 6px",
        cursor: "pointer",
        position: "relative",
      }}
    >
      <img
        src={iconcalendar}
        alt=""
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          width: "28px",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <div
          style={{
            width: "100%",
            height: "80px",
            backgroundColor: "#CDE0EE",
            overflow: "hidden",
          }}
        >
          <img src={img} alt="" style={{ width: "100%" }} />
        </div>
        <p style={{ font: "var(--font-orig-t2-t)" }}>{title}</p>
      </div>

      <p
        style={{
          font: "var(--font-orig-t2-b)",
          color: "var(--color-light-blue-200)",
        }}
      >
        {formattedNumber}원 ~
      </p>
    </div>
  );
};

export default TripList;
