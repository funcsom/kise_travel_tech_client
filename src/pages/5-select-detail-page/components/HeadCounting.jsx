import { useEffect, useState } from "react";
import Stepper from "../../../components/common/Stepper";

// people은 선택한 인원 수, count는 현재 플로우에서의 인원수 state
// 두개의 state가 같지 않을 경우 setValid(false)
const HeadCounting = ({ people, setValid }) => {
  let [count, setCount] = useState(people);
  const [category, setCategory] = useState([
    { type: "어른", num: count, ableToChange: true },
    { type: "어린이", num: 0, ableToChange: false },
    { type: "중증장애인", num: 0, ableToChange: false },
    { type: "경증장애인", num: 0, ableToChange: false },
    { type: "경로", num: 0, ableToChange: false },
    { type: "동반유아", num: 0, ableToChange: false },
    { type: "장애보호", num: 0, ableToChange: false },
  ]);

  useEffect(() => {
    if (count !== people) {
      setValid(false);
    }
  }, [category]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ flexShrink: "0" }}>객실등급</div>
        <select name="" id="">
          <option value="">일반실</option>
          <option value="">특실/우등실</option>
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
          <Stepper
            count={item.num}
            onCountChange={
              item.ableToChange ? (newCount) => setCount(newCount) : undefined
            }
          />
        </div>
      ))}
    </div>
  );
};

export default HeadCounting;
