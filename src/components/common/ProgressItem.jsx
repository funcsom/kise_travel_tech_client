import styles from "./ProgressItem.module.css";

const ProgressIcon = ({ text, type }) => {
  return <div className={`${styles.Progressbar} ${styles[type]}`}>{text}</div>;
};

export default ProgressIcon;
