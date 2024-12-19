import styles from "./Body.module.css";

const Body = ({ children }) => {
  return <div className={styles.Body}>{children}</div>;
};

export default Body;
