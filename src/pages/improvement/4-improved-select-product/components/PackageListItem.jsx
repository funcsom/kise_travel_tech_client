import InfoItem from "./InfoItem";

const PackageListItem = ({ name, reccommandedhead }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        <span style={{ font: "var(--font-b3-no-b)" }}>{name}</span>
        <span style={{ font: "var(--font-b4-no-m)" }}>{reccommandedhead}</span>
      </div>
      <InfoItem>20개 남음</InfoItem>
    </div>
  );
};

export default PackageListItem;
