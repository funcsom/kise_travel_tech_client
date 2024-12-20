import arrowto from "../../../assets/icon/icon_arrowto.svg";

const TrainInfo = ({
  selectedDate,
  departPlace,
  departTime,
  arrivalPlace,
  arrivalTime,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "84px",
          borderRight: "1px solid var(--color-gray-400)",
        }}
      >
        {selectedDate}
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          gap: "16px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ font: "var(--font-b3-sb)" }}>{departPlace}</div>
          <div>{departTime}</div>
        </div>
        <img style={{ width: "16px" }} src={arrowto} alt="arrow to" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ font: "var(--font-b3-sb)" }}>{arrivalPlace}</div>
          <div>{arrivalTime}</div>
        </div>
      </div>
    </div>
  );
};

export default TrainInfo;
