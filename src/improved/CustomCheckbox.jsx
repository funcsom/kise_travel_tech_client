import styles from "./CustomCheckbox.module.css";

const CustomCheckbox = ({ isClickAgree, isClickCheckbox }) => {
  return (
    <input
      className={styles.CustomCheckbox}
      type="checkbox"
      value={isClickAgree}
      // onChange={isClickCheckbox}
    />
  );
};

export default CustomCheckbox;
