import styles from "./ListItemWrapper.module.css";

const ListItemWrapper = ({ type, children }) => {
  return <div className={`${styles.wrapper} ${styles[type]}`}>{children}</div>;
};

export default ListItemWrapper;
