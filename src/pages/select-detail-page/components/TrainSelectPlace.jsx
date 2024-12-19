const TrainSelectPlace = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <div style={{ flexShrink: "0" }}>출발역</div>
        <select name="" id="">
          <option value="">{`청량리(07:22)`}</option>
          <option value="">{`청량리(07:22)`}</option>
        </select>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <div style={{ flexShrink: "0" }}>도착역</div>
        <select name="" id="">
          <option value="">{`청량리(07:22)`}</option>
          <option value="">{`청량리(07:22)`}</option>
        </select>
      </div>
    </div>
  );
};

export default TrainSelectPlace;
