import styles from "./CustomInput.module.css";

const CustomInput = ({ placeholder }) => {
  return (
    <input
      type="text"
      className={styles.CustomInput}
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
