import styles from "./GenderButton.module.css";

const GenderButton = ({ children }) => {
  return <div className={styles.GenderButton}>{children}</div>;
};

export default GenderButton;
