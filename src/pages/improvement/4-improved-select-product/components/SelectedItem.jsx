import { ImpUserContext } from "../../../../App";
import { useContext } from "react";

const SelectedItem = ({ onClickChangeBtn, info }) => {
  const { impInfo, setImpInfo } = useContext(ImpUserContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px 16px",
        gap: "21px",
        backgroundColor: "var(--gray-95)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ font: "var(--font-t3-b)" }}>
          {`선택한 ${
            info === "goTrain"
              ? "가는편"
              : info === "comeTrain"
              ? "오는편"
              : "패키지"
          }`}
        </span>
        <button
          style={{ font: "var(--font-b4-no-m)", color: "var(--gray-40)" }}
          onClick={() => onClickChangeBtn(info)}
        >
          변경
        </button>
      </div>
      <div>
        <div style={{ font: "var(--font-b3-no-b)" }}>
          {info === "goTrain"
            ? `${impInfo.goTrain.departtime} - ${impInfo.goTrain.arrivaltime}`
            : info === "comeTrain"
            ? `${impInfo.comeTrain.departtime} - ${impInfo.comeTrain.arrivaltime}`
            : `${impInfo.package.name}`}
        </div>
        <div style={{ font: "var(--font-c2-m)", color: "var(--gray-30)" }}>
          {info === "goTrain"
            ? `${impInfo.goTrain.departstation} - ${impInfo.goTrain.arrivalstation}, ${impInfo.goTrain.trainNo}`
            : info === "comeTrain"
            ? `${impInfo.comeTrain.departstation} - ${impInfo.comeTrain.arrivalstation}, ${impInfo.goTrain.trainNo}`
            : `${impInfo.date}${impInfo.day} ${impInfo.people}인 이용`}
        </div>
      </div>
    </div>
  );
};

export default SelectedItem;
