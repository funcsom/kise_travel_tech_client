import arrowto from "../../../assets/icon/icon_arrowto.svg";

const TrainInfo = ({ selectedDate, departTime, arrivalTime }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
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
          display: "flex",
          gap: "16px",
          alignItems: "center",
          marginRight: "9px",
        }}
      >
        <div>{departTime} 출발</div>
        <img style={{ width: "16px" }} src={arrowto} alt="arrow to" />
        <div>{arrivalTime} 도착</div>
      </div>
    </div>
  );
};

export default TrainInfo;
