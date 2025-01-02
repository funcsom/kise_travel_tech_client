import styles from "./NoneToggleWrapper.module.css";

const NoneToggleWrapper = ({ title, children }) => {
  return (
    <div className={styles.NoneToggleWrapper}>
      <div className={styles.title}>
        <span>{title}</span>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default NoneToggleWrapper;
