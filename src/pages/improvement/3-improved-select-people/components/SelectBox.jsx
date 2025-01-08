import styles from "./SelectBox.module.css";

const SelectBox = (props) => {
  return (
    <select className={styles.SelectBox} name="" id="">
      <option value="">출발역</option>
      <option value="">서울</option>
    </select>
  );
};

export default SelectBox;
