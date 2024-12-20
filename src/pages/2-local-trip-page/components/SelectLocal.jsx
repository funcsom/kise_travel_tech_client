import { useEffect, useState } from "react";

const SelectLocal = ({ currentLocal, onChange }) => {
  const [local, setLocal] = useState(currentLocal);

  useEffect(() => {
    setLocal(currentLocal);
  }, [currentLocal]);

  const onChangeLocal = (e) => {
    const selectedValue = e.target.value;
    setLocal(selectedValue);
    onChange(selectedValue);
    console.log(local);
  };
  return (
    <div style={{ padding: " 1rem" }}>
      <label htmlFor="selectLocal" style={{ marginRight: "3rem" }}>
        지역선택
      </label>
      <select
        name="local"
        id="selectLocal"
        value={local}
        onChange={onChangeLocal}
        style={{ padding: "8px" }}
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
