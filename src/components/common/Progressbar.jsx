import styles from "./Progressbar.module.css";

const Progressbar = ({ text, type }) => {
  return <div className={`${styles.Progressbar} ${styles[type]}`}>{text}</div>;
};

export default Progressbar;
