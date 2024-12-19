import styles from "./Wrapper.module.css";

const Wrapper = ({ children }) => {
  return <div className={styles.Wrapper}>{children}</div>;
};

export default Wrapper;
