import styles from "./CustomCheckbox.module.css";

const CustomCheckbox = ({ isClickAgree }) => {
  return (
    <input
      className={styles.CustomCheckbox}
      type="checkbox"
      value={isClickAgree}
    />
  );
};

export default CustomCheckbox;
