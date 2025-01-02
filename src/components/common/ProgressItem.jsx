import styles from "./ProgressItem.module.css";

const ProgressIcon = ({ text, text2, type }) => {
  return (
    <div className={`${styles.Progressbar} ${styles[type]}`}>
      {text}
      <br />
      {text2}
    </div>
  );
};

export default ProgressIcon;
