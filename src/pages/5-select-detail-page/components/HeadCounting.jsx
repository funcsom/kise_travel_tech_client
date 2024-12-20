import Stepper from "../../../components/common/Stepper";

const HeadCounting = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ flexShrink: "0" }}>객실등급</div>
        <select name="" id="">
          <option value="">일반실</option>
          <option value="">고급실</option>
        </select>
        <div style={{ flexShrink: "0" }}>재고 : 13</div>
      </div>
      {category.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flexShrink: "0" }}>{item.type}</div>
          <Stepper num={item.num} />
        </div>
      ))}
    </div>
  );
};

const category = [
  { type: "어른", num: "2" },
  { type: "어린이", num: "0" },
  { type: "중증장애인", num: "0" },
  { type: "경증장애인", num: "0" },
  { type: "경로", num: "0" },
  { type: "동반유아", num: "0" },
  { type: "장애보호", num: "0" },
];

export default HeadCounting;
