// import { useState } from "react";
// import Stepper from "../../../components/common/Stepper";

// const PackageCounting = ({ packageName, onChangePackage }) => {
//   const [category, setCategory] = useState([
//     { type: "이용수량", num: 2 },
//     { type: "이용인원", num: 0 },
//   ]);

//   const handleCountChange = (index, newCount) => {
//     const updateCategory = [...category];
//     updateCategory[index].num = newCount;
//     setCategory(updateCategory);
//   };

//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//       <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
//         <div style={{ flexShrink: "0" }}>일정</div>
//         <select name="" id="">
//           <option value="6hs+4hs_2ppl">{`관광택시6시간+4시간[2인]`}</option>
//           <option value="6hs+4hs_3ppl">{`관광택시6시간+4시간[3인]`}</option>
//         </select>
//       </div>
//       {category.map((item, index) => (
//         <div
//           key={index}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <div style={{ flexShrink: "0" }}>{item.type}</div>
//           <Stepper
//             count={item.num}
//             onCountChange={(newCount) => handleCountChange(index, newCount)}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PackageCounting;

import { useState } from "react";
import Stepper from "../../../components/common/Stepper";

const PackageCounting = ({ date, packageName, onChangePackage }) => {
  const [category, setCategory] = useState([
    { type: "이용수량", num: 2 },
    { type: "이용인원", num: 0 },
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
    onChangePackage(selectedValue); // 선택된 값 전달
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
          <option value="관광택시6시간+4시간[2인]">{`관광택시6시간+4시간[2인]`}</option>
          <option value="관광택시6시간+4시간[3인]">{`관광택시6시간+4시간[3인]`}</option>
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
          <Stepper
            count={item.num}
            onCountChange={(newCount) => handleCountChange(index, newCount)}
          />
        </div>
      ))}
    </div>
  );
};

export default PackageCounting;
