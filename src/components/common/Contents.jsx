import styles from "./Contents.module.css";

const Contents = ({ children }) => {
  return <div className={styles.Contents}>{children}</div>;
};

export default Contents;
