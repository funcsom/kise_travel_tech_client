import InfoItem from "./InfoItem";

const PackageListItem = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <div>
        <div>관광택시 4시간 (중형 차량 1대)</div>
        <div>1 ~ 3인 추천</div>
      </div>
      <InfoItem>20개 남음</InfoItem>
    </div>
  );
};

export default PackageListItem;
