import { useState } from "react";
import Stepper from "../../../components/common/Stepper";

const PackageCounting = ({ date, packageName, people }) => {
  let [count, setCount] = useState(people);
  const [category, setCategory] = useState([
    { type: "이용수량", num: count, ableToChange: false },
    { type: "이용인원", num: count, ableToChange: false },
  ]);
  const [selectedPackage, setSelectedPackage] = useState(packageName); // 초기값 설정

  const handleCountChange = (index, newCount) => {
    const updateCategory = [...category];
    updateCategory[index].num = newCount;
    setCategory(updateCategory);
  };

  const handlePackageChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedPackage(selectedValue); // 상태 업데이트
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "24px",
          marginBottom: "6px",
        }}
      >
        <div>이용기간</div>
        <div>{date}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <div style={{ flexShrink: "0" }}>일정</div>
        <select
          name="package"
          id="package"
          value={selectedPackage} // 현재 선택된 패키지
          onChange={handlePackageChange} // 변경 핸들러
        >
          <option value={packageName}>{packageName}</option>
        </select>
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
          <Stepper count={item.num} onCountChange={() => {}} />
        </div>
      ))}
    </div>
  );
};

export default PackageCounting;
