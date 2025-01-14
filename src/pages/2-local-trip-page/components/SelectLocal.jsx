import { useEffect, useState } from "react";

const SelectLocal = ({ currentLocal, onChange }) => {
  const [local, setLocal] = useState(currentLocal);

  useEffect(() => {
    setLocal(currentLocal);
  }, [currentLocal]);

  // select 태그에서 변경이 일어날 때 option의 value를 현재 컴포넌트의 local 상태와 상위 컴포넌트의 local 상태 변경
  const onChangeLocal = (e) => {
    // const selectedValue = e.target.value;
    // setLocal(selectedValue);
    // onChange(selectedValue);
    alert("강원권 여행 상품을 선택해주세요");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: "1",
      }}
    >
      <label htmlFor="selectLocal" style={{ marginRight: "3rem" }}>
        지역선택
      </label>
      <select
        name="local"
        id="selectLocal"
        value={local}
        onChange={onChangeLocal}
        style={{ padding: "8px", width: "246px" }}
      >
        <option value="capital">수도권</option>
        <option value="gangwon">강원권</option>
        <option value="chungcheong">충청권</option>
        <option value="gyeongsang">경상권</option>
        <option value="jeolla">전라권</option>
        <option value="jeju">제주권</option>
      </select>
    </div>
  );
};

export default SelectLocal;
